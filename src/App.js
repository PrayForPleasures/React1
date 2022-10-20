import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";

const App = () => {
  return (
    <div className="App">
      <Message name="Dmitriy" age="32" />
      <MessageList />
      <Form />
    </div>
  );
};

export default App;
