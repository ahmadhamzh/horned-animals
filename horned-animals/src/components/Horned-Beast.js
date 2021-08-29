import React from 'react'

class Hornedbeast extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt='horned beast img' />
                <p>{this.props.description}</p>

            </div>
        )
    }
}

export default Hornedbeast;