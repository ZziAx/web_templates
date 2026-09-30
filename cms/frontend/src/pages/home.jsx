import { Header } from "../components/header"
import { Column } from "../layout/column";
import { Slider } from "../components/filesList";
import { CircularBar } from "../components/circularBar";
import { AmazingOffer } from "../components/amazingOffer";
import { PrimaryBannerGroup } from "../components/primaryBannerGroup";
import { NormalHrBanner } from "../components/normalHrBanner";


export function Home() {
    return (
        <Column gap="20px" >
            <Header />
            <Slider />
            <div class="flex flex-col gap-y-[20px] w-full  justify-center items-center h-auto laptop:px-[15%] mobile:px-[0px]">
                <CircularBar />
                <AmazingOffer />
                <PrimaryBannerGroup />
                <NormalHrBanner />
                <PrimaryBannerGroup
                    cols="2"
                    aspect="820/328"
                    items={[1, 2]
                    }
                />

            </div>

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