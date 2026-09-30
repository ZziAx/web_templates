import { fromBlob } from "./adminFilePicker";

function AdminListImageItem(props) {
  const { aspect = 1.0, item,children,enableOptions = true, onClick = () => null } = props;

  console.log("src is ",item);
  return (
    <div
      onClick={onClick}
      style={{
        aspectRatio: aspect,
      }}
      className="relative  flex  h-full overflow-hidden  primary-shadow hover:scale-[0.95] normal-transition rounded-xl cursor-pointer border-[1px] border-solid border-neutral-300 "
    >
      {
        children != null ?children:<img src={fromBlob(item)} className=" bg-white  flex  rounded-xl" alt="" />
      }
      
      

{
  enableOptions && <div class="absolute bottom-0 p-[0px]  w-full transition-all duration-200 opacity-0 hover:opacity-[50%]">
        <div class="flex h-[15px] w-full bg-black rounded-b-xl "></div>
      </div>
}
      
    </div>
  );
}

export default AdminListImageItem;
