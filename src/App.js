import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { Profile } from "./components/Profile";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Chat } from "./components/Chat";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import styles from "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ul className="ul_Main">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats </Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <div className="App">
          <Message name="Dmitriy" age="32" />
          <div className="chat_messages">
            <Routes>
              <Route path="/chats" element={<Chat />}></Route>
              <Route path="/messages" element={<MessageList />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route exact path="/"></Route>
            </Routes>
            <Form />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
