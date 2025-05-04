interface AvatarProps {
  image: string;
  name: string;
}

function Avatar(props: AvatarProps) {
  return <img className="avatar" src={props.image} alt={props.name} />;
}

export default Avatar;
