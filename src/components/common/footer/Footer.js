import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, txt){
    e.preventDefault();
    console.log("New view inside -- " + txt);
    this.props.onViewChange(txt);
  }

  render(){
    return (
      <div className="footer">
        <div className="container">
          <a href='/' onClick={(e) => this.handleClick(e, 'ABOUT')}>About Us</a>
          <a href='/' onClick={(e) => this.handleClick(e, 'SERVICES')}>Our Services</a>
          <a href='/' onClick={(e) => this.handleClick(e, 'CONTACT')}>Contact Us</a>
        </div>
      </div>
    );
  }
}

export default Footer;