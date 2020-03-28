import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state = {lat: null, errMessage: ''};

        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         this.setState({
        //             lat: position.coords.latitude
        //         });
        //     },
        //     (err) => {
        //         this.setState({ 
        //             errMessage: 'Unknown Error Acquiring Position.'
        //          });
        //     }
        // );

    // }


    // Replacement of CONSTRUCTOR FUNCTION
    state = {lat: null};

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                lat: position.coords.latitude
            });
        },

            (err) => {
                this.setState({ 
                    errMessage: 'Unknown Error Acquiring Position.'
                 });
            }
        );
    }


    render() {

        if (this.state.lat && !this.state.errMessage)
            return <SeasonsDisplay lat={this.state.lat} />;

        if (!this.state.lat && this.state.errMessage)
            return <div> Error: {this.state.errMessage} </div>;

        
            return <Spinner message="Please accept location request" />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
