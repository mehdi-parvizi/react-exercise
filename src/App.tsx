import { useState } from "react";
import Alert from "./components/Training/Alert";
import MyButton from "./components/Training/ButtonComponent";
import ListGroup from "./components/Training/ListGroup";
// import ImageTraining from "./components/Training/ImageTraining";
import Greeting from "./components/Training/Greeting";
import Like from "./components/Training/likeButton";
function App() {
  const [currentState, updateState] = useState(false);
  const handleSelectedItemTwo = (item: string) => console.log(item);
  const name = "Bo";
  const items = [`Newyork`, `Tokyo`, `Milano`, `Roma`];
  return (
    <div className="App">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItemTwo={handleSelectedItemTwo}
      />
      <Greeting name={name} />
      {currentState && (
        <Alert onClose={() => updateState(false)}>
          This Is My Custom Alert
        </Alert>
      )}
      <MyButton onClick={() => updateState(true)}>Show Alert</MyButton>
      <br />
      <Like onClick={() => console.log(`clicked`)} />
    </div>
  );
}
export default App;
