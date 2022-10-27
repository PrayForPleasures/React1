import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Message name="Dmitriy" age="32" />
        <MessageList />
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default App;
