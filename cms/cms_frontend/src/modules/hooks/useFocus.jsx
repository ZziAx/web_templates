// useFocus.js
import { useState, useRef, useEffect } from "react";

export function useFocus({ref,id}) {
  if(ref == undefined && id == undefined)return;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Attach these handlers to the element you want to track
  const attachFocusHandlers = (element) => {
    if (element) {
      element.addEventListener("focus", handleFocus);
      element.addEventListener("blur", handleBlur);
    }
    // Cleanup listeners on component unmount
    return () => {
      if (element) {
        element.removeEventListener("focus", handleFocus);
        element.removeEventListener("blur", handleBlur);
      }
    };
  };

  useEffect(() => {
    if (id != undefined) {
  
      const element = document.getElementById(id);
      if (element) {
        
        attachFocusHandlers(element);
      }
    } else {
      if(ref != undefined){
        attachFocusHandlers(ref.current);
      }
    }
  });

  return { isFocused };
}

export default useFocus;
