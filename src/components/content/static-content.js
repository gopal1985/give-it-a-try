import React from 'react';

class StaticContent extends React.Component{

    // Inline Swith statement
    render(){
        return (
            <div className="content-body">
                <div className="container">
                    {(() => {
                        switch(this.props.view){
                            case 'ABOUT':
                                return(
                                    <div>Write a nice paragraph on something about us.....</div>
                                );
                            case 'SERVICES':
                                return(
                                    <div>Write detailed information about services we provide.....</div>
                                );
                            default:
                                return(
                                    <div>Display a static page with our headquarters info and a Contact Us page...........</div>
                                );
                        }
                    })()}            
                </div>
            </div>
        )
    }
}

export default StaticContent;