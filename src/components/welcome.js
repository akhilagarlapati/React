import React, { Component } from 'react';

class Welcome extends Component{

    render(){
        //return(
        
        return <h1>Welcome {this.props.name} {this.props.children}</h1> ;
        
    
       // )
    }
}
export default Welcome