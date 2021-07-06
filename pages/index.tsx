
import { Page, Note, Divider, Button, Link, Row, Col } from "@geist-ui/react";
import * as Icons from "react-feather";
import style from "../styles/pages/home.module.css"
// import social from "../libs/constants";



const HomePage = () => {
  return (
      <Page>
        {/* Hero Section */}
        <div className={style.hero__section}>

          <h1 className={style.hero__title}>We Build,<br></br>
          Design,<br></br>Innovate.</h1>

          <Divider />
          <div className={style.hero__tagline}>
            <p>
              We are Serum Studio. We build, design and innovate. <br></br> 
              Our main priority is to give high-quality products for free with ease!
            </p>
          </div>
          <div className={style.hero__btn__row}>
            <Button icon={ <Icons.Layers /> } className={style.hero__btn} type="secondary">
              Projects
            </Button>
            <Button icon={<Icons.Twitter />} type="secondary" ghost className={style.hero__btn} onClick={() => { window.open('https://twitter.com/serumstudio', '_blank') }}>
              Twitter
            </Button>
          </div>
          
        </div>

        {/* <div>
          <h2 style={{ alignContent: "center"}} id="hashtag-goals">
            <Link href="#hashtag-goals">Project Goals</Link>
          </h2>
          <p>
            The goal of the project is to create a beautiful and extensible
            experience for command-line interface users, built on open web
            standards. In the beginning, our focus will be primarily around speed,
            stability and the development of the correct API for extension
            authors.
          </p>
          <p>
            In the future, we anticipate the community will come up with
            innovative additions to enhance what could be the simplest, most
            powerful and well-tested interface for productivity.
          </p>
        </div> */}
        

      </Page>
  )
};

export default HomePage;