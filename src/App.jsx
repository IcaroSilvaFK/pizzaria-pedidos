import { Header } from "./components/Header";
import { Card } from "./components/Card";

import { Container, Box } from "./styles/styles.home";

function App() {
  return (
    <Container>
      <Header />
      <Box>
        <Card />
      </Box>
    </Container>
  );
}

export default App;
