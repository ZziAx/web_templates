import React, { useState, useEffe, useEffect } from "react";
import { DataSheet } from "../../components/dataSheet";
import {
  AdminStatusCell,
  AdminTextImageCell,
  AdminTextCell,
} from "../../components/admin/adminCells";
import {
  AdminDataFieldTitle,
  AdminDataField,
} from "../../components/admin/adminDataField";
import { Button } from "../../components/buttons/button";
import { getProducts } from "../../api/productService";
import { NavLink } from "react-router-dom";
import { CreateProductsModal } from "../../components/admin/modals/create-product";
import {
  AdminGridCol,
  AdminGridForm,
} from "../../components/admin/adminGridForm";
import { fromAdminProductsDTO } from "../../mapper/adminProductMap";
import { OutlinedButton } from "../../components/buttons/outlinedButton";
import { AlignHorizontally, AlignTop } from "iconsax-reactjs";
import FetchPage from "./fetchPage";
import { AdminListView } from "../../components/admin/adminListView";

export class Products extends AdminListView {
  constructor(props) {
    super({
      apiCall: getProducts,
      apiArgs: {},
      apiParams: { page: 0, limit: 10 },

      zeroItemTitle: "محصولی اضافه نشده",
      title: (length) => `${length} محصول اضافه شده`,
      selectedTitle: (length) => `${length} محصول انتخاب شده`,
      headerActions: [
        <NavLink to={"create"} replace end>
          <OutlinedButton
            bgColor="var(--color-light-100)"
            fgColor="#232425"
            className="hover:opacity-10"
            onClick={() => {}}
          >
            ایمپورت فایل اکسل
          </OutlinedButton>
        </NavLink>,

        <NavLink to={"create"} replace end>
          <OutlinedButton
            // bgColor="var(--color-primary-400)"
            bgColor="#4c4c4c"
            fgColor="white"
            onClick={() => {}}
          >
            افزودن محصول جدید
          </OutlinedButton>
        </NavLink>,
      ],
    });
  }

  render() {
    return super.render();
  }
}
