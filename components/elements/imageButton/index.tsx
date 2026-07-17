import Image from "next/image";
import { cn } from "@/utils/cn";

interface ImageButtonProps {
    imageLink: string,
    imageAltText: string,
    text: string,
    onClick: () => void,
    isDesktopButton?: boolean,
}

export default function ImageButton(props: ImageButtonProps) {
    return(
        <button onClick={props.onClick} className={cn("flex flex-wrap justify-center w-25 cursor-pointer items-center font-W95FA", props.isDesktopButton && "text-white")}>
            <Image src={props.imageLink} alt={props.imageAltText} height={props.isDesktopButton ? 75 : 100} width={props.isDesktopButton ? 75 : 100}/>
            <p className="w-25">{props.text}</p>
        </button>
    )
}