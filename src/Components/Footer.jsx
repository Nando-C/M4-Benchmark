import { Component } from 'react'
import { Row } from 'react-bootstrap'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Row fixed="bottom">
                <h1>This is my Footer</h1>
            </Row>
            </>
        );
    }
}
 
export default Footer;