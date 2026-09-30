import { createRef, useRef } from "react";
import { useForm } from "react-hook-form";

function withFormLayout(WrappedComponent) {
  return function FormWrapper(props) {
    const methods = useForm(); // Call the hook here



    const ref = useRef(()=>{console.log("not initialized.")});


    
    return <form class="flex flex-1" onSubmit={methods.handleSubmit(async(f)=>{
      await ref.current.onSubmit(f);
    })}><WrappedComponent ref = {ref} {...props} form={{ ...methods}} /></form>;
    
  };
}

export default withFormLayout;