
import { 
    Page, Divider, Tag, Badge, Row, Spacer, Code, Note, 
    Collapse, Text, Description, User, useTheme 

} from "@geist-ui/react";

import SEO from "../components/seo";
import style from "../styles/pages/home.module.css"



const ProjectPage = () => {
    const theme = useTheme();
    return (
        <Page size={`mini`}>
            <SEO 
                title = "Serum Projects"
                author = "serumstudio"
                description = "Here are some list of our open-source projects that we developed this past year."
                image = ""
                theme = ""
            />
            <div>
                <h2 className={style.project__title} style={{ textAlign: 'left' }}>
                    Serum 
                    <span className={style.text__animation}>
                        Projects
                    </span>
                </h2>
                
                <p style={{ color: `${theme.palette.accents_3}` }}>Last Updated: June 7, 2021</p>
            
                <Divider />
                <User src="https://github.com/serumstudio.png" name="Serum Studio">
                    <User.Link href="https://twitter.com/serumstudio" rel="noreferrer" >@serumstudio</User.Link>
                </User>
                <p>
                    Here are some list of our projects that we developed this past year. Most of theme <br></br>
                    were open source and distributed under MIT license.
                </p>

                <Row>
                    <h2>Serum Microphone</h2>
                    <Badge style={{ height: 22, marginTop: "10px", marginLeft: "5px" }} type="success" className={style.project__version}>1.1.3</Badge>
                </Row>
                
                <div>
                    {/* <Tag type="success" invert>
                        Status: Released
                    </Tag> */}
                    <Note type="warning">This application is only available for Windows</Note>
                </div>
                <Text>
                    🎙 Serum Microphone is a open source text-to-speech program that act as your microphone. <br></br>
                    It was developed for those who doesn&apos;t have a microphone. It is easy to use and lightweight. Up to 10mb of storage is used.
                </Text>

                {/* Features Section */}
                <Collapse.Group>
                    <Collapse title="Features" initialVisible>
                        
                        <Description title="Easy to use" content="It only have 2 button for preview and output." />
                        <Spacer />
                        <Description title="Improved performance" content={
                            <p style={{ fontWeight: 500 }}>
                                If you use v1.1.3 we had a big update where <br></br> 
                                we focus on performance issues
                            </p>
                        }/>
                        <Spacer />
                        <Description title="Open Source and absolutely free" content={
                            <p style={{ fontWeight: 500 }}>
                                This project is completely free and open source. <br></br> 
                                Feel free to contribute at <a href="https://github.com/serumstudio/microphone" target={"_blank"} rel="noreferrer" >GitHub Repo</a> also open <br></br> 
                                an issue if there is.
                            </p>
                        }/>
                    
                    </Collapse>
                    <Collapse title="FAQ">
                        <Description title="How it Works?" content={
                            <p style= {{ fontWeight: 500 }}>
                                This software is powered by <a href="https://vb-audio.com/Cable/" target={"_blank"} rel="noreferrer" >VB Cable</a>. Basically, the VB Cable act as the main pipe where <br></br> 
                                the streamed audio comes with. It won&apos;t work unless you installed the driver and setup the <br></br> audio input. <br></br> 
                                <a href="">Learn more here</a> 
                            </p>
                        } />
                        <Spacer />
                        <Description title="How to report bug?" content={
                            <p style= {{ fontWeight: 500 }}>
                                It&apos;s simple, you can report bugs and issues on <a href="https://github.com/serumstudio/microphone" target={"_blank"} rel="noreferrer">GitHub</a>. 
                                Or you can chat with developers via <br></br> discord: <Code>Zenqi#0231</Code>
                                for full-time support.
                            </p>
                        } />
                        <Spacer />
                        <Description title="Is it safe?" content={
                            <p style= {{ fontWeight: 500 }}>
                                Absolutely yes. We want to deliver high quality products for free. We don&apos;t want to
                                destroy our customer&apos;s trust with our products.
                            </p>
                        } />
                    </Collapse>
                </Collapse.Group>

            </div>
            

        </Page>
    )
}

export default ProjectPage;