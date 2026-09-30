export function CircularIconButton({children,onClick}){

    return <div 
    onClick={onClick}
    class="rounded-full p-1 hover:bg-neutral-200 cursor-pointer">
        {children}
    </div>

}