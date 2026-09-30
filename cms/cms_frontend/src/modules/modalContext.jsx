import React from "react";
import BottomModal from "./bottomModal";

var contextHandlers = {};

class ModalContext extends React.Component {
  constructor(props) {
    super(props);

    var ref = "";
    this.contextId = props.id;
    this.modals = {};

    if (contextHandlers[this.contextId] == undefined) {
      this.state = {
        active: null,
        modals: this.modals,
      };

      contextHandlers[this.contextId] = {
        open: (modal) => this.handleOpen(modal),
        close: () => this.handleClose(),
        pop: (untill) => this.handlePop(untill),
      };
    }
  }

  handlePop(untill) {
    var { ref = null } = this.modals[this.state.active];
    if (untill != undefined) {
      ref = untill;
    }

    if (ref == null || ref == undefined) {
      this.setState({
        active: null,
      });
    } else {
      // if(untill!=undefined){
      //   ref = this.modals.filter((v)=>(v.id == untill));
      // }
      this.handleOpen(Object.assign({}, this.modals[ref].P, { setRef: false }));
    }
  }

  handleClose() {
    this.setState({
      active: null,
    });
  }

  handleOpen(P) {
    const { id, setRef = true } = P;

    this.handleClose();

    if (!Object.keys(this.modals).includes(id)) {
      const _modal = this.modals[id];

      this.modals[id] = {
        P: P,
        ref: setRef ? this.state.active : _modal?.ref,
      };
      console.log(this.modals);
    }

    this.setState({
      modals: this.modals,
      active: id,
    });
  }

  render() {
    const modals = this.state?.modals ?? {};

    const active = this.state?.active;

    return (
      <>
        {this.props.children}

        {modals &&
          Object.keys(modals).map((id) => {
            const Modal = modals[id].P.modal;

            const Rendered = () => {
              return Modal;
            };

            return (
              <BottomModal
                onClosed={() => {
                  this.handleClose();
                }}
                opened={id == active}
              >
                <Rendered />
              </BottomModal>
            );
          })}

        {active != null && (
          <div
            class="overlay !z-0"
            onClick={() => {
              this.handleClose();
              // onClosed();
            }}
          />
        )}
      </>
    );
  }
}

export { ModalContext, contextHandlers };
