import { useState } from "react";
import { Button } from "../../buttons/button";
import { TextButton } from "../../buttons/textButton";
import { Dialog } from "./dialog";
import * as Iconsax from "iconsax-reactjs";
import { YesNoButtonGroup } from "../../../modules/groups/YesNoButtonGroup";

export function RemoveDialog({ onDelete, onCanceled, removeState }) {
  const { open, items } = removeState;

  if (!open) return;
  
  return (
    <Dialog
      title="آیا مطمعن هستید؟"
      subtitle="در سورت حذف بازیابی ممکن نیست"
      leading={<Iconsax.Trash />}
      height={150}
      width={400}
      open={open}
      footer={<YesNoButtonGroup onCanceled={onCanceled} onConfirm={async ()=>{await onDelete(items);}} />}
    />
  );
}
