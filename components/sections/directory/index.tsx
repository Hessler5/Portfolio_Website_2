"use client"

import ImageButton from "@/components/elements/imageButton";

const DIRECTORY = [
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/55/Windows_95_%3F.png",
        imageAlt: "about icon",
        text: 'About',
        link: 'About',
    },
     {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Windows_95_PROPERTIES.png",
        imageAlt: "skills icon",
        text: 'Skills',
        link: 'Skills',
    },
     {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Windows_95_Move_document.png",
        imageAlt: "work icon",
        text: 'Work',
        link: 'Work',
    },
     {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Windows_95_NOTEPAD.png",
        imageAlt: "projects icon",
        text: 'Projects',
        link: 'Projects',
    },
     {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Windows_95_%21.png",
        imageAlt: "sewing icon",
        text: 'Sewing',
        link: 'Sewing',
    },
]

export default function Directory() {
    const content = DIRECTORY.map((location) => {
        return (
            <a key={location.text} href={`#${location.link}`}>
                <ImageButton imageLink={location.imageSrc} imageAltText={location.imageAlt} text={location.text} onClick={()=> {}} isDesktopButton/>
            </a>
        )
    })

    return (
        <div className="flex flex-wrap w-full gap-4">
            {content}
        </div>
    )
}