import { Header } from "../components/header/v2/headerV2"

import { Column } from "../layout/column";
import { Slider } from "../components/slider/v2/sliderV2";
import { CircularBar } from "../components/circularBar/v2/circularBarV2";

import { AmazingOffer } from "../components/amazingOffer/v2/amazingOfferV2";
import { BannerGrid } from "../components/bannerGrid/bannerGrid";
import sendLog from "../logger";
import { useResponsive } from "@shared/responsiveProvider";
import { SingleRowSection } from "../components/singleRowSection/v2/singleRowSectionV2";

export function Tecnolife() {

  const {isTablet,isMobileLg,isMobileMd,isMobileSm} = useResponsive();

    return (
        <Column gap="20px" >

            <div>
                <BannerGrid 
                aspect="auto"
                cols={1}
                bannerClassName="rounded-none"
                items={[
                    "/uploads/static/banner_TopGifDesktop_CSMJJg_b533da8e-4407-4c8a-a9f8-a36e4813031b.gif"
                ]}/>
                <Header />
            <Slider
            
            aspect={"auto"}/>
            </div>

            <div class={`flex flex-col gap-y-[20px] flex-1 justify-center items-center h-auto ${isTablet && "px-[10%]"}`}>
                <CircularBar />

                <AmazingOffer 
                className="bg-[#520408]"
                items={[
                    {
                        image:'/uploads/static/5f7a62bf6ebf61acae399810e46b15b4d349c718_1760346117.jpg',
                        description:"سکه گرمی طلا 18 عیار ماربر مدل B-G404"
                    },
                    {
                        image:'/uploads/static/4dd4156a77cb38721f0f1ff7ed8bcc9cf8e63f69_1634449809.jpg',
                        description:
                        "کتاب داستانهای هزارو یکشب اثر عبدالطیف طسوجی تبریزی انتشارات هلیا"
                    },
                    {
                        image:'/uploads/static/e2da1b5b0349f67f100ea8ea4338bc9c17bbe742_1728475543.jpg',
                        description:"کتاب دایره المعارف مصور ژنرال سرگذشت بزرگ ترین فرماندهان نظامی تاریخ اثر آر جی گرنت ترجمه زهرا نیرومند نشر سایان "
                    },
                    {
                        image:'/uploads/static/63164985bd250a865806b1f9d6aad63c07d15c8b_1769270320.jpg',
                        description:"سکه گرمی طلا 18 عیار امین زر مدل amz-0.2"
                    },
                ]}/>
                <BannerGrid 
                aspect="auto"
                colClassName={` ${isMobileLg?"grid-cols-3 px-4":"grid-cols-1 px-4"}`}
                
                items={[
                    "/uploads/static/banner_SecondTripletBanners_BpZzS9_21e6306f-1555-4aa4-b6ad-8433faeee784.webp",
                    "/uploads/static/banner_SecondTripletBanners_D6BFJu_6f7265dc-82e8-4445-a63c-98029eb838be.webp",
                    "/uploads/static/banner_SecondTripletBanners_ozQWTP_8a1598c5-cd1b-4b34-9b9f-0931cc050f8a.webp",
                ]}
                />

                     <SingleRowSection 


                items={[
                    {
                        image:'/uploads/static/5f7a62bf6ebf61acae399810e46b15b4d349c718_1760346117.jpg',
                        description:"سکه گرمی طلا 18 عیار ماربر مدل B-G404"
                    },
                    {
                        image:'/uploads/static/4dd4156a77cb38721f0f1ff7ed8bcc9cf8e63f69_1634449809.jpg',
                        description:
                        "کتاب داستانهای هزارو یکشب اثر عبدالطیف طسوجی تبریزی انتشارات هلیا"
                    },
                ]}
                />
                {

            isMobileLg && <BannerGrid  aspect={"auto"} colClassName={" grid-cols-1 h-[80px] px-4"}  items={["/uploads/static/banner_SingleFullWidthBanner_7oWXDy_379f86f7-8c89-4dda-91b2-e45f2d8f2164.webp"]}/>

                }

                <BannerGrid
                    colClassName={isMobileSm?"grid-cols-1 px-4":"grid-cols-3  px-4"}
                    bannerClassName={ "rounded-xl"}
                    aspect="auto"
                    items={["/uploads/static/banner_CenterTripletBanners_Hm8OyB_e3e08979-ef3a-42a6-a09c-3532f3a027b2.webp", "/uploads/static/banner_CenterTripletBanners_IHwdqm_c8c9da18-57c3-4d38-a845-234861b4fc61.webp",
"/uploads/static/banner_CenterTripletBanners_MCfUqr_ee62a528-4c6d-4e2b-ae08-8e2394be489d.webp"

                    ]
                    }
                />
                <SingleRowSection 


                items={[
                    {
                        image:'/uploads/static/5f7a62bf6ebf61acae399810e46b15b4d349c718_1760346117.jpg',
                        description:"سکه گرمی طلا 18 عیار ماربر مدل B-G404"
                    },
                    {
                        image:'/uploads/static/4dd4156a77cb38721f0f1ff7ed8bcc9cf8e63f69_1634449809.jpg',
                        description:
                        "کتاب داستانهای هزارو یکشب اثر عبدالطیف طسوجی تبریزی انتشارات هلیا"
                    },
                ]}
                />

                
                  <AmazingOffer 
   className="bg-[rgba(157,196,77,1.0)]"
   items={[
                    {
                        image:'/uploads/static/5f7a62bf6ebf61acae399810e46b15b4d349c718_1760346117.jpg',
                        description:"سکه گرمی طلا 18 عیار ماربر مدل B-G404"
                    },
                    {
                        image:'/uploads/static/4dd4156a77cb38721f0f1ff7ed8bcc9cf8e63f69_1634449809.jpg',
                        description:
                        "کتاب داستانهای هزارو یکشب اثر عبدالطیف طسوجی تبریزی انتشارات هلیا"
                    },
                    {
                        image:'/uploads/static/e2da1b5b0349f67f100ea8ea4338bc9c17bbe742_1728475543.jpg',
                        description:"کتاب دایره المعارف مصور ژنرال سرگذشت بزرگ ترین فرماندهان نظامی تاریخ اثر آر جی گرنت ترجمه زهرا نیرومند نشر سایان "
                    },
                    {
                        image:'/uploads/static/63164985bd250a865806b1f9d6aad63c07d15c8b_1769270320.jpg',
                        description:"سکه گرمی طلا 18 عیار امین زر مدل amz-0.2"
                    },
                ]}/>
                 <BannerGrid 
                 aspect="auto"
                 colClassName={` ${isTablet?"grid-cols-2 px-4":"grid-cols-1 px-4"}`}
                
                items={[
                    "/uploads/static/banner_FirstTwinBanners_KvwhDO_e44d6d8f-7bfa-4615-8ccf-0aa120cd984a.webp",
                    "/uploads/static/banner_FirstTwinBanners_MIzQ6V_64ba1c7f-561b-4936-971d-2659e1957bdb.webp",
               
                ]}
                />


 
            </div>

            <div className="flex h-[60px]"/>

        </Column>
    );
}



   // "build:commonjs": "cross-env BABEL_ENV=commonjs babel src --extensions \".js,.ts,.tsx\" --out-dir lib",
    // "build:es": "babel src --extensions \".js,.ts,.tsx\" --out-dir es",
    // "build:umd": "cross-env NODE_ENV=development rollup -c -o dist/react-redux.js",
    // "build:umd:min": "cross-env NODE_ENV=production rollup -c -o dist/react-redux.min.js",
    // "build:types": "tsc",
    // "build": "yarn build:types && yarn build:commonjs && yarn build:es && yarn build:umd && yarn build:umd:min",
    // "clean": "rimraf lib dist es coverage",
    // "api-types": "api-extractor run --local",
    // "format": "prettier --write \"{src,test}/**/*.{js,ts,tsx}\" \"docs/**/*.md\"",
    // "lint": "eslint src --ext ts,tsx,js test/utils test/components test/hooks",
    // "prepare": "yarn clean && yarn build",
    // "pretest": "yarn lint",
    // "test": "jest",
    // "type-tests": "yarn tsc -p test/typetests/tsconfig.json",
    // "coverage": "codecov"