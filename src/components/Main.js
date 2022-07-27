import React ,{Component} from 'react';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Work from './Work/Work';
import Portfolio from './Portfolio/Portfolio';
import Profile from './Profile/Profile';
import About from './About/About';
import Socialmedia from './Socilamedia/Socialmedia';

class Main extends Component {
  render(){
  return (
    <div >
     <Home />
     <Work />
     <Portfolio />
     <Profile />
     <About />
     <Socialmedia />
     <Footer />

     </div>
)
}
}
export default Main;
