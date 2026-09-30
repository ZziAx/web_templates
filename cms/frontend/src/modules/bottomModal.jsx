import React from "react";
import createOrUseModal from "./createOrAddModal";

class BottomModal extends React.Component {
  constructor(props){
    super(props);

    this.onMounted = props?.onMounted;
  }

  componentDidMount(){

    if(this.onMounted == null)return;
    this.onMounted();
  }
  render() {
    const { children, onClosed = ()=>null, opened = false,height="60%" } = this.props;
      this.state = {
        opened: opened,
      };


      // console.log("dsf " ,opened);

    return (
      <div
      id={this.props.id}
        // style={{
        //   translate: `0px ${opened ? "0%" : "100%"}`,
        // }}
        dir="rtl"
        // normal-transition
        class={`screen  z-200 ${opened ? "opacity-100 " : "opacity-0 hidden"}`}
      >
        <div
          class="overlay !bg-transparent"
          onClick={() => {
            onClosed();
          }}
        />
        <div
          style={
            {
              //   translate: `${opened ? "0%" : "0%"}`,
              height:"auto"
            }
          }
          // slow-transition
          class={`modal bg-[#fafafa] primary-shadow`}
          onClick={() => {}}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default BottomModal;
