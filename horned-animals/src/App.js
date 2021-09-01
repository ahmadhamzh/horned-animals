import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import SelectedBeast from './components/SelectedBeast';
import cardData from './assets/data.json';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state={
      show : false,
      title: '',
      selctedImg : {}     
    }
  }

  
  takeData = (title) =>{

    // let filteredData = cardData.find(elem => {
      
    //   return (elem.title == title)
      
    // })
    // ---------------------------------------

    let filteredData = cardData.filter(elem => {
      
      return (elem.title == title)
      
    })
    console.log(filteredData);
    // ------------------------------------
    this.setState({
      selctedImg: filteredData[0],
      title: title,

    })
  }
  handleClose = () => {
    
    this.setState ({
      show: !this.state.show,
      
    })
    // alert('from handelclose')
  }
  render (){
    
    return (
      <div>
        <Header />
        <SelectedBeast 
        cardsBeasts = {cardData}
        show = {this.state.show}
        selctedImg ={this.state.selctedImg}
        handleClose = {this.handleClose} />
        <Main 
        takeData = {this.takeData}
        cardsBeasts = {cardData}
        handleClose = {this.handleClose} />
        <Footer />
      </div>
    )
  }
}

export default App;
