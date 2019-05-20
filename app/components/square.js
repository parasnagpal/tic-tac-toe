import React from 'react'

import '../styles/bootstrap/bootstrap.min.css'
import './style.scss'

class Square extends React.Component{
   constructor(props)
   {
     super(props)
     this.state={
       value:null
     }
   }
   componentDidUpdate(){
    
     if(this.props.refresh)
     {
       this.setState({
         value:null
       })
       this.props.refreshHandler()
     }
   }
    render(){
      return (
        <button className="square" onClick={()=>{
         if(!this.props.value ) 
         {
            
            if(this.props.turn)
             {
               this.setState({value:'X'})
             }
            else this.setState({value:'O'})
            this.props.handlerFromBoard(this.props.position) 
          }
         
         }}>
         {this.state.value}
        </button>
      )
    }
  }

export default Square  