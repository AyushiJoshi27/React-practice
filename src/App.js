/*
//1. setState()
import React from 'react';  
//import PropTypes from 'prop-types';  
class App extends React.Component {  
   constructor() {  
      super();        
      this.state = {  
          msg: "Welcome to JavaTpoint"  
      };      
      this.updateSetState = this.updateSetState.bind(this);  
   }  
   updateSetState() {  
       this.setState({  
          msg:"Its a best ReactJS tutorial"  
       });  
   }  
   render() {  
      return (  
         <div>  
             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>SET STATE</button>  
         </div>  
      );  
   }  
}  
export default App;


//2. forceUpdate()
import React from 'react';  
class App extends React.Component {  
   constructor() {  
      super();            
      this.forceUpdateState = this.forceUpdateState.bind(this);  
   }  
   forceUpdateState() {  
      this.forceUpdate();  
   };  
   render() {  
      return (  
         <div>  
             <h1>Example to generate random number</h1>  
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
         </div>  
      );  
   }  
}  
export default App;  
*/
//findDOMNode()
import React from 'react';  
import ReactDOM from 'react-dom';  
class App extends React.Component {  
   constructor() {  
      super();  
      this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
      this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);  
      this.findDomNodeHandler3 = this.findDomNodeHandler3.bind(this);
   };  
   findDomNodeHandler1() {  
       var myDiv = document.getElementById('myDivOne');  
       ReactDOM.findDOMNode(myDiv).style.color = 'red';  
   }  
   findDomNodeHandler2() {  
       var myDiv = document.getElementById('myDivTwo');  
       ReactDOM.findDOMNode(myDiv).style.color = 'blue';  
   }  
   findDomNodeHandler3() {
    var myDiv = document.getElementById('myDivThree');
    ReactDOM.findDOMNode(myDiv).style.backgroundColor = 'green';
   }
   render() {  
      return (  
         <div>  
             <h1>ReactJS Find DOM Node Example</h1>  
             <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
             <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
             <button onClick = {this.findDomNodeHandler3}>FIND_DOM_NODE3</button>  
             <h3 id = "myDivOne">JTP-NODE1</h3>  
             <h3 id = "myDivTwo">JTP-NODE2</h3>  
             <button id='myDivThree'>JTP-NODE3</button>
         </div>  
      );  
   }  
}  
export default App;
