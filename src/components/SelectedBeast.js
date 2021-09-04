import React from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';





class SelectedBeast extends React.Component {
    


    render() {
        console.log(this.props)         
            
            return (

            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selctedImg.title}</Modal.Title>
                    </Modal.Header>
                    <div>

                        <img src={this.props.selctedImg.image_url} className='imgInModel' />
                        <Modal.Body>
                           {this.props.selctedImg.description}
                        </Modal.Body>
                    </div>
                    <Modal.Footer>
                        {/* <Button onClick={() => this.props.handleClose()}>
                            Close
                        </Button>
                        <Button onClick={() => this.props.handleClose()}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }
}

export default SelectedBeast;