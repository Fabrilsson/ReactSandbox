import SkillEntity from "../types/skill"

interface SkillProps {
  skill: SkillEntity
}

function Skill(props: SkillProps) {
  return (
    <div className="skill" style={{ background: props.skill.bgColor }}>
      <span>{props.skill.name}</span>
      <span>{props.skill.emoji}</span>
    </div>
  );
}

export default Skill;
