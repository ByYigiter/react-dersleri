import { Component } from "react";



 class ClassComp extends Component{
    constructor(props){//props lari burada karsiliyoruz

        //propslar extend edilen class in constuctoruna gonderilmelidir (Component class haber veriyoruz)
        super(props);
        this.state={
            message:"Hello World",
            hour:15,
            minute:35
        }
        
    }

    componentDidMount(){
    console.log("Ilk giriste calisir.(Render)")
    }
    /*componentDidUpdate(){
      console.log("re-render durumunda calisir")
    
    }*/
    componentDidUpdate(prevProps,prevState){//prevProps: ,prevState:State nin bir onceki hali
      console.log("re-render durumunda calisir")
    if(prevState.hour!==this.state.hour){
        console.log("Hour was changed")
    }
    if(prevState.minute!==this.state.minute){
        console.log("Minute was changed")
    }
    
    }
    
    componentWillUnmount(){
        console.log("Component mount oldugunda calisir")
    }

render(){
    return(
    <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.hour}:{this.state.minute}</h2>
        <button onClick={()=>this.setState({hour:19})}>Set hours</button>
        <button onClick={()=>this.setState({minute:55})}>Set Minute</button>
    </div>
    );
}

}
export default ClassComp;