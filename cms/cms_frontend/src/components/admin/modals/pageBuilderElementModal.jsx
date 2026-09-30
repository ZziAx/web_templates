import { createContext, useContext, useEffect, useState } from "react";
import { OutlinedButton } from "../../buttons/outlinedButton";
import { AdminDataForm } from "../adminDataForm";
import { InputField } from "../adminInputText";
import { PageBuilderContext } from "../../../core/admin-panel";
import { getElementTypes } from "../../../api/pageBuilderService";
import BottomModal from "../../../modules/bottomModal";
import PageBuilderContentModal from "./PageBuilderContentModal";
import { FilesList } from "../../filesList";
import AdminListImageItem from "../adminListImageItem";
import createOrUseModal from "../../../modules/createOrAddModal";
import ArrowBackTitle from "../titles/arrowBackTitle";

const PageBuilderElementModal = (props) => {
  const page = useContext(PageBuilderContext);
  const { opened, onClosed } = props;
  const [elementTypes, setElementTypes] = useState(page.builder.elementTypes);

  useEffect(() => {
    if (page.builder.elementTypes == undefined) {
      getElementTypes().then((res) => {
        console.log(res.data);
        page.builder.elementTypes = res.data;
        setElementTypes(page.builder.elementTypes);
      });
    }
  });

  if (elementTypes == undefined) {
    return <div />;
  }

  return (
    <div class="col gap-10">
      <div dir="ltr" class="flex flex-row justify-end w-full">
        <ArrowBackTitle
          onClick={() => {
            const context = new createOrUseModal("0");
            context.pop();
          }}
          title="انتخاب المنت دلخواه"
        />
      </div>
      <div class="flex flex-row h-full gap-[10px]">
        {Object.entries(elementTypes)?.map((_v, i) => {
          // console.log(v[1]);
          const v = _v[1];
          return (
            <div class="flex flex-col gap-1">
              <div class="flex h-[90px]">
                <AdminListImageItem
                  onClick={() => {
                    const modal = (
                      <PageBuilderContentModal id={_v[0]} baseElement={v} />
                    );
                    const context = new createOrUseModal("0");
                    context.open(modal, v.name);
                  }}
                  enableOptions={false}
                  item={v.image}
                />
              </div>

              <span class="sub-3 text-neutral-500">{v.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageBuilderElementModal;
