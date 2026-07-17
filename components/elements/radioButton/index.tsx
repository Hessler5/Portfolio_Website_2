import { cn } from "@/utils/cn"

interface RadioButtonProps {
    text: string,
    isSelected: boolean,
    onClick: () => void,
}

export default function RadioButton(props: RadioButtonProps) {
    return (
        <div className="flex gap-2 items-center" onClick={props.onClick}>
            <button
                className="rounded-full h-3 w-3 bg-white border-b-2 border-b-white border-r-2 border-r-white border-t-2 border-t-black border-l-2 border-l-black flex justify-center items-center"
            >
                <div className={cn("h-1.5 w-1.5 rounded-full", props.isSelected && "bg-black")}/>
            </button>
            <p>{props.text}</p>
        </div>
    )

}