"use client"

import Window from "@/components/elements/window";
import ComponentContainer from "@/components/elements/componentContainer";
import ImageButton from "@/components/elements/imageButton";
import PopupWindow from "@/components/elements/popupWindow";
import { useState } from "react";
import TextBox from "@/components/elements/textBox";

interface Project {
    title: string;
    iconImageSrc: string;
    iconImageAlt: string;
    videoSrc: string;
    description: string;
}

const PROJECTS: Array<Project> = [
    {
        title: "Pixel Harvester",
        iconImageSrc: "https://i.imgur.com/Y2u1Jta.png",
        iconImageAlt: "An image of the Pixel Harvester website",
        videoSrc: "https://www.youtube.com/embed/ZmsI4uBUQCM?si=Hiss5as6Ns8XRR3y",
        description: "Pixel Harvester was my final project for the Flatiron School. This is a full stack website that allows users to scrape images from an inputted URL. The method of scrapping is not the traditional way of looping through an HTML tree or CSS selectors. Pixel Harvester uses image processing to take a screenshot of the webpage and then crop out sub images using that initial screen shot. To aid in the image processing I inject CSS rules into the page before selenium takes the screenshot. You can read more about this process in my blog. Once the images are processed they are sent to the front end and then deleted from the back end. The front end of Pixel Harvester allows you to sort through all of the returned images and select/rename the ones you want to download. When the user is ready they can simply hit download and they get a zip file with all of the images saved to their computer. This website also features full account creation, login, and authentication for when the page is refreshed. Users are limited to 3 scrapes a day and a user that is not logged in can get one free trial scrape.",
    },
     {
        title: "Toy Tanks",
        iconImageSrc: "https://i.imgur.com/U22oI6M.png",
        iconImageAlt: "An image of the Toy Tanks game",
        videoSrc: "https://www.youtube.com/embed/Jp2jYFpsOus?si=b0gaIMv3v6cZePyK",
        description: "Toy Tanks was my solo phase 3 project for Flatiron School. It is a top down tank shooter inspired by the Wii Play Tanks game I played as a kid. Toy Tanks uses the Pygame library which has a built in UI library and some basic built in functionality for sprites, collision, ect.. I created all of the art for the game using Krita. The game features 5 complete levels with varying enemy AI throughout each. There are two modes, one regular mode where you can take damage and get a game over and another invincibility mode. The levels also feature health pickups, bullet ricochet, and friendly fire. I am particularly proud of the enemies on level 5 which are quite tricky to beat. They shoot an array of invisible tracer bullets around themselves and when one of those bullets hits the player they shoot an actual bullet at that angle. This allows the enemy to make very clever bank shots and 'see' the play around corners. The game can be downloaded and played at my GitHub link.",
    },
     {
        title: "Battle Memes",
        iconImageSrc: "https://i.imgur.com/R8FDsFB.png",
        iconImageAlt: "An image of the Battle Memes Website",
        videoSrc: "https://www.youtube.com/embed/kgEbN4bDMQ8?si=TtDh9Z05vQEy7fam",
        description: "Battle Memes was the phase 4 full-stack group project for the Flatiron School. Our team set out to create a website that would act as a place where users could upload images to get them captioned by other users. The uploader could then pick their favorite caption and have it displayed on the website. All data fetched from the API is specific to the logged in user and all passwords are encrypted on the server. The back end API is built using Flask and has three database models.",
    },
     {
        title: "CSS Color Selector",
        iconImageSrc: "https://i.imgur.com/LG1yebJ.png",
        iconImageAlt: "An image of the CSS Color Selector website",
        videoSrc: "https://www.youtube.com/embed/E-LBa37NEdE?si=Nu69njFMNndpcrfg",
        description: "CSS Color Selector is a group project created for phase 2 at the Flatiron School. The purpose of the website is to allow users to create and save custom css color palettes for their websites. Whilst creating the color palette the user has the ability to see website components updating in real time with the pallet. The pallet component allows you to input specific rgb or hex values as well as use the color selector to select colors. Once a pallet is created it can be saved and then looked at or edited at a later date. Our team used a db-json for the server of this project.",
    },
     {
        title: "Exercise Generator",
        iconImageSrc: "https://i.imgur.com/OUwi9g0.png",
        iconImageAlt: "An image of the Exercise Generator website",
        videoSrc: "https://www.youtube.com/embed/ChsRyPm4kZU?si=onFzCquITPy1IriU",
        description: "Exercise Generator was a two person group project completed for the Flatiron School. This was the first project we completed and it consists of a front end created with vanilla Javascript that hooks up to a public exercise API. The idea for the project came when both me and my group partner were complaining about our stale gym routines so we set out to create a website that would help generate new routines. The website allows you to filter through the results from the exercise API and it also offers pagination if there are more than 10 results. Once you find exercises you like you can save them to an exercise plan at the bottom of the page.",
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState< Project | null>(null)
    const icons =PROJECTS.map((project) => {
        return <ImageButton key={project.title} imageAltText={project.iconImageAlt} imageLink={project.iconImageSrc} text={project.title} onClick={() => setSelectedProject(project)}/>
    })
    const content = <ComponentContainer components={icons}/>

    let popupContent = <></>
    if (selectedProject) {
        popupContent=(
            <div className="flex flex-wrap gap-2 justify-center">
                <iframe width="560" height="315" src={selectedProject.videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <TextBox text={selectedProject.description}/>
            </div>
        )
    }
    return (
        <>
            <Window title="Projects" id="Projects">{content}</Window>
            <PopupWindow show={!!selectedProject} title={selectedProject?.title || ''} onClose={() => setSelectedProject(null)}>
                {popupContent}
            </PopupWindow>
        </>)
}