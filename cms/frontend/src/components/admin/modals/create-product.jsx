import { useState, createContext, useContext, useEffect, useRef } from "react";

import { StepProgress } from "../../step-progress";
import { ProductUploadMedia } from "../../../pages/admin/productUploadMedia";
import { ProductSettings } from "../../../pages/admin/productSettings";
import { Button } from "../../buttons/button.jsx";
import { ProductContext } from "../../../core/admin-panel";
import withLoadingDialog from "@/hocs/withLoadingDialog.jsx";

import { AdminMediaFilePicker } from "../adminFilePicker.jsx";
import {
  AdminGridCol,
  AdminGridForm,
  AdminGridRow,
} from "../adminGridForm.jsx";
import { AdminDataForm } from "../adminDataForm.jsx";
import { OutlinedButton } from "../../buttons/outlinedButton.jsx";
import {
  editProduct,
  getProductInfo,
  uploadProducts,
} from "../../../api/productService.jsx";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";

import * as Iconsax from "iconsax-reactjs";
import ArrowBackTitle from "../titles/arrowBackTitle.jsx";
import ConfirmButton from "../../buttons/confirmButton.jsx";
import { Dialog } from "./dialog.jsx";
import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../modules/textInput/FormTextInput.jsx";
import useNumberFormat from "../../../modules/hooks/useNumberFormat.jsx";
import LoadingWrapper from "../../loadingWrapper.jsx";
import useUploadVariables from "../../../modules/hooks/useUploadVariables.jsx";
import withContext from "../../../hocs/withContext.jsx";

export function CreateProductsModal() {
  const location = useLocation();

  // const [images,setImages] = useState([]);

  // Define the configuration for each input
  const inputConfigs = [
    {
      id: "productName", // Used for 'name' in register/control and key
      label: "نام محصول",
      placeholder: "نام محصول را وارد کنید",
      validation: { required: "نام محصول الزامی است" },
      type: "text", // Specify input type
    },
    {
      id: "productPrice",
      label: "قیمت محصول",
      placeholder: "قیمت را وارد کنید",
      validation: {
        required: "قیمت الزامی است",
        pattern: { value: /^[0-9]+$/, message: "قیمت باید عدد باشد" },
      },
      type: "number",
    },
    // Add more input configurations here
  ];

  const formLayout = [[0], [1]];

  const setImages = (images) => {
    setState(
      Object.assign({}, state, {
        images: [...state.images, ...images],
      }),
    );
  };

  const [state, setState] = useState({
    name: "",
    images: [],
    description: "",
    uri: "",
    price: 0,
    tags: [],
    setState:(_state) => setState(_state),
    setImages: (images) => setImages(images),
  });

  const id = location.state?.productId ?? undefined;
  const editMode = id != undefined;
  const [loaded, setLoaded] = useState(id == undefined);

  useEffect(() => {
    if (id != undefined) {
      getProductInfo(id).then((res) => {
        var d = res.data;
        d.images = [];
        setState(d);
        setLoaded(true);
      });
    }
  }, []);

  const targetUrl = "../products";

  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

      // const productContext = useContext(ProductContext);

  function _Form(props) {
    const { setUploadProgress, setUploadState, isUploading,errors,context,value } = props;

    const _c = useContext(context);

    
    

    const onSubmit = async (data) => {
      // const 

      // console.log("context value is ",value);
      
      // return;
      setUploadState(true);

      if (isUploading) return;

      setUploadProgress(0);
      setUploadState(true);

      const { toNumber } = useNumberFormat();
      state.name = data.productNameInput;
      state.price = toNumber(data.productPriceInput);

      state.tags = JSON.stringify(_c.tags);
      
      
      if (editMode) {
        await editProduct(id, state);
      } else {
        await uploadProducts({
          payload: state,
          onUploadProgress: (p) => {
            setUploadProgress(p.progress);
            console.log("progress is ", p);
          },
        });
      }

      setTimeout(() => {
         navigateTo(targetUrl, {
        replace: true,
        relative: true,
      });
      }, 1000);
     
    };
  

    return (
      loaded && (
      
          <form
            // style={{ pointerEvents: isUploading && "none" }}
            onSubmit={handleSubmit(onSubmit)}
            class="relative flex flex-1"
          >
            <div class=" flex flex-col w-full bg-blue-200 primary-shadow">
              {/* bg-[var(--color-light-100)] */}

              <AdminGridForm
                header={
                  <div class="header-between gap-3">
                    <ConfirmButton
                      onClick={async () => {
                        await handleSubmit(onSubmit);
                      }}
                    />

                    <ArrowBackTitle
                      title="افزودن محسول جدید"
                      onClick={() => {
                        navigateTo(targetUrl, {
                          replace: true,
                        });
                      }}
                    />
                  </div>
                }
                formColor="var(--color-light-100)"
                padding="0px"
                tw=""
              >
                <AdminGridCol id="1">
                  <AdminGridCol flex="2">
                    <AdminDataForm title="دسته بندی" />
                  </AdminGridCol>
                  <AdminGridCol>
                    <AdminDataForm title="تخفیف و جشنواره" />
                  </AdminGridCol>

                  <AdminGridCol flex="2">
                    <AdminDataForm title="ویژگی ها" />
                  </AdminGridCol>
                </AdminGridCol>

                <AdminGridRow flex="2" id="0">
                  <AdminGridCol flex="2" id="0-1">
                    <AdminGridCol flex="3" id="0-3">
                      <AdminDataForm title="اطلاعات">
                        <ProductSettings />
                      </AdminDataForm>
                    </AdminGridCol>

                    <AdminGridCol id="0-3">
                      <AdminDataForm
                        headerActions={
                          <Button
                            fgColor="var(--color-neutral-500)"
                            bgColor="var(--color-light-100)"
                            twPadding="p-[0px]"
                          >
                            <AdminMediaFilePicker
                              addImage={(images) => setImages(images)}
                              multiSelect={true}
                              fromBlob={false}
                            />

                            <div class="row-center h-full w-full  p-2">
                              افزودن فایل
                              <Iconsax.Add />
                            </div>
                          </Button>
                        }
                        title="مدیا"
                        flex={2}
                      >
                        <ProductUploadMedia />
                      </AdminDataForm>
                    </AdminGridCol>
                  </AdminGridCol>
                </AdminGridRow>
              </AdminGridForm>
            </div>
          </form>
      
      )
    );
  }


  const WrappedContext = withContext(_Form);
  const WrappedLoadingDialog = withLoadingDialog(WrappedContext);
  const WrappedRef = useRef(WrappedLoadingDialog);

// { ...state, register: register, errors: errors }
  return <WrappedRef.current context = {ProductContext} value={{ ...state, register: register, errors: errors }} errors={errors}/>;
}
