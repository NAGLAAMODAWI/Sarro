import React ,{Component} from 'react';
class Counter extends Component {
    state = {
       counter : 0 
    }


    icrementcounter = () => {
        this.setState({
            counter : this.counter + 1
        })
    }
  render(){
  return (
      <div>
       counter = {this.state.counter}
        <button onClick = {this.icrementcounter}>Increas</button>
       
      </div>
       
)
}
}
export default Counter;
