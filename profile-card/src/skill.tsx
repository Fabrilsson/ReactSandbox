interface SkillProps {
  name: string;
  emoji: string;
  bgColor: string;
}

function Skill(props: SkillProps) {
  return (
    <div className="skill" style={{ background: props.bgColor }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default Skill;
