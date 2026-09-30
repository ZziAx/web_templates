import { NavLink } from "react-router-dom";
import { login } from "../../../api/adminLogin";
import { useContext } from "react";
import { AdminProfileContext } from "../../../core/admin-panel";

function LoginPage(props) {
  const creditionals = {
    username: "root",
    password: "1234",
  };

  const adminProfileContext = useContext(AdminProfileContext);


  return (
    <div>
      <div
        onClick={async () => {
          const res = await login({
            username: "root",
            password: "1234",
          });

          if (res.data.username != undefined) {
            adminProfileContext["user"] = res.data;
          }
          props.onLoggedIn(adminProfileContext);
        }}
        class="flex w-[30px] h-[30px]"
      >
        Login
      </div>
    </div>
  );
}

export default LoginPage;
