import React from 'react';
import {connect} from 'react-redux';


class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render () {

    return (
      <div className="offers-div">

        <div className="offer-single-div">

          <p>15% off when you order for Rs 1200+ & pay online.</p>

          <span>WOOPLR15</span>

          <hr className="offer-breakline"/>

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
