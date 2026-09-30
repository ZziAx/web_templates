import { Header } from "../components/header/v1/headerV1"
import { Column } from "../layout/column";
import { Slider } from "../components/slider/v1/sliderV1";
import { CircularBar } from "../components/circularBar/v1/circularBarV1";
import { AmazingOffer } from "../components/amazingOffer/v1/amazingOfferV1";
import { BannerGrid } from "../components/bannerGrid/bannerGrid";
import sendLog from "../logger";
import { useResponsive } from "@shared/responsiveProvider";

export function Dgkala() {

  const {isTablet,isMobileLg,isMobileMd,isMobileSm} = useResponsive();

    return (
        <Column gap="20px" >
            <Header />
            <Slider />

            <div class={`flex flex-col gap-y-[20px] w-full  justify-center items-center h-auto ${isTablet && "px-[10%]"}`}>
                <CircularBar />
                <AmazingOffer items={[
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
                <BannerGrid colClassName={` ${isMobileLg?"grid-cols-4 px-4":"grid-cols-2 px-4"}`}
                
                items={[
                    "/uploads/static/f3babe2caf5d0bd168eeaf293de3fe975e97d3a6_1776323883.jpg",
                    "/uploads/static/3ffd977da34c114f91f7a4026b083e75bf946567_1775904435.jpg",
                    "/uploads/static/34ab0819c78a73184031c9db6ea92a769000482a_1775639340.jpg",
                    "/uploads/static/18f609ab23bc505ac8539368d0d838820d56f174_1775545392.jpg",
                ]}
                />
                {

            isMobileLg && <BannerGrid  aspect={2674/226} colClassName={" grid-cols-1 h-[80px] px-4"}  items={["/uploads/static/bbn.png"]}/>

                }

                <BannerGrid
                    colClassName={isMobileSm?"grid-cols-1 px-4":"grid-cols-2  px-4"}
                    bannerClassName={ "rounded-xl"}
                    aspect="820/328"
                    items={["/uploads/static/2defa8370c68e16fbfaf20ff21c26b60e8e77791_1747556227.png", "/uploads/static/5f6ed7d74f70059d5013f0c817767f433589f109_1776069261.jpg"]
                    }
                />
                 <BannerGrid colClassName={` ${isMobileLg?"grid-cols-4 px-4":"grid-cols-2 px-4"}`}
                
                items={[
                    "/uploads/static/f3babe2caf5d0bd168eeaf293de3fe975e97d3a6_1776323883.jpg",
                    "/uploads/static/3ffd977da34c114f91f7a4026b083e75bf946567_1775904435.jpg",
                    "/uploads/static/34ab0819c78a73184031c9db6ea92a769000482a_1775639340.jpg",
                    "/uploads/static/18f609ab23bc505ac8539368d0d838820d56f174_1775545392.jpg",
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