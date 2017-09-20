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
      <div className="">

        <div className="h3-product-title-div flex">

          <h3>AlliaForFabAlley Cold Shoulder Slit Dress - White</h3>     {/*product title*/}

          {/*<div> Share </div>*/}
        </div>

        <p className="product-brand-name"><span>FabAlley</span></p>   {/*brand name*/}

        <div className="product-price-div">

          <p className="p-striked"><span>Rs 1,900</span></p>   {/*striked price*/}

          <p className="p-price"><span>Rs 1,900</span> <span>50% OFF</span></p>   {/*current price  , discount*/}

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
