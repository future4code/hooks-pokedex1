import Footer from './components/footer/Footer';
import { GlobalState } from './global/GlobalState';
import GlobalStyle from './GlobalStyle';
import Router from './routes/Router';
import { Container } from './style';

function App() {
  return (
    <GlobalState>
      <Container>
        <GlobalStyle />
        <Router />
        <Footer />
      </Container>
    </GlobalState>
  )
}

export default App;
