import { OutlinedButton } from "./outlinedButton";


export default function ConfirmButton({text="تایید",onClick,type="submit"}){
    return <OutlinedButton
                    onClick={onClick}
                    fgColor="black"
                    bgColor="#f5f5f5"
                    className="hover:opacity-10 "
                    type={type}
                  >
                   {text}
                  </OutlinedButton>
}