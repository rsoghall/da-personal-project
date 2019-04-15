const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('method hit')
        try {
            const { user_name,
                    user_email,
                    password} = req.body
                    
            let db = req.app.get('db')
            const[foundUser] = await db.login_user([user_email])
            console.log('found user', foundUser)
                if([foundUser]){
                    return res.status(200).send({message: 'Email already exists'})
                }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            await db.register_user([user_name, user_email, hash])
            res.sendStatus(200)
        }catch(error){
            res.status(500).send(error)
        }
    },

}