"use client"

import Window from "@/components/elements/window";
import Image from "next/image";
import TextBox from "@/components/elements/textBox";
import Button from "@/components/elements/button";
import Link from "next/link";
export default function About () {
    const body = (
        <div className="flex gap-2 justify-center lg:flex-nowrap flex-wrap mb-2">
            <Image 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEOy-eZymoZig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710972096332?e=1784764800&v=beta&t=E3WUBUQ45fmB8bVnHuYnRYRidUvRKMgN4NuKzBlF58w"
                alt="profile image"
                width={200}
                height={200}
            />
            <TextBox text={"I am a professional full-stack developer of three years. I graduated from the Flatiron School software engineering bootcamp in February of 2024. Through work and school I have developed a diverse background of programming skills from simple projects like a small video game to working professionally on a large ecommerce website. I have a passion for writing simple readable code that can be easily maintained. Prior to working in software I worked in corporate retail in buyer, planner, and merchandising roles. Through these roles I have lots of experience working cross functionally and interfacing with non-technical team members. I am always open to hearing about new opportunities and roles in software. If you have any questions for me please reach out."}/>
            <div>
                <p className="mb-1">Links...</p>
                <div className="flex gap-2">
                    <Link href="https://github.com/Hessler5" target="blank">
                        <Button name={"GitHub"} onClick={() => {}}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ethan-hessler" target="blank">
                        <Button name={"LinkedIn"} onClick={() => {}}/>
                    </Link>
                </div>
            </div>
        </div>
    )


 return <Window title="About" id="About">{body}</Window>
}