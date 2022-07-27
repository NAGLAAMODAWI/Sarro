import React ,{Component} from 'react';
import axios from 'axios';
import {Container ,Row ,Col} from'react-bootstrap';

import {WorkSection ,WorkTitle ,Span ,Part,Icon ,PartTitle ,Line ,PartDesc} from './style.js'
class Work extends Component {
    state = {
        workItems:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then( res => {this.setState({workItems :res.data.works})})
    }

  render(){
      const {workItems} = this.state;
      console.log({workItems});
      
     const All = workItems.map((worksItem) =>{
          return(
            <Part first ={worksItem.id} key = {worksItem.id}>
            <Icon  className =" icon fa fa-chain fa-2x"></Icon>
            <PartTitle>{worksItem.title}</PartTitle>
            <Line />
            <PartDesc>
                {worksItem.body}
            </PartDesc>
        </Part>
            )}
    )
    
      
  return (
    <WorkSection>
        <Container>
        <WorkTitle><Span>My</Span> Work</WorkTitle>
        <Row>
        <Col sm={12} md={4}>
          <Part>
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <PartTitle>Mobile Dev</PartTitle>
                    <Line></Line>
                    <PartDesc>
                    Senior Mobile Application Developer with around 8 years 
                    experience in software development lifecycle (SDLC) including analysis, design, development, and testing, deployment and documentation as per ISO standards. Experience in Mobile 
                    Application Operating systems like iOS and Android
                    </PartDesc>
          </Part>
     </Col>
     <Col sm={12} md={4}>
     <Part>
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <PartTitle>Mobile Ux/ui</PartTitle>
                    <Line></Line>
                    <PartDesc>
                    Accomplished UX Designer with 6+ years of experience .
                     During my time at Baranda, I increased user satisfaction by 20% with redesign of the website. Boosted conversions by 500% with mobile app design. Worked with 
                    the Marketing & Dev teams to achieve quarterly KPIs.
                    </PartDesc>
          </Part>
     </Col>
     <Col sm={12} md={4}>
     <Part>
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <PartTitle>Graphic Designer</PartTitle>
                    <Line></Line>
                    <PartDesc>
                    Senior graphic designer responsible for daily graphic design
                     content for a medium-sized firm. Worked regularly on graphic, layout, and production materials. Developed 200+ graphic design projects (logos, brochures, advertisements, infographics) 
                    that increased client transactions by 25%.
                    </PartDesc>
          </Part>
    </Col>
    </Row>
    </Container>
    </WorkSection>

)
}


  }

export default Work;