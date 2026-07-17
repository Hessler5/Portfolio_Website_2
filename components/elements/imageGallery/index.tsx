import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
    imagesSources: Array<{imageSrc: string, imageAlt: string}>
}

export default function ImageGallery(props: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const galleryContent: Array<React.ReactElement> = []
    props.imagesSources.forEach((image, index) => {
        galleryContent.push(
            <Image key={image.imageSrc} alt={image.imageAlt} src={image.imageSrc} onClick={()=>setSelectedIndex(index)} height={50} width={50}/>
        )
    })

    return (
        <div className="w-full flex justify-center border-b-2 border-b-white border-r-2 border-r-white border-t-2 border-t-black border-l-2 border-l-black bg-[#999DA0]">
            <div className="flex flex-wrap w-50 mt-2">
                <Image alt={props.imagesSources[selectedIndex].imageAlt} src={props.imagesSources[selectedIndex].imageSrc} height={200} width={200}/>
                <div className="flex flex-wrap w-full justify-center gap-2 my-2">
                    {galleryContent}
                </div>
            </div>
        </div>
    )
}