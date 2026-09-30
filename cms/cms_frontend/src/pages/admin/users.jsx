import { getUsers } from "../../api/userService";
import { DataSheet } from "../../components/dataSheet";
import ApiProvider from "../../modules/apiProvider";
import FetchPage from "./fetchPage";
import { AdminDataField } from "../../components/admin/adminDataField";
import { NavLink } from "react-router-dom";
import { OutlinedButton } from "../../components/buttons/outlinedButton";
import { AdminListView } from "../../components/admin/adminListView";
import { Button } from "../../components/buttons/button";
export class Users extends AdminListView {
  constructor(props) {
    super({
      apiCall: getUsers.bind({ begin: 0, end: 30 }),

      title:(usersCount)=>`${usersCount} کاربر ثبت نام شده`,
      zeroItemTitle:"کاربری وجود ندارد",
      headerActions:[
          <NavLink to={"create"} replace end>
                 <OutlinedButton
                   bgColor="var(--color-light-100)"
                   fgColor="#232425"
                   onClick={() => {}}
                 >
                   ایمپورت فایل اکسل
                 </OutlinedButton>
               </NavLink>
      ]

    });
  }


  render() {
    return super.render();
  }
}
