import React from 'react';
import {connect} from 'react-redux';
import Navbar from './CommonComponent/Navbar/navbar';
import Footer from './CommonComponent/Footer/footer';



class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (
      <div className="container">

        <Navbar/>

        {this.props.children}


        <Footer />

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
