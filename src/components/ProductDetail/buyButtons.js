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
      <div className="flex buy-buttons-div">


        <button className="quick-buy-btn"> <span> QUICK BUY  </span> </button>
        <button className="add-bag-btn">   <span> ADD TO BAG </span> </button>


      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
