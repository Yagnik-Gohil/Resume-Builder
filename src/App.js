import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

function App() {
  return (
    <Container fluid className="bg-white p-0">
      
      <Navigation></Navigation>
      <Resume></Resume>
      <Container fluid  className="border-top mt-5 text-center bg-light text-dark py-3">
        <p className="m-0">Resume Builder</p>
      </Container>

    </Container>
  );
}

export default App;
