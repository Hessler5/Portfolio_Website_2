"use client"

import Window from "@/components/elements/window";
import Tabs from "@/components/elements/tabs";
import TextBox from "@/components/elements/textBox";

const WORK = [
    {
        title: "Arya",
        description: "My current position is a full-stack developer at Arya.fyi. This is an e-commerce website that allows users to subscribe to a relationship focused subscription box. I have worked across many different domains at Arya from onboarding new users to internal tools used by the customer support team. Below are some of the projects I have worked on.",
        projects: [
            "Enabled OAuth so users could create accounts and log in via social accounts",
            "Created and maintained the Google Tag Manager account",
            "Managed server side tracking and conversion events",
            "Maintained an internal customer service tool that used OpenSearch to query customer data",
            "Worked with programmatic SMS messaging and added a consumer to scrub messages for keywords like “start” and “stop”",
            "Implemented a GraphQL api with Apollo Graphql",
            "Made a modular and customizable onboarding survey flow that could be configured via a cms",
            "Implemented TanStack and build out standardized infrastructure around data fetching a query key invalidation",
            "Onboarded a digital asset manager and built out the infrastructure surrounding it",
            "Built multiple web experiences in the Next.js web app",
            "Developed dozens of UI components for the component library",
            "Helped develop a mobile app in React Native",
        ]
    },
    {
        title: "Retail",
        description: "Prior to working in software I worked in corporate retail. I worked across multiple domains including buying, planning and merchandising. I worked for large organizations like Lord and Taylor and also small startups like Bombas. In these positions I was always the go to for technical support when maintaining systems and building spread sheets. That's what led to my decision to try software development.",
        projects: [
            "Created and updated line plans for seasonal assortments",
            "Merchandise products on the website",
            "Launch a new kids sock size at Bombas socks",
            "Update product data in product lifecycle management tools",
            "Work with marketing team to review promotional material",
            "Meet with internal design team to review seasonal product",
            "Create inventory allocations for stores",
            "Attended market appointments with vendor to view product assortments",
        ]
    },
]

export default function Work() {
    const content = WORK.map((work) => {
        const text = (
            <div>
                <p className="mb-2">{work.description}</p>
                <p>{work.title === 'Retail' ? "Responsibilities" : "Projects"}</p>
                <ul className="list-disc ml-4">
                    {work.projects.map((project) => {
                        return (
                            <li key={project}>{project}</li>
                        )
                    })}
                </ul>
            </div>
        )


        return ({
            title: work.title,
            body: (
                <div className="m-2 mt-4">
                    <TextBox text={text}/>
                </div>),
        })
    })

    const tabs = <Tabs content={content}/>

    return <Window title="Work" id="Work">{tabs}</Window>
}