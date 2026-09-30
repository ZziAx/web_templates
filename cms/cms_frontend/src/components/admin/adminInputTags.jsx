import React, { createRef, useRef } from "react";
import { InputField } from "./adminInputText";
import InputAutoSize from "react-input-autosize"; // Import the component
import * as Iconsax from "iconsax-reactjs";
// import { TagInput } from 'react-tag-autocomplete';
import { ReactTags } from "react-tag-autocomplete"; // Maybe it's default export
// import { WithContext as TagsInput } from 'react-tag-autocomplete'; // As seen in previous examples
// import TagInput from 'react-tag-autocomplete/dist/TagInput'; // Maybe from a dist folder
class TagObject {
  // static get value(){
  //   return this.ref.current.value;
  // }

  constructor({ id }) {
    this.ref = createRef();
    this.active = false;
    this.id = id;
  }

  getString() {
    return this.ref?.current?.value;
  }

  isEmpty() {
    if (!this.ref.current) return true;
    return (this?.getString()?.trim().length ?? 0) == 0;
  }
}

class InputTagField extends React.Component {
 
  constructor(props) {
    super(props);

    this.parentRef = createRef();

    this.index = 0;

    this.objects = [new TagObject({ id: this.index })];

    this.tagsStr = "";

    this.state = {
      tagsStr: this.tagsStr,
      objects: this.objects,
      validTags: [],
      index: this.index,
      parentRef: this.parentRef,
      id:props.id,
  
      tags: [],
      inputValue: "",
    };

    this.handleGlobalKeyUp = this.handleGlobalKeyUp.bind(this);
    this.InputTag = this.InputTag.bind(this);
    // this.removeActiveField = this.removeActiveField.bind(this);

    // this.removeTag = this.removeTag.bind(this);
    window.addEventListener("keyup", this.handleGlobalKeyUp);
    window.addEventListener("keydown", this.handleGlobalKeyDown);

  }

  handleGlobalKeyDown(event){

    if(event.key === "Enter"){
      event.preventDefault();
      

    }
    
  }
  handleGlobalKeyUp(event) {

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.state.inputValue.trim().length != 0) {
        this.setState({
          tags: [
            ...this.state.tags,
            { value: this.state.tags.length, label: this.state.inputValue },
          ],
          inputValue: "",
        });
        this.props.onChange([...(this.state.tags.map((t)=>t.label)),this.state.inputValue]);
      }
    }

    if (event.key === "Backspace") {
      event.preventDefault();
    }
  }
  isEmpty(v) {
    return v.trim().length == 0;
  }

  InputTag() {
    const _ref = this.state.parentRef;

    return (
      <InputAutoSize

        ref={_ref}

        id={this.state.id}
        value={this.state.inputValue} // Controlled component: value comes from state
        onChange={(v) => {
          this.setState({
            inputValue: v.target.value,
          });
        }}
        placeholder="تگ وارد کنید"
        class={`flex text-body-2 p-0 font-iranyekan outline-none border-none   bg-transparent   text-right  h-[20px]  w-[100px]`}
        inputStyle={{
          padding: "0px 0px",
        }}
      />
    );
  }

  render() {
    const Inpt = this.InputTag;

    return (
      <ReactTags
        allowNew
        collapseOnSelect
        ref={this.state.parentRef}
      
        classNames={{
          label: "",
          listBox: "flex flex-row ",
          root: "flex flex-row  justify-center gap-1 ",
          tagList: "flex flex-row gap-1 ",
          comboBox: "flex flex-row  ",
          // listBox:"flex flex-row bg-red-200",
          //              root:"flex flex-row bg-red-200",
          input: "bg-transparent p-0",

          tag: " rounded-xl",
          option: " bg-red-900",
        }}
        renderOption={() => <div></div>}
        id="custom-tags-demo"
        labelText=""
        // onValidate={(b)=>{
        //   this.state.inputValue = b;
        // }}

        // onDelete={onDelete}
        selected={this.state.tags}
        // suggestions={[{value:"ewjlr",label:"ewoiur"}]}
        renderInput={(inp) => {
          // console.log("rewouiewr ", inp);
          return <Inpt />;
        }}
        renderTag={(t) => {
          // console.log("weruouiewr ",t);

          const { label } = t.tag;
          return (
            <div class="flex bg-primary-400 text-white pr-[10px] pl-[3px] flex-row gap-2 items-center justify-center rounded-full">
              {label}

              <Iconsax.CloseCircle
                onClick={() => {
                  const newTags = this.state.tags.filter(
                    (p) => p.label != label,
                  );
                  this.setState({
                    tags: newTags,
                  });
                  // this.removeTag(object.id)
                }}
                class="text-white w-[15px] h-[15px] cursor-pointer  rounded-full hover:bg-[rgba(255,255,255,0.4)]"
              />
            </div>
          );
        }}
      />
    );
  
  }
}

export default InputTagField;
