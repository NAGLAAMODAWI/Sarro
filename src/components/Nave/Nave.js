import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,Logo ,LogoText ,UlList ,ListItem ,Anchor} from './style.js'
class Nave extends Component {
  render(){
  return (
    <div >
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Esraa Saad</LogoText>
                </Logo>

               
                
            </div>
            
        </NavbarSection>
     </div>
)
}
}
export default Nave;
