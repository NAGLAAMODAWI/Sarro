import React ,{Component} from 'react';
import './style.css';
import {Container ,Row ,Col} from'react-bootstrap';
class About extends Component {
  render(){
    return (
        <div className="creative">
            <div className="container">
                <div className="creative-info">
                    <h2 className="info-title"><span>This is</span> Me</h2>
                    <h4 className="info-dir">Creative Girl</h4>
                    <p className="info-desc">
                        Hello for all, my name is Esraa  
                        Iam a professional UX/UI Designer and  Developer creating modern and resposive designs  Mobile. Let us work together. Thank you. 

                          </p>
                    <p className="info-desc">
                    Accomplished UX Designer with 6+ years of experience,
                    Senior graphic designer responsible for daily graphic designSenior Mobile Application Developer with around 8 years.

                    </p>
                </div>
            </div>
        </div>
        
     

    )
  }
}
export default About;
