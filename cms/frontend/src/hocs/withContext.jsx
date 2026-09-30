import { createRef, useRef } from "react";
import { useForm } from "react-hook-form";

function withContext(WrappedComponent) {
  return function ContextWrapper(props) {



    const {context,value} = props;

    const Context = context;


    
    return <Context.Provider value = {value} class="flex flex-1"><WrappedComponent  {...props} /></Context.Provider>;
    
  };
}

export default withContext;