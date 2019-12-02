import React from "react";
import Todd from "../../images/Todd50-2.jpg";
import './About.css';

export default function About() {
  return (
    <div className="aboutUs-wrapper">
        <h1> About Us</h1>
        <div className="aboutUs-info">
        <p>
          Welcome to Dianne Adair Enrichment Programs web site. Welcome to
            Dianne Adair Enrichment Programs web site. Starting in 1983 with one
            location, Dianne Carbine opened Dianne Adair Daycare Centers with the
            ideal to bring safe, affordable daycare in an educational environment
            to working parents of school age children. Through her vision and
            guidance along with her husband Larry, we have grown to nine sites
            with over a hundred employees and have had thousands of children under
            our care. In 2003 Dianne and Larry retired turning the company over to
            the capable hands of Dianne’s son, Todd Porter, and Larry’s son, Brian
            Carbine and we became Dianne Adair Enrichment Programs. Together they
            have great plans for future growth while maintaining the integrity of
            the original dream. Please feel free to browse through our pages and
            to contact us any time at one of our sites or the main office for
            questions regarding daycare or employment opportunities.
        </p>
      </div>
      
      <h1>Todd Porter</h1>
      
      
      <div className="About-todd">
          <img src={Todd} alt="Todd Porter" />
        <p className="About-todd-text">
          Todd Porter, son of Dianne Adair and brother to Brian Carbine, was our
          Executive Director from 2003 until 2019 when he tragically left us due
          to a hiking accident. Todd had a passion for life, for nature, and for
          people. This was evident almost immediately upon meeting him. He would
          make you feel like age old friends from the start. His dedication to
          family and friends ran deep, as well as his love for this company and
          everything it represented. He leaves a hole in our hearts and in our
          Dianne Adair Centers that can’t be replaced, but he leaves a legacy
          that we at Dianne Adair will strive to uphold and we will continue to
          make him proud every day. We will miss him immensely and we are
          committed to carry the torch nobly as we know he will live on in each
          and every child’s smiling face.
        </p>
        </div>

        <h1>Mission Statement</h1>

      <div className="aboutUs-statement">
        <p>
          Dianne Adair Day Care Centers understands that the single most
          important thing to all parents are their children. There is no greater
          responsibility than caring for the children entrusted to our care. Our
          number one priority is to provide our children with care and
          supervision and a happy, safe place away from home. Our centers are
          truly special because of the talented people who operate them. Our
          dedicated staff are well trained, professional and above all they
          enjoy working with kids. As we move forward we will continue to
          provide the highest quality child care at rates that among the most
          affordable in the county. Dianne Adair Day Care Centers is a nonprofit
          organization that operates high quality, licensed, before and after
          school child care programs. All centers are located on elementary
          school campuses throughout the Mt. Diablo Unified School District. For
          over twenty years Dianne Adair Day Care Centers has served thousands
          of families in central Contra Costa County and continues to serve a
          critical role on each campus we serve.
        </p>
      </div>
    </div>
  );
}
