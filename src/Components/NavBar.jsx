import { Component } from 'react'
import { Col } from 'react-bootstrap'

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <Col id='menu' md={2}>
                <h1>This is my NavBar</h1>
            </Col>
            </>
        );
    }
}
 
export default NavBar;