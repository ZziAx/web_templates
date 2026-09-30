import { useContext, useState } from "react";
import BottomModal from "../../../modules/bottomModal";
import createOrUseModal from "../../../modules/createOrAddModal";
import ConfirmButton from "../../buttons/confirmButton";
import AdminListImageItem from "../adminListImageItem";
import ArrowBackTitle from "../titles/arrowBackTitle";

import * as Iconsax from "iconsax-reactjs";
import { AdminMediaFilePicker } from "../adminFilePicker";
import { PageBuilderContext } from "../../../core/admin-panel";
import { InputField } from "@/components/admin/adminInputText";

// const Grid2x1 = ()=>{}

// const Banner = ()=>{}

function ArgFieldBuilderByType({ arg, contents, media, addImage, i }) {

  if(arg.type == "text"){
    return <div class="flex   w-[400px]"><InputField/></div>
  }

  return (
    <div class="row h-[90px] gap-10 w-full">
      <div class="flex h-full justify-center items-center  ">
        <div class="rounded-[10px] relative primary-shadow flex h-[40px] w-[40px] fill-center bg-primary-400  cursor-pointer">
          <Iconsax.Add class="text-white" />
          <AdminMediaFilePicker
            fromBlob={false}
            multiSelect={true}
            addImage={(image) => addImage(i, image)}
          />
        </div>
      </div>

      <div class="flex bg-neutral-200 h-full w-[1px]" />

      {contents[i].map((mediaId, i) => {
        const image = media[mediaId];

        console.log("dfd ", contents[i]);

        return <AdminListImageItem item={image} />;
      })}
    </div>
  );
}

function ElementBuilder({ baseElement, contents, setContents }) {
  const { args } = baseElement;

  const builderContext = useContext(PageBuilderContext);
  const { media } = builderContext.builder;

  console.log("target element is ", media);

  const addImage = (i, image) => {
    const ids = builderContext.callBacks.onMediaUpload(image);
    var currentContent = [...contents[i], ...ids];
    var newContents = Object.assign([], contents);
    newContents[i] = currentContent;
    console.log(newContents);
    setContents(newContents);
  };

  return (
    <div class="flex flex-col  h-full gap-[50px]">
      {args.map((v, i) => {
        console.log(v);
      
        var subText = "";

        if (v.type == "image" || v.type == "banner") {
          const { min, max } = v;
          if (min == max && max != -1) {
            subText = `انتخاب ${max} تسویر مجاز است`;
          } else {
            var minSub = "";
            var maxSub = "";

            if (min != -1) {
              minSub = `حداقل ${min} تسویر `;
              subText += minSub;
            }
            if (max != -1) {
              if (min != -1) {
                subText += " و";
              }

              maxSub = `حداکثر ${max} تسویر `;
              subText += maxSub;
            }
          }
        }

        return (
          <div class="flex flex-col items-start  gap-[20px] ">
            <div class="flex flex-col items-start gap-1">
              <h3 class="text-black">{v.title}</h3>
              <div class="sub-2  text-neutral-400">{subText}</div>
            </div>

            <ArgFieldBuilderByType
              i={i}
              arg={v}
              addImage={addImage}
              contents={contents}
              media={media}
            />
          </div>
        );
      })}
    </div>
  );
}

function PageBuilderContentModal(props) {
  const {
    baseElement,
    id,
    listIndex,
    edit = false,
    data = baseElement.args.map((v) => []),
  } = props;

  // console.log("ewruiuower ",selectedElement);
  const [contents, setContents] = useState([...data]);

  const builderContext = useContext(PageBuilderContext);
  const { media } = builderContext.builder;
  return (
    <div class=" col gap-5 items-start h-auto w-full">
      <div dir="ltr" class="header-between w-full">
        <ConfirmButton
          onClick={() => {

            if (edit) {
              builderContext.builder.elements[listIndex] = {
                id: id,
                contents: contents,
              };
            } else {
              builderContext.builder.elements.push({
                id: id,
                contents: contents,
              });
            }

            const context = new createOrUseModal("0");
            context.pop("0");
          }}
        />

        <ArrowBackTitle
          onClick={() => {
            const context = new createOrUseModal("0");
            context.pop();
          }}
          title="افزودن محتوا"
        />
      </div>

      <ElementBuilder
        contents={contents}
        setContents={(c) => {
          setContents(c);
        }}
        baseElement={baseElement}
      />
    </div>
  );
}

export default PageBuilderContentModal;
