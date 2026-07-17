import { useState } from "react";
import { cn } from "@/utils/cn";

interface TabsProps {
    content: Array<TabContent>
}

export interface TabContent {
    title: string;
    body: React.ReactElement;
}

export default function Tabs(props: TabsProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    return (
        <div>
            <div className="flex translate-y-0.5">
                {props.content.map((content, index) => {
                    return (
                        <div key={content.title} className="flex flex-wrap justify-center">
                        <button 
                            className={cn(
                                "cursor-pointer border-t-2 border-t-white px-2 border-r-2 border-r-black h-full",
                                index === activeTabIndex && "border-l-2 border-l-white",
                                index !== activeTabIndex && "border-l border-l-white"
                            )}
                            onClick={() => setActiveTabIndex(index)}
                        >
                            {content.title}
                        </button>
                        <div className={cn(
                            "x-10 w-full h-1 -translate-y-1",
                            index === activeTabIndex && "bg-[#C0C0C0] w-[calc(100%-4px)]",
                            index !== activeTabIndex && "bg-white]",
                        )}/>
                        </div>
                    )
                })}
            </div>
            <div className="border-b-2 border-b-black border-r-2 border-r-black border-t-2 border-t-white border-l-2 border-l-white">
                {props.content[activeTabIndex].body}
            </div>
        </div>
    )
}