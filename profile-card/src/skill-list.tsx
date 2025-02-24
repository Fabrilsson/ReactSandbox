import Skill from "./skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="React" bgColor="blue" emoji=""></Skill>
      <Skill name="C#" bgColor="purple" emoji=""></Skill>
      <Skill name="Rust" bgColor="orange" emoji=""></Skill>
      <Skill name="Git" bgColor="red" emoji=""></Skill>
      <Skill name="C++" bgColor="teal" emoji=""></Skill>
      <Skill name="SQL" bgColor="yellow" emoji=""></Skill>
    </div>
  );
}

export default SkillList;
