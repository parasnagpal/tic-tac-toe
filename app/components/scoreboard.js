import React from 'react';

class ScoreBoard extends React.Component{
   constructor(props)
   {
       super(props)
       this.state={
          x:this.props.score.x,
          y:this.props.score.y
       }
   }

   render(){
       return(
           <span id="right">
            Score
              <table className="table">
                  <tbody>
                  <tr scope="col">
                      <th>X</th>
                      <th>Y</th>
                  </tr>
                  <tr>
                      <td>{this.props.score.x}</td>
                      <td>{this.props.score.y}</td>
                  </tr>
                  </tbody>
              </table>
           </span>
       );
   }
 

};

export default ScoreBoard 