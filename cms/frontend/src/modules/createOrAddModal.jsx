import React, { createContext } from "react";
import BottomModal from "./bottomModal";
import { contextHandlers } from "./modalContext";

var states = {};


class createOrUseModal {
  constructor(id) {
    this.activeId = null;
    this.contextId =id;
    if (states[this.contextId] == undefined) {
      states[this.contextId];
    }

    this.setState = contextHandlers[this.contextId];

    this.handleOpen = this.setState.open;
    this.handleClose = this.setState.close;
    this.handlePop = this.setState.pop;

    


  }


  open(modal,id) {
    // this.activeId = modal.props.id;
      

    this.handleOpen({"modal":modal,"id":id});
  }

  close() {}

  pop(until) {
    this.handlePop(until);

  }
}


export default createOrUseModal;