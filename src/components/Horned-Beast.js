import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


let votesNumArr = []

class Hornedbeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numOfVotes: 0,
            
            
        }
    }
    votes = () => {
        votesNumArr.push('a')
    }

     
    

    gotVoted = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        });
        this.props.handleClose();
        this.props.takeData(this.props.title)
    };

    render() {
        return (
            <div style={{display : 'inline-block' }} >

                <Card style={{ margin : '15px', width: '18rem', display : 'inline-block' }} >
                    <Card.Img variant="top" style={{height : '20rem' }}  onClick={this.gotVoted} src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                         {this.props.description}   
                        </Card.Text>     
                        <Card.Text>
                          ❤️ : {this.state.numOfVotes}
                        </Card.Text>     
                        {/* <Button variant="primary">Go somewhere</Button>                    */}
                    </Card.Body>
                </Card>

            </div>
        )
    }
}


export default Hornedbeast;