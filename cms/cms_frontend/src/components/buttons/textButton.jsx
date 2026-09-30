import { Button } from "./button";

export function TextButton(props){
    return <Button {...props}
 
    >
        <span>
            {
                props.text
            }
        </span>
    </Button>
}