import React ,{Component} from 'react';
import axios from 'axios';
import {Container ,Row ,Col} from'react-bootstrap';

import{ Socialmed , Social,IconParagraph ,Icon ,Span ,Info}from './style.js'
class Socialmedia extends Component {
    state = {
        socialitems:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({socialitems :res.data.social})} )
    }
  render(){
     /* const {socialitems} = this.state;
     console.log(socialitems);
     const Allsocial = socialitems.map((socialItem) => {
         return(
          <Container>
           
              <Col sm={12} md={4}>
           <Social item = {socialItem.id} key = {socialItem.id}>
               <Icon className = {socialItem.icon}></Icon>
               <IconParagraph>
              <Span>{socialItem.title}</Span>
              <Info>{socialItem.body}</Info>
             </IconParagraph>
           </Social>
           </Col>
           
          </Container>
            
         )

     })*/
  return (

    <Socialmed>
        <Row>
          
         <Col sm={12} md = {4}>
         <a href="https://www.facebook.com/shahrzaad.shere">
           <Social style={{ background: "#3b5998"}}>
                <Icon className="icon fa fa-facebook fa-lg"></Icon>
                <IconParagraph>
                    <Span>Follow Me on</Span>
                    <Info>Social Facebook</Info>
                </IconParagraph>
                </Social>
                </a>
            </Col>
            <Col sm={12} md = {4}>
            <a href="https://www.linkedin.com/in/esraa-saad-abdalgader-ba8a5616b">
            <Social style={{ background: "#498cbf"}}>
                <Icon className="icon fa fa-linkedin fa-lg"></Icon>
                <IconParagraph>
                    <Span>Connect Me on</Span>
                    <Info>Social linkedin</Info>
                </IconParagraph>
            </Social>
            </a>
            </Col>
            <Col sm={12} md = {4}>
            <a href="https://wa.me/+249968783810">
            <Social style={{ background: "#cc2127"}}>
                <Icon className="icon fa fa-whatsapp fa-lg"></Icon>
                <IconParagraph>
                    <Span>Message Me</Span>
                    <Info>Social whatsapp</Info>
                </IconParagraph>
            </Social>
           </a>
            </Col>
            </Row>
            
    </Socialmed>

  )}
}
export default Socialmedia;