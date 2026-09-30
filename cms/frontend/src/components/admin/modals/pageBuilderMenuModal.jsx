import React, {
  createContext,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { OutlinedButton } from "../../buttons/outlinedButton";
import { AdminDataForm } from "../adminDataForm";
import { InputField } from "../adminInputText";
import { PageBuilderContext } from "../../../core/admin-panel";
import { addPage, getElementTypes } from "../../../api/pageBuilderService";
import BottomModal from "../../../modules/bottomModal";
import PageBuilderElementModal from "./PageBuilderElementModal";
import createOrUseModal from "../../../modules/createOrAddModal";
import * as Iconsax from "iconsax-reactjs";
import PlusSvg from "@/assets/plus.svg?react";
import MinusSvg from "@/assets/minus.svg?react";

import EditSvg from "@/assets/edit.svg?react";
import { CircularIconButton } from "../../buttons/circularIconButton";
import PageBuilderContentModal from "./PageBuilderContentModal";
import { fromBlob } from "../adminFilePicker";
import ConfirmButton from "../../buttons/confirmButton";
import { useForm } from "react-hook-form";
import LoadingWrapper from "../../loadingWrapper";
import useUploadVariables from "../../../modules/hooks/useUploadVariables";
function ElementList({ onNewContentCalled }) {
  const builderContext = useContext(PageBuilderContext);

  var [context, setContext] = useState(builderContext);

  var { elements, media } = context.builder;

  if (elements.length == 0) {
    return (
      <div class="flex  flex-1 items-center justify-center">
        <p class="text-body-2">سفحه ای اضافه نشده</p>
      </div>
    );
  }
  return (
    <div class="col gap-4 w-full h-full">
      {elements.map((c, i) => {
        const v = c.contents;

        return (
          <div class="flex bg-light-100 h-[50px] flex-row-reverse justify-between shadow-sm gap-2 p-2 items-center justify-center border-neutral-200 w-full ">
            <div class="row h-[50px] gap-10 py-1">
              {...v.map((f) => {
                return (
                  <div class="row  gap-1 w-full h-full">
                    {...f.map((mediaId, i) => (
                      <div
                        style={
                          {
                            // translate:i!=0?"-10px":"0px"
                          }
                        }
                        class="flex h-full items-center justify-center bg-white aspect-[1.0] primary-shadow rounded-[5px] overflow-hidden"
                      >
                        <img
                          class="rounded-[5px]"
                          src={fromBlob(media[mediaId])}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div class="flex flex-row gap-3 border-r-[1px] pr-3 border-neutral-200">
              <CircularIconButton
                onClick={() => {
                  const deletedElement = elements.splice(i, 1);

                  const mediaIds = deletedElement[0].contents.reduce((a, b) => [
                    ...a,
                    ...b,
                  ]);

                  mediaIds.forEach((id) => {
                    delete media[id];
                  });

                  const newContext = Object.assign({}, builderContext, {
                    builder: Object.assign({}, builderContext.builder, {
                      elements: elements,
                      media: media,
                    }),
                  });

                  setContext(newContext);
                }}
              >
                <MinusSvg />
              </CircularIconButton>

              <CircularIconButton
                onClick={() => {
                  const { id, contents } = c;

                  const baseElement = builderContext.builder.elementTypes[id];

                  const modal = new createOrUseModal("0");

                  modal.open(
                    <PageBuilderContentModal
                      edit={true}
                      baseElement={baseElement}
                      data={contents}
                      listIndex={i}
                    />,
                    `${id}-${i}`,
                  );
                }}
              >
                <EditSvg />
              </CircularIconButton>
            </div>
          </div>
        );
      })}

      {/* <div
        onClick={onNewContentCalled}
        class="flex bg-white border-dashed border-1 hover:bg-neutral-100 cursor-pointer rounded-[5px] items-center justify-center border-neutral-400 text-neutral-500 h-[50px] shadow-sm  border-neutral-200 w-full "
      >
        <h3>محتوای جدید</h3>
      </div> */}
    </div>
  );
}

class PageBuilderMenuModal extends React.Component {
  static contextType = PageBuilderContext;
  constructor(props) {
    super(props);

    this.page = {
      name: "",
      uri: "",
      elements: [],
    };

    this.opened = props.opened;
    this.onClosed = props.onClosed;
    this.onContentOpened = props.onContentOpened;
    this.id = props.id;

    this.state = {
      loaded: false,
      ctx: this.context,
      isUploading: false,
    };

    if (this.page.elementTypes == undefined) {
      getElementTypes().then((res) => {
        this.page.elementTypes = res.data;
        this.setState({
          loaded: true,
        });
      });
    }
  }

  async onSubmit(v) {
    this.props.setUploadState(true);
  
    this.context.builder = Object.assign({}, this.context.builder, {
      name: v.pageNameInput,
      uri: v.pageUriInput,
      title: v.pageTitleInput,
    });
    await addPage({
      builder: this.context.builder,
      onUploadProgress: (p) => {
        // setUploadProgress(p.progress);
        this.props.setUploadProgress(p.progress);
        console.log("progress is ", p);
      },
    });
    // console.log("rwueoiurew");


    
    

    //  this.props.setUploadState(false);
     const context = new createOrUseModal("0");
     setTimeout(() => {
      this.props.setUploadState(false);
          context.pop();
      }, 1000);
   
   


  }

  render() {
    const { loaded } = this.state;

    const form = this.props.form;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = form;




   
    return (
      <div class="flex flex-1"> 
      <div class="flex flex-col  gap-10 w-full  h-[800px] ">
        <div dir="ltr" class="header-between">
          {/* <input type="submit"/> */}
          <ConfirmButton onClick={async () => {}} />

          <h2>افزودن سفحه</h2>
        </div>
        {/* var(--color-light-100) */}
        <div class="row-between w-full h-full items-start gap-10 ">
          <AdminDataForm
            // dir="ltr"
            title="اطلاعات"
            className="w-full h-full  border-1 border-neutral-100"
          >
            <div
              // dir="rtl"
              class="flex h-full w-full flex-col items-start gap-10 "
            >
              <InputField
                // value={this.context.builder.name}

                
                id="pageNameInput"
                error={errors["pageNameInput"]}
                register={register}
                validation={{ required: "نام سفحه الزامی است." }}
                value={this.context.builder.name}
                onChange={(v) => {
                  console.log( this.context);
                  this.context.builder.name = v;

                  this.setState({})
                
                  // console.log("sdf ",this.state.name)
                }}
                placeholder="نام سفحه"
                label="نام سفحه"
              />

              <InputField
                id="pageUriInput"
                error={errors["pageUriInput"]}
                register={register}
                validation={{ required: "آدرس سفحه الزامی است." }}
                prefix={"http://" + document.domain + "/"}
                inputDir="ltr"
                value={this.context.builder.uri}
                onChange={(v) => {
          
                  this.context.builder.uri = v;
                  this.setState({});
                }}
                placeholder="آدرس"
                label="آدرس"
              />
              <InputField
                id="pageTitleInput"
                error={errors["pageTitleInput"]}
                register={register}
                validation={{ required: "عنوان سفحه الزامی است." }}
                placeholder="عنوان سایت"
                label="عنوان سایت"
                value={this.context.builder.title}
                   onChange={(v) => {
          
                  this.context.builder.title = v;
                  this.setState({});
                }}
              />
            </div>
          </AdminDataForm>

          <AdminDataForm
            dir="ltr"
            title="نمایش محتوا"
            className="w-full h-full border-1 border-neutral-100"
            headerActions={
              <div
                onClick={() => {
                  const modal = <PageBuilderElementModal />;
                  const context = new createOrUseModal("0");
                  context.open(modal, "1");
                }}
                class="flex flex-row gap-1 rounded-[10px] p-2 items-center justify-center hover:bg-neutral-100 cursor-pointer "
              >
                <p class="text-body-3">افزودن المان جدید</p>
                <PlusSvg />
              </div>
            }
          >
            <div class="divider" />

            <div class="flex w-full h-full ">
              <ElementList
                onNewContentCalled={() => {
                  const modal = <PageBuilderElementModal />;
                  const context = new createOrUseModal("0");
                  context.open(modal, "1");
                }}
              />
            </div>
          </AdminDataForm>
        </div>
      </div>
      </div>
    );
    
    // </form>
  }
}

export default PageBuilderMenuModal;
