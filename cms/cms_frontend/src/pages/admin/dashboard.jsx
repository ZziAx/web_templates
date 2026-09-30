import ApiProvider from "../../modules/apiProvider";
import { useContext, useState } from "react";
import {  DashboardContext } from "../../core/admin-panel";
import { getDashboardData } from "../../api/dashboard";
import FetchPage from "./fetchPage";
import {ImageComponent} from "../../modules/imageComponents";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "@shared/responsiveProvider";

const NumericTitle = ({ sub, value }) => {
  return (
    <div
      class="flex flex-row gap-3 justify-start"
      style={{
        direction: "rtl",
      }}
    >
      <h1>{value}</h1>

      <h3 class="flex flex-row items-center">{sub}</h3>
    </div>
  );
};

const NormalTitle = ({ value }) => {
  return (
    <div
      class="flex flex-row gap-3 justify-start"
      style={{
        direction: "rtl",
      }}
    >
      <h2>{value}</h2>
    </div>
  );
};


const ListContent = ({content,imageBuilder})=>{

  console.log(content);
  return <div class="flex h-full py-[10px] flex-row gap-[20px]">
    {
      content.map((c)=>{
        return <div class="flex  items-center justify-center h-full  aspect-[1.0]">
          
          {
            imageBuilder(c)
          }

        </div>
      })
    }
  </div>

}
const ListTile = ({ title,content,onMoreClicked }) => {
  return (
    <div class="flex flex-col  w-full h-[200px] bg-light-50 border-b-1 border-neutral-200 cursor-pointer  p-5 ">
      <div class="flex flex-row-reverse  w-full items-center justify-between gap-3  ">
      
        {title}

        <div onClick={onMoreClicked} class="flex bg-neutral-500 px-2 py-1 normal-transition  hover:scale-[0.98] scale-[0.99] rounded-[5px] text-white">
          <h4>نمایش همه</h4>
        </div>
      </div>

      <div 
      
      class="flex flex-1 flex-row-reverse items-center">

        {
          content
        }



      </div>

      {/* <div class="divider"/> */}
    </div>
  );
};

export class Dashboard extends FetchPage {
  constructor(props) {
   
    super({
      apiCall: getDashboardData.bind()
    });

  }

  child(props){
    const _this = props.this;


    const state = _this.state;

    const data = state.data;



    if(!data ){
      return <div>
        not loaded
      </div>
    }

    const navigateTo = useNavigate();
    const {logs,orders,mostViews} = data;
// grid-cols-4
    const {isMobileSm,isMobileMd,isMobileLg,isTablet} = useResponsive();
    const itemAspect = !isMobileMd && 1.0;
      return (
      <div class="flex flex-col w-full px-8 pt-[30px] gap-[20px] overflow-x-auto">
        <div class="flex flex-col gap-[20px] z-0">
          <div class="col items-end   gap-[2px]">
            <h2 class="">گزارشات</h2>

            <span class="sub-2 text-neutral-400 ">۲۴ ساعت اخیر</span>
          </div>

          <div class={`grid ${!isTablet?'grid-cols-2':'grid-cols-4'} w-full gap-8`}>
            <ReportsCard
              value={logs.sell?.count}
              aspect={itemAspect}
              from="rgb(246, 7, 19)"
              to="rgb(246, 7, 115)"
              text="فروش"
              groth = {logs.sell?.groth}

              // groth="۱۲"
            />

            <ReportsCard
              from="rgb(68, 0, 255)"
              to="rgb(111, 65, 236)"
               aspect={itemAspect}
              value={logs.productViews?.count}
              text="بازدید از محصولات"
              groth = {logs.productViews?.groth}
              // groth="۵۰"

            />
            <ReportsCard
              // text="در روز اخیر"
              from="rgb(19, 48, 188)"
              to="rgb(7, 57, 224)"
              value={logs.siteViews?.count}
               aspect={itemAspect}
              text="بازدید از سایت"
              groth = {logs.siteViews?.groth}
              // groth="۲۱"
            />

            <ReportsCard
              from="#ff650c"
              to="#f3b71d"
              text="ثبت نام"
               aspect={itemAspect}
              value={logs.signup?.count}
              groth = {logs.signup?.groth}
              // groth="۲۹"
            />
          </div>
        </div>
        <div class="h-[10px]" />

        <ListTile 
        
        title={<NumericTitle value={orders.length} sub="سفارش جدید" />}
        
        content={
          <ListContent 
          
          content={orders}
          
          imageBuilder={(c)=><ImageComponent 
            width="100px"
            image={c.product.image}/>}
          />
        
      }
        
        />

        <ListTile 
         onMoreClicked={()=>{
          navigateTo("./products",{relative:true});
        }}
        content={<ListContent
        content={mostViews}
        
       
        imageBuilder={(c)=><ImageComponent 
            width="100px"
            image={c.image}/>}
          
        />}
        
        title={<NumericTitle 
        sub="پربازدیدترین ها" />} />

        <ListTile title={<NumericTitle value="۶" sub="سفارش جدید" />} />

      </div>
    );

  }

  render() {
   return super.render();
  }
}
export function Dashboard2() {
  var ctx = useContext(DashboardContext);
  const [data, setData] = useState(ctx);

  return (
    <ApiProvider
      apiCall={getDashboardData.bind()}
      then={(_data) => {
        ctx = _data;
        setData(ctx);
        console.log("data loaded ", ctx);
      }}
    >
      <div class="flex flex-col w-full px-8 pt-[30px] gap-[20px]">
        <div class="flex flex-col gap-[20px] z-300">
          <div class="col items-end   gap-[2px]">
            <h2 class="">گزارشات</h2>

            <span class="sub-2 text-neutral-400 ">۲۴ ساعت اخیر</span>
          </div>

          <div class="flex flex-row w-full gap-8">
            <ReportsCard
              value={data.sell?.count}
              from="rgb(246, 7, 19)"
              to="rgb(246, 7, 115)"
              text="فروش"
              groth="۱۲"
            />

            <ReportsCard
              from="rgb(68, 0, 255)"
              to="rgb(111, 65, 236)"
              value={data.productViews?.count}
              text="بازدید از محصولات"
              groth="۵۰"
            />
            <ReportsCard
              // text="در روز اخیر"
              from="rgb(19, 48, 188)"
              to="rgb(7, 57, 224)"
              value={data.siteViews?.count}
              text="بازدید از سایت"
              groth="۲۱"
            />

            <ReportsCard
              from="#ff650c"
              to="#f3b71d"
              text="ثبت نام"
              value={data.signup?.count}
              groth="۲۹"
            />
          </div>
        </div>
        <div class="h-[10px]" />

        <ListItem title={<NumericTitle value="۶" sub="سفارش جدید" />} />
        <ListItem title={<NormalTitle value="پرتعامل ترین ها" />} />
        <ListItem title={<NumericTitle value="۶" sub="سفارش جدید" />} />
      </div>
    </ApiProvider>
  );
}

function ReportsCard(props) {
  const { value, text, groth,aspect } = props;

  return (
    <div
      style={{
        // backgroundColor: props.color
        background: `linear-gradient(10deg, ${props.from}, ${props.to})`,
        // aspectRatio:aspect
      }}
      class={`flex flex-1 flex-row   cursor-pointer hover:shadow-xl normal-transition w-full h-full py-3 px-3 gap-4 justify-center primary-shadow  rounded-[12px]`}
    >
      {/* <div class="flex flex-1"></div> */}

      <div class="flex flex-3 flex-col h-full w-full gap-4 justify-start items-end overflow-hidden">
        <div class="flex flex-row-reverse justify-between items-center w-full">
          <div class="flex flex-col justify-start items-end ">
            <h2 class="text-white ">{value}</h2>

            <span class="sub-3 text-white line-clamp-1">{text}</span>
          </div>

          <div class="px-1 bg-[rgba(0,0,0,0.1)] rounded-[5px] card-box-shadow">
            <h2 class="text-white gradient-text   normal-transition">
              <span class="sub-2"> %</span>
              {groth}
            </h2>
          </div>
        </div>

        {/* <div class="flex h-full w-full bg-white rounded-lg shadow-xl opacity-[0.1]"></div> */}
      </div>
    </div>
  );
}
