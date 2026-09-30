import { useEffect, useRef, useState } from "react";
import useFocus from "../../modules/hooks/useFocus";
import useElement from "../../modules/hooks/useElement";
import useListener from "../../modules/hooks/useListener";

export function InputField(props) {
  const {
    placeholder,
    label,
    onChange,
    value,
    defaultValue,
    top,
    ref,
    type = "text",
    inputOpacity = 1.0,
    children,
    prefix,
    dir = "rtl",
    inputDir = "rtl",
    error,
    register,
    validation,
    id,
    format
  } = props;

  // console.log(validation);
  var regData = register && register(id, validation);

  const inpRef = ref ?? useRef(null);

  const { isFocused } = useFocus({id:id,ref:inpRef});

  const [_value,set_value] = useState(defaultValue);

  
  useEffect(()=>{
  const {element} = useElement(id);
    const l = new useListener({element:element});
    l.onChange((event)=>{
      set_value(event.target.value);
      if(onChange!=null && onChange!=undefined)
      {
      onChange(event.target.value);

      }
    })
  },[])


  // console.log("euworiio ",typeof id == "string");

  const customClassName = `flex flex-row h-full items-center  cursor-pointer  w-full  border-neutral-200 border-[1px] ${isFocused ? "border-black" : ""}`;

  return (
    <div dir={dir} class="flex flex-col justify-start items-start gap-2 w-full">
      <div class="header-between row w-full">
        <span class="text-[13px] text-neutral-400 font-[400]">{label}</span>

        <div
          style={
            {
              // pointerEvents:"none"
            }
          }
          dir={inputDir}
          class=" left-[10px]  insets-0"
        >
          {prefix && (
            <div class="text-blue-500">
              <p class="text-body-1">
                {prefix}
                <span class="text-red-200">{value}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <div dir={inputDir} class="flex font-iranyekan text-[13px] w-full ">
        <div
          //  tabIndex="0"

          class="flex items-center focus:primary-shadow w-full h-[45px] "
        >
          {children != null ? (
            <div class={customClassName}>{children}</div>
          ) : (
    
            <label class={`relative ${customClassName}`}>
              <input
  
                id={id}
                name={id}
                ref={inpRef}
                placeholder={placeholder}
                style={{
                  opacity: inputOpacity,
                }}
                class=" w-full h-full outline-none px-5 "
                type={type}
                value={value ?? (format==undefined ?_value:format(_value))}
                // value={value}
                defaultValue={defaultValue}
                onChange={(v) => {
                 
                  onChange(v.target.value);
                }}
                {...regData}

                // {...(register?(id, validation):[])}
              />
            </label>
          )}
          {top && (
            <div class="absolute  h-[45px] justify-center items-center flex">
              {top}
            </div>
          )}
        </div>
      </div>
      {error && <p class="text-hint-text-error text-body-1">{error.message}</p>}
    </div>
  );
}
