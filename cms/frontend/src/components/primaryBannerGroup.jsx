
function Card({ aspect = 4 / 3 }) {
    return (
        <div

            style={{ aspectRatio: aspect }}

            class={`flex bg-black h-full rounded-2xl`}>

        </div>
    );
}

export function PrimaryBannerGroup({ cols = 4, aspect = 4 / 3, items = [
    1, 2, 3, 4
] }) {





    return (
        <div

            style={{
                height: "auto",
                gridTemplateColumns: `repeat(${cols}, 1fr)`

            }}

            class={`flex grid flex-row-reverse justify-center bg-mint-500  w-full gap-3`}>
            {
                items.map((index, _) => <Card aspect={aspect} />)
            }

        </div>
    );
}

