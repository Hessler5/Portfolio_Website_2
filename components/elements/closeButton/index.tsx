interface CloseButtonProp {
    onClose: () => void
}

export default function CloseButton(props: CloseButtonProp) {
    return (
        <button 
            onClick={props.onClose}
            className=
                "cursor-pointer border-b-2 border-b-black border-r-2 border-r-black border-t-2 border-t-white border-l-2 border-l-white bg-[#C0C0C0] active:border-b active:border-r active:border-t-3 active:border-t-black active:border-l-3 active:border-l-black text-black h-5 w-5 flex justify-center items-center"
        >
            𝝬
        </button>
    )
}