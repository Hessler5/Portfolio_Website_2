interface ButtonProp {
    name: string
    onClick: () => void
}

export default function Button(props: ButtonProp) {
    return (
        <button 
            onClick={props.onClick}
            className=
                "cursor-pointer border-b-2 border-b-black border-r-2 border-r-black border-t-2 border-t-white border-l-2 border-l-white bg-[#C0C0C0] px-2 active:border-b active:border-r active:border-t-3 active:border-t-black active:border-l-3 active:border-l-black"
        >
            {props.name}
        </button>
    )
}