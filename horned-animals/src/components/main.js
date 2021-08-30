import React from 'react';
import cardData from '../assets/data.json';
import Hornedbeast from './Horned-Beast';

class Main extends React.Component {
    render() {

        let allCardArr = cardData.map(element => {
            return (<Hornedbeast
            title =  {element.title}
            imgUrl = {element.image_url}
            description = {element.description} 
            />
            )

        });
        return (
            <div>
                {allCardArr}
            </div>
        )
    }
};

export default Main;