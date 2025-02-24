import Avatar from "./avatar";
import Description from "./description";

function App() {
  return (
    <div className="card">
      <Avatar
        name="fabrício"
        image="https://avatars.githubusercontent.com/u/69281395?v=4"
      ></Avatar>
      <Description></Description>
    </div>
  );
}

export default App;
