"use client"

import Window from "@/components/elements/window";
import Tabs, {TabContent} from "@/components/elements/tabs";
import Skill, { SkillType } from "./components/skill";

const SKILLS: Array<SkillType> = [
    {
        name: "Languages",
        subSkills: [
            {
                name: "TypeScript",
                description: "TypeScript is the primary language I use on personal and professional projects. Since it’s  the native language of Next.js I use it when building front and back ends for websites. I have also used TypeScript to build web apis and found it helpful to reduce context switching on fullstack projects. I really like the type safety that comes from the static types and how the code is self documenting."
            },
            {
                name: "Javascript",
                description: "Although I prefer TypeScript for development due to its type safety I am also proficient in vanilla JavaScript. I used it extensively during my bootcamp and even built a website in vanilla JavaScript with no framework, just “document.getElementById”."
            },
            {
                name: "SQL",
                description: "I have a lot of experience with relational databases and communicating to those databases through SQL. When working on projects I do prefer to use ORMs like Prisma to interface with the database but I still have experience running scripts, getting ad hoc data requests, and executing large db actions with SQL."
            },
            {
                name: "Python",
                description: "During bootcamp we worked extensively with Python. We used it to build our website back ends with the Flask framework. I also built a small video game using the Pygame library as one of my boot camp projects."
            },
        ]
    },
    {
        name: "Libraries",
        subSkills: [
            {
                name: "Next.js",
                description: "Professionally I have worked on a production website built in Next.js. I have familiarity with all major Next.js features such as server actions, file-system routing, server vs client components etc. I also have familiarity with some of the tradeoffs of Next like a slower developer experience. This website is also built in Next."
            },
            {
                name: "React",
                description: "React was the focus of my bootcamps curriculum so I have lots of experience building websites in React. I even built several websites in vanilla react using libraries like React Router to bridge the gap between React and a web framework. I am also proficient in frameworks built on top of react like Next.js."
            },
            {
                name: "Prisma",
                description: "Prisma is my preferred ORM when dealing with relational databases. I have lots of professional experience building back end crud operations using Prisma. I am familiar with many of the more advanced features of prisma like transactions and TypedSQL."
            },
            {
                name: "Apollo",
                description: "I have built a production deployed Apollo GraphQL api. This api is type safe using Pothos and Codegen to generate types. It supports multiple authentication types and is used across several external and internal services."
            },
            {
                name: "TanStack",
                description: "TanStack is my favorite way to control data fetching client side. Professionally I have built a production deployed custom React hook to wrap and standardize TanStack operations across a codebase. I have also built caching and cache invalidation global functions so that all developers perform these actions in a standardized way."
            },
        ]
    },
    {
        name: "SAS Products",
        subSkills: [
            {
                name: "AWS",
                description: "I have experience in AWS deploying architecture and trouble shooting issues. I have used many AWS services including CloudWatch, Secrets Manager, S3, CloudFormation, and ECS."
            },
            {
                name: "Fastly",
                description: "I have professional experience using Fastly as an edge caching service. I know how to troubleshoot common issues caused by caching and was the point person on my team for dealing with caching related issues."
            },
            {
                name: "Sentry",
                description: "Sentry.io is the error monitoring system I have used in production environments. I have familiarity setting up sentry alerts in code as well as trouble shooting alerts via the Sentry web interface."
            },
            {
                name: "GitHub",
                description: "With GitHub I have experience working with mono and polyrepos. I have worked with and created GitHub Actions to deploy and run tests as well as deploy code to production."
            },
            {
                name: "Twillio",
                description: "I have experience using Twilio to programmatically send SMS communications to users via short code and standard phone numbers. I have set up server side automations that scrub incoming messages for keywords like “STOP” and “START”. I have also used AI to generate message content sent to users via Twilio."
            },
            {
                name: "Linear",
                description: "Linear is my preferred project management tool. I have experience creating, editing, and grooming projects and tickets with Linear."
            },
            {
                name: "Figma",
                description: "I have used figma to create and comment on design mocks and proposals. I have also used Figma’s AI tools to assist in the design process."
            },
            {
                name: "Airtable",
                description: "I have experience working with the no code database solution Airtable. I have worked with Airtable automations, webhooks, and the JavaScript sdk. I have used the JavaScript sdk to migrate data off of Airtable to in house database solutions."
            },
        ]
    },
    {
        name: "Software",
        subSkills: [
            {
                name: "Postgres",
                description: "Postgres is the relational database I have the most familiarity with. I have created complex self referencing and many to many relationships in Postgres when necessary. I also have set up indexes on frequently queried fields. I have experience spinning postgres databases up in containerized environments."
            },
            {
                name: "Docker",
                description: "I have experience containerizing web services and running them in Docker. I have containerized databases, GraphQL apis, and more. I also have experience using Docker Compose to orchestrate commands for multiple containers at once."
            },
            {
                name: "Claude",
                description: "I have used the Claude Code harness to responsibly develop and prototype ideas with AI."
            },
        ]
    },
]

export default function Skills() {

    const tabsContent: Array<TabContent> = SKILLS.map((skill) => {
        return (
            {
                title: skill.name,
                body: <Skill skill={skill} key={skill.name}/>
            }
        )
    })


    const body = <Tabs content={tabsContent}/>
    return (
        <Window title={"Skills"} id="Skills">
            {body}
        </Window>
    )
}