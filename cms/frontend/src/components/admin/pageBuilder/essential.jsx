import { OutlinedButton } from "../../buttons/outlinedButton";
import useNumberFormat from "@/modules/hooks/useNumberFormat";

const Header = (props) => {
  const { onPageBuilderMenuOpened,count } = props;
  const {formatter} = useNumberFormat();
  return (
    <div class="header-between px-5  bg-light-100">
      <OutlinedButton  onClick={onPageBuilderMenuOpened} fgColor="white" bgColor="#4c4c4c">
        افزودن سفحه جدید
      </OutlinedButton>

      <h2>{formatter(count)} سفحه ایجاد شده</h2>
    </div>
  );
};


export {Header}