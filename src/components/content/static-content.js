import React from 'react';

class StaticContent extends React.Component{

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
        return(
            <div>
                Will write about Us.....
            </div>
        )
    }
}

export default StaticContent;