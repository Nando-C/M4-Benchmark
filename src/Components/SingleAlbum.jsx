import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SingleAlbum extends Component {
    state = {  }

    // componentDidMount
    render() { 
        return (  
            <>
            {/* {console.log(this.props.album)} */}
            <Col className='px-2 mb-4'>
                <Card >
                    <Link to='/Album'>
                        <Card.Img variant="top" src={this.props.album.album.cover_medium} />
                    </Link>
                    {/* <i class="fab fa-spotify"></i> */}
                    <Card.Body className='text-center p-3'>
                        <Card.Title>{this.props.album.album.title}</Card.Title>
                        <Card.Text>
                        {this.props.album.artist.name}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            </>
                
        );
    }
}
 
export default SingleAlbum;