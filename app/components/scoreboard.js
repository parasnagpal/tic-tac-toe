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
           <div id="right">
              <table>
                  <tbody>
                  <tr>
                      <th>X</th>
                      <th>O</th>
                  </tr>
                  <tr>
                      <td>{this.props.score.x}</td>
                      <td>{this.props.score.y}</td>
                  </tr>
                  </tbody>
              </table>
           </div>
       );
   }


};

export default ScoreBoard 