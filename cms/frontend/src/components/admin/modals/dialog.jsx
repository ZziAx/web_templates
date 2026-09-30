import { Component } from "react";
import Modal from "react-modal";
import { Button } from "../../buttons/button";
export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.leading = props.leading;
    this.form = props.form;

    this.subtitle = props.subtitle;
    this.body = props.body;
    this.footer = props.footer;
    // this.open = props.open;
    this.width = props.width ?? 500;
    this.height = props.height ?? 200;
    this.padding = props.padding ?? 0;
    this.insets = props.insets;

    this.contentStyle = props.contentStyle ?? {
      // calc(100% - ${cellWidth})
      left: this.insets ? "0px" : `calc(50% - ${this.width / 2}px)`,
      top: this.insets ? "0px" : `calc(50% - ${this.height / 2}px)`,

      justifyContent: "space-between",
      // alignItems: "center",
      display: "flex",
      width: this.width,
      height: this.height,
      flexDirection: "column",

      padding: this.padding,

      backgroundColor: "white",
      border: "none",
    };
    this.children = props.children;
  }

  render() {
    const open = this.props.open;
    const title = this.title;
    const leading = this.leading;

    const subtitle = this.subtitle;
    const children = this.props.children;
    const footer = this.footer;

    const padding = this.padding;
    const Leading = () => leading;

    const _ui = [
      <div
        // dir="rtl"
        class="flex flex-col w-full h-full  bg-white justify-between items-end"
      >
        <div class="flex flex-col items-start">
          <div class="flex gap-2 flex-row justify-start">
            {<Leading />}
            <h2>{title}</h2>
          </div>

          <span class="sub-1 text-neutral-500">{subtitle}</span>
        </div>

        {children}
      </div>,

      footer,
    ];
    return (
      <Modal
        //  appElement={()=>{ return <div>dsf</div>}
        // }
        //  className="flex w-screen h-screen bg-black opacity-50"
        isOpen={open}
        ariaHideApps={false}
          //  htmlOpenClassName="flex h-screen w-screen bg-red-400"
          // portalClassName=
          // className="bg-black"

          
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 2000,
         
          },
          // this.contentStyle
          content: this.props.contentStyle??this.contentStyle,
          // content:{
          //   backgroundColor:"transparent"
          // }
        }} // Inline styles
        // className="my-custom-modal-class" // Custom CSS class
        // ariaHideApp={false} // Set to false if you don't have a clear #app root element

        // contentElement={<div>sdf</div>}
      >
        <div class="flex items-end justify-end  h-full w-full">
          {this.children ?? (this.form != undefined) ? (
            <form class="flex flex-1" {...this.form}>
              <div class="flex flex-col justify-between flex-1">{..._ui}</div>
            </form>
          ) : (
            <div class="flex flex-col flex-1 p-2">{..._ui}</div>
          )}
        </div>
      </Modal>
    );
  }
}
