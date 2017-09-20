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
      <div className="delivery-info-div">


        <p className="delivery-info-text">Product delivers between 24 Sep 2017 - 26 Sep 2017. Enter pin code for specific dates.</p>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
