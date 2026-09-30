export function Column(props) {
    const verticalDirection = {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        margin:"0px",
        padding:"0px",
        gap:props.gap
        
    }

    return (<div class={props.class} style={verticalDirection}>
        {props.children}
    </div>)

}