import TextBox from "@/components/elements/textBox"
import { useState, useEffect } from "react"
import RadioButton from "@/components/elements/radioButton"

export interface SkillType {
    name: string,
    subSkills?: Array<subSkillType>
}

interface subSkillType {
    name: string,
    description: string,
}

interface SkillProps {
    skill: SkillType
}

export default function Skill(props: SkillProps) {
    const [subSkillIndex, setSubSkillIndex] = useState(0)

    return (
        <div className="m-2 ">
            <div className="w-50 flex flex-wrap">
                {
                    props.skill.subSkills?.map((subSkill, index) => {
                        const isSelected = index === subSkillIndex
                        return (
                            <div className="mb-2 flex flex-wrap w-25 gap-4" key={subSkill.name}>
                                <RadioButton 
                                    text={subSkill.name} 
                                    isSelected={isSelected} 
                                    onClick={() => setSubSkillIndex(index)}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <TextBox text={props.skill.subSkills?.[subSkillIndex].description || ''}/>
        </div>
    )
}