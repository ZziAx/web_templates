import React, { useContext, useState } from "react";
import LoginPage from "./loginPage";
import { AdminProfileContext } from "../../../core/admin-panel";

function BaseAuthPage(props) {
  const profileContext = useContext(AdminProfileContext);
  const [profile,setProfile] = useState(profileContext);
  if ( profile.username == undefined) {
    return <LoginPage 
    onLoggedIn={(profile)=>{
        setProfile(profile.user);
    }}
    />;
  }
  return <>{props.children}</>;
}

export default BaseAuthPage;
