// import Paragraph from "@editorjs/";
import React, { useEffect, useState, useRef, useContext } from "react";

import { $getRoot, $getSelection } from "lexical";

import { Editor } from "../../components/admin/adminRichTextField";
import { ProductContext } from "../../core/admin-panel";
import { InputField } from "../../components/admin/adminInputText";
import InputTagField from "../../components/admin/adminInputTags";
import {FormTextInput} from "../../modules/textInput/FormTextInput"
import { useForm } from "react-hook-form";
import formatPrice from "../../modules/utils/priceFormat";
import useNumberFormat from "../../modules/hooks/useNumberFormat";
export function ProductSettings() {
  const productContext = useContext(ProductContext);
  // const [productContextState,setProductContextState] = useState(productContext);
  const {name,price,register,errors} = productContext;

  const {formatter} = useNumberFormat();



  return (
    <div dir="rtl" class="col gap-5 w-full h-full">
      <div class="flex  ">
        <div class="col items-start gap-5 flex-1">
          {/* <div class="col flex-4 "> */}
          <InputField
          id = "productNameInput"
            defaultValue={name??""}
            onChange={(e) => {
              productContext.name = e;
            }}
            
            label="نام محصول"
            placeholder="نام محصول"
            validation={{ required: "نام محصول الزامی است" }} 
            register={register}
            error={errors["productNameInput"]}
          />


  <InputField
          id = "productPriceInput"
            defaultValue={price??""}
            onChange={(e) => {
              
              productContext.price = e;  

              // productContext.setState({
              //   price:e
              // });         
              // setProductContextState(productContext);
            }}
             format={(v)=>{
              const m = formatPrice(formatter(v));
              return m;
            }}
            label="قیمت"
            placeholder="قیمت"
            error={errors["productPriceInput"]}


            register={register}
            validation={{ required: "قیمت الزامی است" ,pattern: { value: /^[۰۱۲۳۴۵۶۷۸۹,]+$/, message: "قیمت باید عدد باشد" }}}
          />

          <InputField 
            label="تگ"
            id="productTagsInput"
          >
          <InputTagField id="productTagsInput" tags={[]} 

          onChange={(tags)=>{
            productContext.tags = tags;
            console.log(productContext);
          }}
       
          />
          </InputField>

        </div>
      </div>

      <div class="flex flex-1">
        <RichText />
        
      </div>
    </div>
  );
}

function RichText() {
  const [value, setValue] = useState({ editorHtml: "" });
  return <Editor value={value} setValue={setValue} />;
}
