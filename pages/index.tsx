
import { Page, Note, Divider, Button, Link, Row, Col } from "@geist-ui/react";
import * as Icons from "react-feather";
import style from "../styles/pages/home.module.css"
import SEO from "../components/seo";


const HomePage = () => {
  return (
      
      <Page>
        <SEO 
          description = "We build, design and innovate. Our main priority is to give high-quality products for free with ease!"
          title = "Serum Studio"
          author = "serumstudio"
          image = "https://imgur.com/KamgzqK.png"
          theme = "#111"
        />
        {/* Hero Section */}
        <div className={style.hero__section}>

          <h1 className={style.hero__title}>
            We <span className={style.text__animation}>Build</span>,<br></br>
            Design,<br></br>
            <span className={style.text__animation}>Innovate.</span>
          </h1>

          <Divider />
          <div className={style.hero__tagline}>
            <p>
              We are Serum Studio. We build, design and innovate. <br></br> 
              Our main priority is to give high-quality products for free with ease!
            </p>
          </div>
          <div className={style.hero__btn__row}>
            <Button icon={ <Icons.Layers /> } className={style.hero__btn} type="secondary" onClick={() => {window.location.href = "/projects"}}>
              Projects
            </Button>
            <Button icon={<Icons.Twitter />} type="secondary" ghost className={style.hero__btn} onClick={() => { window.open('https://twitter.com/serumstudio', '_blank') }}>
              Twitter
            </Button>
          </div>
          
        </div>

        

      </Page>
  )
};

export default HomePage;
