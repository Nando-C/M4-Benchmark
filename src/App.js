// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Artist from './Components/Artist'
import Album from './Components/Album'

function App() {
  return (
    // <div className="App">
      <Router>
        <Row>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/Artist' component={Artist} />
          <Route path='/Album' component={Album} />
        </Row>
        <Footer />
      </Router>
     
    // </div>
  );
}

export default App;
