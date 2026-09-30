import { TextButton } from "../../components/buttons/textButton";

export function YesNoButtonGroup({onCanceled,onConfirm, confirmText = "حذف" , cancelText ="انسراف"}){
    return <div class="flex flex-row  gap-2 justify-center items-center w-full h-[50px]">
          <TextButton
            onClick={async () => {
              await onCanceled();
            }}
            bgColor="var(--color-neutral-100)"
            fgColor="black"
            className="flex flex-1"
            text={cancelText}
          />
          <TextButton
            onClick={async () => {

              await onConfirm();
            }}
            bgColor="var(--color-primary-400)"
            fgColor="white"
            className="flex flex-1"
            text={confirmText}
          />
        </div>
}