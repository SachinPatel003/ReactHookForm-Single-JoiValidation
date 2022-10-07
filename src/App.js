import { Box, Container, Paper } from "@mui/material";
import MyFormContainer from "./Components/MyForm/MyFormContainer";

function App() {
  return (
    <>
      <Container sx={{display:"flex" , justifyContent:"center"}} component={Box} p={5}>
        <Paper sx={{width:700}} component={Box} p={9}>
          <MyFormContainer />
        </Paper>
      </Container>
    </>
  );
}

export default App;
