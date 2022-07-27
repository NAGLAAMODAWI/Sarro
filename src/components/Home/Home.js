import React ,{Component} from 'react';
import {HomeSection ,HomeInformation ,HomeTitle ,HomeInfo ,HomeDesc ,HomeBtn ,Span} from './style.js'
class Home extends Component {
  render(){
  return (
        <HomeSection>
            <div className ="container">
                <HomeInformation>
                    <HomeTitle>Esraa Saad</HomeTitle>
                    <HomeInfo>UI/UX Designer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and UI Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    
                </HomeInformation>
            </div>
        </HomeSection>
        
)
}
}
export default Home;
