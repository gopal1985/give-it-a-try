import React from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import NavBar from '../../common/navbar/NavBar';
import Footer from '../../common/footer/Footer';
import HomeContent from '../../content/home-content';
import StaticContent from '../../content/static-content';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            view: ""
        };
        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleViewChange(newView){
        console.log("New view -- " + newView);
        this.setState({view: newView});
    }

    getView(contentView){
        switch(contentView){
            case 'SELLER':
                return <HomeContent view={this.state.view} onViewChange={this.handleViewChange}/>;
            case 'BUYER':
                return <HomeContent view={this.state.view} onViewChange={this.handleViewChange}/>;
            case 'ABOUT':
                return <StaticContent view={this.state.view} onViewChange={this.handleViewChange}/>;
            case 'SERVICES':
                return <StaticContent view={this.state.view} onViewChange={this.handleViewChange}/>;
            case 'CONTACT':
                return <StaticContent view={this.state.view} onViewChange={this.handleViewChange}/>;
            default:
                return <HomeContent view={this.state.view} onViewChange={this.handleViewChange}/>;
        }
    }

    render() {

        let contentView = this.getView(this.state.view);

        return (
            <div>
                <Header />
                <NavBar />
                {contentView}     
                <Footer onViewChange={this.handleViewChange}/>
            </div>
        );
    }
};
export default Home;