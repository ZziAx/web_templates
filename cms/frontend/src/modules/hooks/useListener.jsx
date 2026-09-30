import { Component } from "react";

class useListener extends Component{
    constructor(props){
        super(props);
        this.element = props.element; 
        this.onChange = this.onChange.bind(this);
    }

  

    componentWillUnmount(){
        const element =this.element;
    if (element) {
        element.removeEventListener("input");
      }
    }
    onChange(callback){
        const element =this.element;

        if(element){
 element.addEventListener("input",callback);
        // console.log(element);

        }
       
    }

}

export default useListener;