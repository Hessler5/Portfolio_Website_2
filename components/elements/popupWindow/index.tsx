import CloseButton from "../closeButton";
import { MouseEvent } from "react";

interface PopupWindowProps {
    title: string;
    children: React.ReactElement
    show: boolean,
    onClose: () => void,
}

export default function PopupWindow(props: PopupWindowProps) {
    function onWrapperClick(e: MouseEvent<HTMLDivElement>) {
        if(e.target === e.currentTarget) {
            props.onClose()
        }
    }

    return (
        <>
            {props.show &&
                <div id={"popup-wrapper"} className="fixed h-full w-screen flex justify-center items-center top-0 left-0" onClick={onWrapperClick}>
                    <div id={"popup-content"} className="h-auto z-10 border-b-2 border-b-black border-r-2 border-r-black border-t-2 border-t-white border-l-2 border-l-white w-full mx-2">
                        <div className="font-W95FA bg-[#000080] text-white px-1 flex w-full justify-between items-center">
                            {props.title}
                            <CloseButton onClose={props.onClose}/>
                        </div>
                        <div className="font-W95FA bg-[#C0C0C0] px-1 pt-4 pb-1">{props.children}</div>
                    </div>
                </div>
            }
        </>
    )
}