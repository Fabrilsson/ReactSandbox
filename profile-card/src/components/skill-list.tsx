import Skill from "./skill";

import SkillEntity from "../types/skill";

const skills: SkillEntity[] = [
  {
    name: "React",
    level: "begginer",
    emoji: "👶",
    bgColor: "blue"
  },
  {
    name: "C#",
    level: "advanced",
    emoji: "💪",
    bgColor: "purple"
  },
  {
    name: "Rust",
    level: "begginer",
    emoji: "👶",
    bgColor: "orange"
  },
  {
    name: "Git",
    level: "advanced",
    emoji: "💪",
    bgColor: "red"
  },
  {
    name: "C++",
    level: "intermediate",
    emoji: "👍",
    bgColor: "teal"
  },
  {
    name: "SQL",
    level: "advanced",
    emoji: "💪",
    bgColor: "yellow"
  }
]

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill}></Skill>
      ))}
    </div>
  );
}

export default SkillList;
