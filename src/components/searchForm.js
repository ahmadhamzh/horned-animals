import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class Search extends React.Component {
    constructor(props){
        super (props)
        this.state={
          numOfCorn : '',     
        }
    }

    getNumOfCorn = (event) => {
        console.log(this.state.numOfCorn)    
        this.setState ({
            
            numOfCorn: event.target.value
            
          })
    }

    handelSubmit= (e) => {
        e.preventDefault();
        this.props.filteredImg(this.state.numOfCorn)
    }

    render() {
        console.log(this.state.numOfCorn)    


        return (
            <div style={{width : '30%' 
            
            }}>
                <Form.Select onChange={this.getNumOfCorn} size="lg">
                    <option value="all">all of them</option>
                    <option value= '1'>one corn</option>
                    <option value="2">tow corn</option>
                    <option value="3">three corn</option>
                    <option value="100">hundred corn</option>
                </Form.Select>
                <Button onClick= {this.handelSubmit}  type="submit">
                    Submit
                </Button>
                {/* <br />
                <Form.Select>
                    <option>Default select</option>
                </Form.Select>
                <br />
                <Form.Select size="sm">
                    <option>Small select</option>
                </Form.Select> */}
            </div>
        )
    }
};

export default Search;