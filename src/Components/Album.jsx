import { Component } from 'react'
import { Col } from 'react-bootstrap'

class Album extends Component {
    state = {  }
    render() { 
        return (  
            <>
             <Col id='content' md={10}>
                <h1>Album Page</h1>
            </Col>
            </>
        );
    }
}
 
export default Album;