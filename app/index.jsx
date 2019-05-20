// initialize react here
import React from 'react';
import { render } from 'react-dom';

import Navbar from './components/navbar'
import Board from './components/board'
import ScoreBoard from './components/scoreboard'


import './styles/main.scss'


/* funcational component
const App = props => {
  const onClick = () => console.log('clicked');
  return <Button text="click on me" onClick={onClick} />;
};
*/






class Game extends React.Component{
  constructor(props){
    super(props)
    this.handleScore=this.handleScore.bind(this);
    this.state={
      turn:true,
      scoreX:0,
      scoreY:0
    }
  }
  
  handleScore(data){
    console.log(data)
    if(data=='X')
         this.setState({scoreX:this.state.scoreX+1})
    else      this.setState({scoreY:this.state.scoreY+1})
    console.log(this.state.scoreX)
    console.log(this.state.scoreY)
  }

  render(){
    return(
      <React.Fragment>
           <Navbar/>
        <div className='game'>
                      <div className='game-board'>
                        <Board handle={this.handleScore}/>
                     </div>
        </div>
      <div id="right-bar">
         <ScoreBoard score={{ x:this.state.scoreX, y:this.state.scoreY }}/>
      </div>
      
      </React.Fragment>
    )
  }
}


render(<Game />, document.getElementById('app'));
