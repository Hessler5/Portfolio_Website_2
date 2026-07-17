interface TextBoxProps {
    text: string | React.ReactElement
}

export default function TextBox(props: TextBoxProps) {
    return (
        <div className="border-b-2 border-b-white border-r-2 border-r-white border-t-2 border-t-black border-l-2 border-l-black bg-white px-2 max-h-50 overflow-auto">
            {props.text}
        </div>
    )
}