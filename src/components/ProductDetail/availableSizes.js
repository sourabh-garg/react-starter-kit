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
      <div className="available-size-div">

        <p><span className="product-detail-label">AVAILABLE SIZES</span> <span className="sizing-guide-label">SEE SIZING GUIDE</span></p>


        <div className="avilable-size-circle-div">

          <span className="size-selected">
            S
          </span>

          <span className="size-disabled">
            32
          </span>

          <span>
            XL
          </span>


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
