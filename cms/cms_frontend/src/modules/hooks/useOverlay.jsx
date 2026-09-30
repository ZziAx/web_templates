import { useContext, useState } from "react";
import useElement from "./useElement";
import { AdminPanelCommonContext } from "../../core/admin-panel";

function useOverlay(root = "_screen") {
  const [elements, _setElements] = useState([]);
  const {addOverlay,clear} = useContext(AdminPanelCommonContext);

  const open = (overlayComponent) => {
    _setElements([...elements,overlayComponent]);
    addOverlay(overlayComponent);
  };

  const close = ()=>{
    clear();
  }

  return {open,close, elements};
}

export default useOverlay;
