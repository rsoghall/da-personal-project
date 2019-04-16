const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('method hit')
        try {
            const { user_name,
                    user_email,
                    password,
                    user_role,
                    user_account} = req.body
                    console.log(req.body)
            const db = req.app.get('db')
            const [foundUser] = await db.check_email([user_email])
            console.log('found user', foundUser)
                if(foundUser){
                    console.log('after userfound')
                    return res.status(403).send({message: 'Email already exists'})
                }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            console.log(hash)
            const [newUser] = await db.register_user([
                    user_name,
                    user_email,
                    hash, 
                    user_role,
                    user_account
                ])
                    console.log(newUser)
            req.session.user = {
                    user_id: newUser.user_id,
                    user_name: newUser.user_name, 
                    user_email: newUser.user_email,
                    user_role: newUser.user_role,
                    user_account: newUser.user_account
                    }
            res.status(200).send({
                message: 'logged in',
                userData: req.session.user,
                loggedIn: true
            })
        }catch(error){
            console.log({error})
            res.status(500).send(error)
        }
    },

    centers: async (req,res) => {
        try {
            const db = req.app.get('db')
            const centerArr = await db.get_centers()
            res.status(200).send(centerArr)
        }catch(error){
            console.log({error})
            res.status(500).send(error)
        }
    }

}