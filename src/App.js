import Footer from './components/footer/Footer';
import GlobalStyle from './GlobalStyle';
import Router from './routes/Router';
import { Container } from './style';

function App() {
  return (
    <Container>
      
      <GlobalStyle />
      <Router />
      <Footer />
    </Container>
  )
}

export default App;
