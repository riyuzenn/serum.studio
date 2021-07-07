
import { 
    Page, Divider, Tag, Badge, Row, Spacer, Code, Note, Grid,
    Collapse, Text, Description, User, Snippet, Button, Loading, useTheme 

} from "@geist-ui/react";

import SEO from "../components/seo";
import style from "../styles/pages/home.module.css"
import Terminal from "../components/terminal";
import { useState, useEffect } from "react";
import WindowsIcon from "../components/icons/windows";
import * as Icons from "react-feather";

const anglo_data = [
    { index: 0, text: "# Anglo, a modern lightweight web framework.", },
    { index: 1, text: "# Built with pure Python 3.", },
    { index: 2, text: "# Decorator based, easy to install.", },
    { index: 3, text: "pip install anglo.", },
]


async function fetchTextFromUrl(url: string){
    let response = await fetch(url);
    let result = await response.text();
    
}

const ProjectPage = () => {
    const theme = useTheme();
    const [serummicVersion, setSerummicVersion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/serumstudio/microphone/main/version.txt')
        .then (response => {
            if (response.ok){
                return response.text();
            }
            throw response;
        })
        .then(serummicver => {
            setSerummicVersion(serummicver);
        })
        .catch(error => {
            console.error(`Error fetching: ${error}`);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])


    if (loading) return ( <Page><Loading style={{ textAlign: 'center' }} type="success">Loading</Loading></Page> )
    if (error) return (<Page style={{ textAlign: 'center' }}>{error}</Page>)

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
                Here is a list of the projects that we developed this past year. Most of it <br></br> was open-source and distributed under MIT license.
                </p>

                <Row>
                    <h2>Serum Microphone</h2>
                    
                    <Badge style={{ height: 22, marginTop: "10px", marginLeft: "5px" }} type="success" className={style.project__version}>
                        {
                            serummicVersion
                        }
                    </Badge>
                </Row>
                
                <div>
                    {/* <Tag type="success" invert>
                        Status: Released
                    </Tag> */}
                    <Note type="warning">This application is only available for Windows</Note>
                </div>
                <Text>
                    🎙 Serum Microphone is a open-source text-to-speech program that acts as your microphone. <br></br>
                    It was developed for those who doesn&apos;t have a microphone. It is easy to use and lightweight. Up to 10MB of storage is used.
                </Text>

                {/* Features Section */}
                <Collapse.Group>
                    <Collapse title="Features" initialVisible>
                        
                        <Description title="Easy to use" content="It only have 2 button for preview and output." />
                        <Spacer />
                        <Description title="Improved performance" content={
                            <p style={{ fontWeight: 500 }}>
                                
                                If you use v1.1.3+, we had a big update where <br></br>
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
                <Text>
                    For more information, documentation and source, kindly visit the main <a href="https://github.com/serumstudio/microphone/tree/main/docs" style={{ fontWeight: 'bold' }} target="_blank" rel="noreferrer" >GitHub Documentation</a>. Or you may join our 
                    <a href="#" style={{ fontWeight: 'bold' }}> Discord Server</a> for help & support.
                </Text>

                <div className={style.installation}>
                <h2>Installation</h2>
                    <Text>
                        Serum Microphone was first released on <Code>April 12, 2021.</Code> If you still don&apos;t know how to install and setup, we have <a href="https://www.youtube.com/watch?v=XNxFuK9xeSY" style={{ fontWeight: 'bold' }} target="_blank" rel="noreferrer">Tutorial Video</a>.                    
                    </Text>
                    <Spacer />
                    <Grid.Container>
                        <Grid xs={24} md={12}><Button shadow icon={<WindowsIcon fill={`${theme.palette.background}`} height={24} width={24} />} type="secondary" onClick = {() => { window.location.href = `https://github.com/serumstudio/microphone/releases/download/${serummicVersion}/serummic-${serummicVersion}.rar` }} >{` Download `}</Button></Grid>
                        <Grid xs={10} md={12}><Button shadow icon={<Icons.Youtube />} type="secondary" onClick = {() => { window.open('https://www.youtube.com/watch?v=XNxFuK9xeSY', '_blank') }} >{` Video Tutorial `}</Button></Grid>
                        
                    </Grid.Container>
                </div>
                
                {/* Anglo */}

                <Divider />
                <h2>Anglo</h2>
                <Note type="error" label="STATUS">Development | Ongoing</Note>
                <Text>
                    🪐 Anglo is a modern lightweight web framework for Python 3.
                </Text>

                <Terminal data={anglo_data} success_text={'Anglo is successfully installed.'} />
                <Spacer />
                <Snippet style={{ lineHeight: 2 }} text="pip install anglo" width="500px" />
            </div>
            

        </Page>
    )
}

export default ProjectPage;