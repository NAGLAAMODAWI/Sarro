
import axios from 'axios';
import React ,{useState ,useEffect} from 'react';
import {Container ,Row ,Col ,Button} from'react-bootstrap';

import {PortfolioSection ,PortfolioTitle , Span ,Portfoliolist ,PortfolioItem ,  ImageWrapper ,Image ,Overlay  ,OverlaySpan} from './style.js'
const Portfolio = () => {
   /* const [Images , setImages] = useState([])
     useEffect (() => {
      axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
     } ,[])
     const PortfolioImage = Images.map((imageitem) => {
         return(
         <ImageWrapper key={imageitem.id}>
             <Image src={imageitem.image} alt="" />
             <Overlay>
                 <OverlaySpan>
                     Show Image
                 </OverlaySpan>
             </Overlay>
         </ImageWrapper>
     )})*/
     
  
  return (
  <PortfolioSection>
     <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
     
    
    <div className ="box">
        <Container>
            <Row>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/22.jpg" alt=""></Image>
                    
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/111.jpg" alt=""></Image>
                    
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/444.jpg" alt=""></Image>
                    
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/22.jpg" alt=""></Image>
                    
                </Col>
            </Row>
            <Row>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/555.jpg" alt=""></Image>
                    
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/666.jpg" alt=""></Image>
                   
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/555.jpg" alt=""></Image>
                    
                </Col>
                <Col sm={12} md ={3}>
                <Image src="images/Portfolio/777.jpg" alt=""></Image>
                   
                </Col>
            </Row>
        </Container>
        
    </div>
</PortfolioSection>

)
}

export default Portfolio;
        