import {useState,createContext} from "react";


const SideBarSettingsContext = {
  width: 50,
  expandedWidth: 150,
  iconBoxWidth: 40,
  iconBoxHeight: 40,
  expandedBoxWidth:-1,
  expanded:false,
  mr:-1
};


const DashboardContext = createContext();

const ProductContext = createContext();

const PageBuilderContext = createContext();

const AdminPanelCommonContext = createContext();

const AdminProfileContext = createContext();

const AdminListViewContext = createContext();


const AdminFormContext = createContext();

const AdminRemoveContext = createContext();



export {SideBarSettingsContext,ProductContext,PageBuilderContext,AdminProfileContext,DashboardContext,AdminListViewContext,AdminFormContext,AdminRemoveContext,AdminPanelCommonContext}