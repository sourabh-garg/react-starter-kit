import React from 'react';
import {connect} from 'react-redux';


import ProductCard from './productCard';

import './productListing.scss';


class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render () {

    return (
      <div className="">

        <ProductCard />



      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
