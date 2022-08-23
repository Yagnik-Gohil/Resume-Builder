import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

function App() {
  return (
    <Container fluid className="bg-light min-vh-100 p-0">
      
      <Navigation></Navigation>
      <Resume></Resume>

    </Container>
  );
}

export default App;
