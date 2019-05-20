import React from 'react';



const Navbar=props=>{    
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" >Tic tac Toe</a>
              <div className="collapse navbar-collapse" id="navbarAltMarkup">
                <div className="navbar-nav">
                 <div className="nav-item nav-link">Home</div>
                 <div className="nav-item nav-link">LeaderBoard</div>
                 <div className="nav-item nav-link">Contact Us</div>
                 </div>
               </div>
            </nav>
        );
    
    };
export default Navbar