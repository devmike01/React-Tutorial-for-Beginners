import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import PlayButton from "./components/PlayButton";

function App() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {isAlertVisible && (
        <Alert
          children="Hello alert"
          onDismiss={() => setAlertVisible(false)}
        />
      )}
      <PlayButton
        buttonName="Cancel"
        color="warning"
        onClick={() => {
          setAlertVisible(true);
        }}
      />
    </div>
  );
}

export default App;
