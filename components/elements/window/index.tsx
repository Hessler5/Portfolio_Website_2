interface WindowProps {
    title: string;
    children: React.ReactElement;
    id?: string;
}

export default function Window(props: WindowProps) {
    return (
        <div id={props.id} className="border-b-2 border-b-black border-r-2 border-r-black border-t-2 border-t-white border-l-2 border-l-white w-full">
            <div className="font-W95FA bg-[#000080] text-white px-1">{props.title}</div>
            <div className="font-W95FA bg-[#C0C0C0] px-1 pt-4 pb-1">{props.children}</div>
        </div>
    )
}