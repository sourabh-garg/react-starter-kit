import React from 'react';
import {connect} from 'react-redux';


class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render () {

    let offer = "Free shipping on all order.";



    return (
      <div className="container">


        <div className="flex top-header">

          <a  href="" className="top-offer">

            {offer}

          </a>

          <div className="top-links">

            <a href="">SIGN UP TO BECOME AN INFLUENCER</a>
            <a href="">CONTACT US</a>
            <a href="">TRACK ORDER</a>

          </div>


         </div>




      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
