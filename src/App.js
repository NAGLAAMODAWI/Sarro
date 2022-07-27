import React ,{Component} from 'react';
import {BrowserRouter , Route ,Routes} from 'react-router-dom';
import Nave from './components/Nave/Nave';
import Main from './components/Main';
import Contact from './components/Contact/Contact';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div>
    <Nave />
    <Routes>
    <Route path ="/" element ={<Main />} />
    <Route path ="/contact" element ={<Contact />} />
    </Routes>
     </div>
     </BrowserRouter>
     
)
}
}
export default App;
