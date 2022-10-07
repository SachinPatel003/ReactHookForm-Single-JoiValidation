import { Box, Container, Paper } from "@mui/material";
import MyFormContainer from "./Components/MyForm/MyFormContainer";

function App() {
  return (
    <>
      <Container component={Box} p={5}>
        <Paper component={Box} p={9}>
          <MyFormContainer />
        </Paper>
      </Container>
    </>
  );
}

export default App;
