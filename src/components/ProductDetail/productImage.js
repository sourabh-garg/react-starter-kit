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
      <div className="product-image-div">


        <img src="../../images/imageSample.webp" alt=""/>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
