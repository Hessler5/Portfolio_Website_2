"use client"

import Window from "@/components/elements/window"
import { useState } from "react"
import PopupWindow from "@/components/elements/popupWindow"
import ImageButton from "@/components/elements/imageButton"
import ComponentContainer from "@/components/elements/componentContainer"
import TextBox from "@/components/elements/textBox"
import ImageGallery from "@/components/elements/imageGallery"

const SEWING = [
    {
        title: "Sewing Class",
        description: "At my previous job I taught several sewing classes on how to 'darn' or mend holes in socks.",
        imageSources: [
            {imageSrc: "https://i.imgur.com/ywJftIY.jpeg", imageAlt: "Image of sewing class"},
            {imageSrc: "https://i.imgur.com/1iyTjXJ.jpeg", imageAlt: "Image of socks repaired in the class"},
            {imageSrc: "https://i.imgur.com/3AOWhDU.jpeg", imageAlt: "Image of socks repaired in the class"},
        ]
    },
    {
        title: "Scrap Denim Pants",
        description: "Here is a pair of jeans I created from excess scrap left over from other projects.",
        imageSources: [
            {imageSrc: "https://i.imgur.com/RaxxepL.jpeg", imageAlt: "Denim pants made from scraps"},
            {imageSrc: "https://i.imgur.com/acWEhvj.jpeg", imageAlt: "Pants pattern being laid out"},
            {imageSrc: "https://i.imgur.com/kmN2fDg.jpeg", imageAlt: "Scraps used to make pants"},
        ]
    },
    {
        title: "Sock Pillows",
        description: "Using excess sample socks at my previous job I fashioned pillows by cutting up and then re-sewing them together.",
        imageSources: [
            {imageSrc: "https://i.imgur.com/8myJ5w8.jpeg", imageAlt: "Image of pillows made from socks"},
            {imageSrc: "https://i.imgur.com/mzwGTed.jpeg", imageAlt: "Image of pillows made from socks"},
            {imageSrc: "https://i.imgur.com/HnpNlVY.jpeg", imageAlt: "Image of pillows made from socks"},
        ]
    }
]

export default function Sewing() {
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
    const imageButtons = SEWING.map((projects, index) => {
        return (
            <ImageButton 
                key={projects.title}
                text={projects.title}
                imageLink={projects.imageSources[0].imageSrc} 
                imageAltText={projects.imageSources[0].imageAlt}
                onClick={() => setSelectedIndex(index)}
            />
        )
    })
    const content = <ComponentContainer components={imageButtons}/>

    let popupContent = <></>
    if(typeof selectedIndex === "number") {
        popupContent = (
            <div>
                <ImageGallery imagesSources={SEWING[selectedIndex].imageSources}/>
                <TextBox text={SEWING[selectedIndex].description}/>
            </div>
        )
    }
    return (
        <>
            <Window title="Sewing" id="Sewing">{content}</Window>
            <PopupWindow show={typeof selectedIndex === "number"} title={typeof selectedIndex === "number" && SEWING[selectedIndex].title || ''} onClose={() => setSelectedIndex(null)}>
                {popupContent}
            </PopupWindow>
        </>
    )
}