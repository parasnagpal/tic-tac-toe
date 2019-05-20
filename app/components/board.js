import React from 'react'

import Square from './square'
import  './style.scss'


class Board extends React.Component
{

  constructor(props){
      super(props)
      this.handler=this.handler.bind(this)
      this.resetRefresh=this.resetRefresh.bind(this)
      this.state={
        grid:Array(9).fill(null),
        turn:true,
        refresh:false
     } 
  }
   
  handler(data){
    let tempArray=this.state.grid
    if(this.state.turn)
     tempArray[data]='X'
    else  tempArray[data]='O'
    this.setState({
      turn:!this.state.turn,
      grid:tempArray
    });
   this.checkWin(data)
  }

  resetRefresh(){
    this.setState({
      refresh:false
    })
  }

  checkWin(i)
  {
    let grid=this.state.grid
    let I=i
    if(grid[i]=='X'||grid[i]=='O' ){
           //Horizontal check
           if(i==0||i==3||i==6)
             I+=2;
           if(i==1||i==4||i==7)
             I+=1;
                if(grid[I]==grid[I-1]&&grid[I-2]==grid[I-1])
                  return this.won(grid[I])
             I=i      
           //Vertical check   
           if(I==5||I==4||I==3)
             I+=3    
           if(I==0||I==1||I==2)
             I+=6  
                if(grid[I]==grid[I-3]&&grid[I-3]==grid[I-6])
                return this.won(grid[I])                
             I=i     
            //Diagonal check
            if(I==0||I==4||I==8)
              if(grid[0]==grid[4]&&grid[4]==grid[8])
                 return this.won(grid[I])
                  
            
            if(I==2||I==4||I==6)
              if(grid[2]==grid[4]&&grid[4]==grid[6])
                return this.won(grid[I])
                
        } 
  }

  resetState(){
     for(let i=0;i<9;i++)
       this.state.grid[i]=null
     this.setState({
      turn:true,
      refresh:true
  }) 
    
  }
 
  won(data){
     console.log('won')
     this.resetState()
     this.render()
     this.props.handle(data)
  }

  renderSquare(i){    
    return <Square value={this.state.grid[i]} refresh={this.state.refresh} position={i} turn={this.state.turn} refreshHandler={this.resetRefresh} handlerFromBoard={this.handler} />;
  }
  

  render(){
    return(
      <div>
         <div className='status'>{status}</div>
         <div className="board-row" >
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
         
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
     
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>    

    );
  }
}

export default Board