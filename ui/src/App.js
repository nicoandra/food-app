// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
<Container>
  <Row as="header">
    <Col as="nav" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Navbar>
        <Nav className="mr-auto">
          <Nav.Link href="/"><Button>Home</Button></Nav.Link>
          <Nav.Link href="/users/register"><Button>Register</Button></Nav.Link>
          <Nav.Link href="/terms"><Button>Terms and conditions</Button></Nav.Link>
        </Nav>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </Navbar>
    </Col>
  </Row>
  <Row as="main">
    <Col>
        <Route exact path="/" render={() => (<div>Home Page</div>)} />
        <Route exact path="/users/register" render={() => (<div>Register here</div>)} />
        <Route exact path="/terms" render={() => (<div>Terms and conditions</div>)} />
    </Col>
  </Row>
</Container>      


    </div>
  );
}

export default App;
