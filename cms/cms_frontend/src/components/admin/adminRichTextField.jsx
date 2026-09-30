import React from "react";
import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css";
import Quill from 'quill';




/*
 * Custom "star" icon for the toolbar using an Octicon
 * https://octicons.github.io
 */
const CustomButton = () => <span className="octicon octicon-star" />;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomToolbar = () => (
  <div 
  
  id="toolbar" class=" bg-white w-auto">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option value="4" />
      <option value="5" />
      <option value="" />

    </select>
    <select class="ql-align">
    <option  ></option>
    <option value="center"></option>
    <option value="right" selected></option>
    <option value="justify"></option>
  </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
      <button class="ql-underline"></button>

    <button class="ql-link"></button>
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);

/* 
 * Editor component with custom toolbar and content containers
 */
export class Editor extends React.Component {
  constructor(props) {
    super(props);

  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.props.setValue({ editorHtml: html });
  }

  render() {
    return (
      <div 
      
      // style={{
      //   boxShadow:"var(--shadow-sec)"
      // }}
      className="flex flex-col w-full font-iranyekan primary-input">

        <CustomToolbar />
        
        <ReactQuill
       
       style={{
        height:"100%",
        width:"100%",
        
  

       }}

          value={this.props.value.editorHtml}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"}

        />
      </div>
    );
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: {
    container: "#toolbar",
    

    handlers: {
      insertStar: insertStar
    },
  },
  clipboard: {
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "align"
];

/* 
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: propTypes.string
// };

/* 
 * Render component on page
 */
// ReactDOM.render(
//   <Editor placeholder={"Write something or insert a star ★"} />,
//   document.querySelector(".app")
// );
