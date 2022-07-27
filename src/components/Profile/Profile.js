import React ,{Component} from 'react';
import {Button ,Container ,Row ,Col} from'react-bootstrap';
//import axios from 'axios'
import {ProfileSkills, MyProfile,ProfileTitle , ProfileList ,ProfileItem ,SkillsTitleSpan,Span ,SpanWeb ,ProfileTitleSpan ,Skills ,SkillsTitle ,SkillsDesc ,Bar , Title ,Perc ,Parent , ParentSpan } from './style.js'
class Profile extends Component {
    //state = {
      // ProfileSkill :[]
    //}
  // componentDidMount(){
     //  axios.get('js/data.json').then(res => {this.setState({ProfileSkill :res.data.Profile})})
   //}
   
  render(){
     // const {ProfileSkill} = this.state;
     // const AllSkill = ProfileSkill.map((proSkillItem )=> {
      // return(
          /* <div>
        <Title>{proSkillItem.title}</Title>
        <Perc>{proSkillItem.perc}</Perc>
        <Parent>
        <ParentSpan className = "{proSkillItem.classnamee}"></ParentSpan>
        </Parent>  
        </div>
       )
       })*/

  return (
    <ProfileSkills> 
<Container>
  <Row>
   <Col sm={12} md={6}>
   <MyProfile>
                <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                <ProfileList>
                    <ProfileItem>
                        <Span>Name</Span>
                        Esraa Saad
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Birthday</Span>
                        21/1/1995
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Address</Span>
                        Sudan,Khartoum
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Phone</Span>
                        +249968783810
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Email</Span>
                        esraasaad@baranda4xr.com
                    </ProfileItem>
                    <ProfileItem>
                        
                    </ProfileItem>
                </ProfileList>
            </MyProfile>
   </Col>
   <Col sm={12} md={6}>
   <Skills>
                <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                <SkillsDesc>
                Iam a professional UX/UX ,Graphic Designer and Mobile Developer creating modern and resposive designs to  Mobile.

                </SkillsDesc>
                <Bar>
                    <Title>Flutter</Title>
                    <Perc>100%</Perc>
                    <Parent>
                        <ParentSpan className = "sp1"></ParentSpan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Title>Illustrator</Title>
                    <Perc>90%</Perc>
                    <Parent>
                    <ParentSpan className = "sp2"></ParentSpan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Title>Photoshop</Title>
                    <Perc>80%</Perc>
                    <Parent>
                    <ParentSpan className = "sp3"></ParentSpan>
                    </Parent>
                </Bar>
            </Skills>
   </Col>
  </Row>
</Container>
            
       
    </ProfileSkills>
    
)
}
}
export default Profile;
