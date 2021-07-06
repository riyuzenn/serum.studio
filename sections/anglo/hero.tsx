import React from 'react';
import herostyle from "../../styles/pages/hero.module.css";
import Terminal from '../../components/terminal';

var term_data = [
    { index: 0, text: "# Anglo, a modern lightweight web framework.", },
    { index: 1, text: "# Built with pure Python 3.", },
    { index: 3, text: "# Decorator based, easy to install.", },
    { index: 4, text: "pip install anglo.", },
]

const AngloHeroSection = () => {
    return (
        <div className={herostyle.root}>
            <div className={herostyle.terminal}>
                <Terminal data={term_data} success_text={'Anglo is successfully installed.'} ></Terminal>
            </div>
        </div>
    )
};


export default AngloHeroSection;
