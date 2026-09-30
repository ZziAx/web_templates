import { createContext, useContext, useEffect, useState } from "react";
import { InputField } from "../../components/admin/adminInputText.jsx";
import { OutlinedButton } from "../../components/buttons/outlinedButton.jsx";
import {
  addPage,
  deletePage,
  getElementTypes,
  getPages,
} from "../../api/pageBuilderService.jsx";
import {
  AdminRemoveContext,
  PageBuilderContext,
  ProductContext,
} from "../../core/admin-panel.jsx";
import { AdminDataField } from "../../components/admin/adminDataField.jsx";
import { AdminDataForm } from "../../components/admin/adminDataForm.jsx";
import { Header } from "../../components/admin/pageBuilder/essential.jsx";
import PageBuilderMenuModal from "../../components/admin/modals/pageBuilderMenuModal.jsx";
import PageBuilderElementModal from "../../components/admin/modals/PageBuilderElementModal.jsx";

import PageBuilderContentModal from "../../components/admin/modals/PageBuilderContentModal.jsx";
import createOrUseModal from "../../modules/createOrAddModal.jsx";
import { Edit } from "iconsax-reactjs";
import { CircularIconButton } from "../../components/buttons/circularIconButton.jsx";
import { useForm } from "react-hook-form";
import MinusSvg from "@/assets/minus.svg?react";
import EditSvg from "@/assets/edit.svg?react";
import InternetSvg from "@/assets/internet.svg?react";

import { RemoveDialog } from "../../components/admin/modals/removeDialog.jsx";
import withFormLayout from "../../hocs/withFormLayout.jsx";
import withLoadingDialog from "../../hocs/withLoadingDialog.jsx";

import withContext from "@/hocs/withContext.jsx";

const ListItem = ({ value }) => {
  const [mouseEntred, setMouseEntered] = useState(false);
  const { id, name, uri } = value;

  return (
    <div
      onMouseEnter={() => {
        setMouseEntered(true);
      }}
      onMouseLeave={() => {
        setMouseEntered(false);
      }}
      class={`row-between w-full border-[1px] border-neutral-100 rounded-xl h-[100px] flex-shrink-0 p-5 bg-white ${mouseEntred ? "primary-shadow" : "shadow-sm"}`}
    >
      <ItemOptions item={id}/>
    <div class="flex flex-1 h-full w-full "></div>
    
      <div class="flex flex-col h-full gap-2  items-end justify-center ">
        <span >{name}</span>
        <div class="flex  gap-3 flex-row items-center justify-end    rounded-[5px]">
          
          <div
            dir="ltr"
            class="flex flex-row  text-body-2 gap-2 text-black justify-end   cursor-pointer hover:text-black"
          >
           
<span class="!font-roboto ">{uri}/</span>
            
            
            <span class="text-primary-300 hover:underline">مشاهده</span>
            
          </div>

          <InternetSvg width="16px" color="var(--color-neutral-400)"/>
        </div>
      
      </div>
    
    </div>
  );
};

const ItemOptions = (id) => {
  const {onRemoveDialogRequseted} = useContext(AdminRemoveContext);
  return (
    <div class="row gap-3">
      <CircularIconButton onClick={() => {
        onRemoveDialogRequseted(id);
      }}>
        <MinusSvg />
      </CircularIconButton>
      <CircularIconButton onClick={() => {}}>
        <EditSvg />
      </CircularIconButton>
    </div>
  );
};

function Body({ setPages, pages }) {
  useEffect(() => {
    getPages().then((_pages) => {
      
      setPages(_pages.data);
    });
  }, []);

  if (pages == null) {
    return <div>loading</div>;
  }
  // py-5
  return (
    <div class="flex flex-col  h-[calc(100%-150px)] w-full bg-light-50  overflow-y-auto  primary-shadow p-5 rounded-xl  gap-5 ">
      {pages.map((v, i) => {
        return <ListItem value={v} />;
      })}
    </div>
  );
}

// const {  register,
//     handleSubmit,
//     formState: { errors },} = useForm();



export function Pages() {
  const [pages, setPages] = useState(null);

  const [removeState, setRemoveState] = useState({ open: false, items: [] });

  const pageBuilderContext = useContext(PageBuilderContext);
  const page = {
    name: "",
    uri: "",
    title:"",
    elements: [],
    media: {},
  };
  pageBuilderContext.builder = page;

  pageBuilderContext.callBacks = {
    onMediaUpload: (medias) => {
      const mediaIds = [];
      for (var i = 0; i < medias.length; i++) {
        const { media } = pageBuilderContext.builder;
        const ids = Object.keys(media);
        const lastId = ids.length == 0 ? 0 : parseInt(ids[ids.length - 1]) + 1;
        pageBuilderContext.builder.media[lastId] = medias[i];
        mediaIds.push(lastId);
      }

      return mediaIds;
    },
  };

  return (
    <AdminRemoveContext.Provider value={{
      onRemoveDialogRequseted:(withItems)=>{
        setRemoveState({
          open:true,
          items:withItems
        });

      },

      onRemoveItem:(id)=>{

      }
    }}>

      {/* {" "} */}
      <div class="flex flex-1 bg-red-200">

      
      <div class="flex flex-1 gap-5 bg-light-100 w-full flex-col  overflow-hidden p-5">
        <Header
          count={pages?.length}
          onPageBuilderMenuOpened={() => {
            const context = new createOrUseModal("0");

            const WrappedPageForm =
              withFormLayout(PageBuilderMenuModal);

              const WrappedLoadingDialog = withLoadingDialog(WrappedPageForm);

              // const WrappedContext = withContext(WrappedLoadingDialog);

            const modal = (
              <WrappedLoadingDialog
              // context={ProductContext}
              // value={{}}
                opened={true}
                onClosed={() => {}}
                onContentOpened={() => {}}
              />
            );

            context.open(modal, "0");
          }}
        />

        <Body pages={pages} setPages={setPages} />

        <RemoveDialog
          removeState={removeState}
          onDelete={async (ids) => {
            const removeId = ids.item;
         
            await deletePage(removeId);
            

            setRemoveState({open:false,items:[]});

            setPages(pages.filter((page)=>page.id!=removeId))
            
          }}
          onCanceled={() => {
            setRemoveState({open:false,items:[]});
         
          }}
        />
      </div>
   

        {/* <div class="flex flex-1 px-4 justify-start items-start overflow-auto bg-black">
          <Body />
        </div> */}
        </div>
    </AdminRemoveContext.Provider>
  );
}
