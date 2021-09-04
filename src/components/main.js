import React from 'react';
import Hornedbeast from './Horned-Beast';
import Search from './searchForm';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedImg: this.props.cardsBeasts,
            
        }
    }
    filteredImg = (cornValue) => {
        
        if (cornValue === 'all') {
            this.setState({
                displayedImg: this.props.cardsBeasts

            });
        } else {
            let newArrOfBeast = this.props.cardsBeasts.filter(element => { return (JSON.stringify(element.horns) === cornValue) })
            this.setState({
                displayedImg: newArrOfBeast,

            })
            console.log(newArrOfBeast);
        }
    }

    
    
    
    render() {
        console.log('numofvotes in main.js= '+ this.state.numOfVotes);

        let allCardArr = this.state.displayedImg.map((element) => {
            return (<Hornedbeast
                takeData={this.props.takeData}
                title={element.title}
                imgUrl={element.image_url}
                description={element.description}
                handleClose={this.props.handleClose}
                numOfVotes ={this.props.numOfVotes} 
            />
            );

        });
        return (
            <div>
                <Search
                    filteredImg={this.filteredImg}
                />
                {allCardArr}
            </div>
        );
    };


};
export default Main;