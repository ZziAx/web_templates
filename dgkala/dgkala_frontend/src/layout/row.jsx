export function Row(props) {
    const horizontalDirection = {
        display:"flex",
        flex:1,
        flexDirection:"row"
    }

    return (<div class={props.class} style={horizontalDirection}>

        {props.children}
    </div>)

}