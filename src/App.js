import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <Container fluid className="bg-white p-0">
      
      <Navigation></Navigation>
      <Resume></Resume>
      <Footer></Footer>

    </Container>
  );
}

export default App;
