import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: purple[500],
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Message name="Dmitriy" age="32" />
        <MessageList />
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default App;
