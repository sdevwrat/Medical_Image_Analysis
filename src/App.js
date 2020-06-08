import React , {Component} from 'react';
import Cards from './components/Cards';
import Description from './components/Description';
import Footer from './components/Footer';
import './CSS/App.css';
import logo from './Images/logo2.png';

class App extends Component{
  render(){
  return (
    <div className="App">
      <a href='https://medinform.tk/' className="pointer"><img className="logo" src={logo} alt='logo'/></a>
      <Description />
      <Cards />
      <Footer />
    </div>
  );
}
}

export default App;
