import { React, Component, useContext, useState, createRef } from "react";
import { ProductContext } from "../../core/admin-panel";



export const fromBlob = (file)=>{
  console.log(typeof file);
  if(typeof file == "string")return file;
  return URL.createObjectURL(file);
}

 function FilePicker({handleChange,multiSelect = false}) {
  // const { handleChange } = props;

  const ref = createRef();


  return (
    <div class="absolute flex w-full h-full   opacity-50 cursor-pointer">
    
    <label class="relative w-full cursor-pointer">
 <input
 ref={ref}
      type="file"
      accept="image/*"
      multiple={multiSelect}
    
      onChange={handleChange}
      className=" flex inset-0 w-full h-full opacity-0 "
      
    />
    <div 
   
    class=" absolute inset-0 w-full h-full  ">

    </div>
   
    </label>
    </div>
  );
}

export class AdminMediaFilePicker extends Component {



  render() {
    const { addImage ,fromBlob = false,multiSelect= false} = this.props;


  

    const handleChange = (e) => {
      // const file = e.target.files[0];
      const files = e.target.files;

      if (files) {

        const filesObject = [];
        for(var i = 0;i<files.length;i++){

          if(fromBlob){
          filesObject.push(URL.createObjectURL(files[i]));

          }
          else{
          filesObject.push(files[i]);

          }
        }

        // console.log("fil ",filesObject);

        addImage(filesObject);
      }

      e.target.value = null;

    }

    return <FilePicker multiSelect = {multiSelect} handleChange ={handleChange}/>;
}
}