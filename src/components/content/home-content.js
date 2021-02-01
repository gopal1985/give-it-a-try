import React from 'react';
import seller from '../../images/seller.png'
import buyer from '../../images/buyer.png'

class HomeContent extends React.Component {

    constructor(props){
        super(props);
        this.handleImgClick = this.handleImgClick.bind(this);
    }
    
    handleImgClick(e, imgTxt){
        e.preventDefault();
        console.log("New view inside -- " + imgTxt);
        this.props.onViewChange(imgTxt);
    }

    render(){
        const imgSrc = (this.props.view === "BUYER") ? buyer : seller;
        const imgTxt = (this.props.view === "BUYER") ? 'BUYER' : 'SELLER';
        
        return(
            <div className="content-body">
                <div className="container"><br/><br/></div>
                <div className="container">
                
                    <div className="home-first-column">
                        <a href="/" onClick={(e) => this.handleImgClick(e, imgTxt)}><img src={imgSrc} width="90%" height="70%" alt=""/></a>
                        <h2 className="img-text">{imgTxt}</h2>
                    </div>
                    <div className="home-second-column">
                        {this.props.view === "" ? (    
                            <div>
                                <a href="/" onClick={(e) => this.handleImgClick(e, 'BUYER')}><img src={buyer} width="90%" height="70%" alt=""/></a>
                                <h2 className="img-text">BUYER</h2>
                            </div>
                        ) : (
                            <div><input name="shop-name" type="text" placeholder="A name to identify you ...." />
                            <input name="contact-no" type="text" placeholder="A number to contact you ...." />
                            <input name="shop-name" type="text" placeholder="House no./name to sit and relax ...." />
                            <input name="shop-name" type="text" placeholder="Area where you are famous ...." />
                            <br/><br/>
                            <input type="button" className="button" value="Register"/>
                            <p>Already registered ? <a href="/register">Sign in</a></p></div>
                        )}
					</div>
                </div>
            </div>
        );
    }
}

export default HomeContent;
