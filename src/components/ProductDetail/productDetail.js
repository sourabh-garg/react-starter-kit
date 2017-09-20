import React from 'react';
import {connect} from 'react-redux';
import './productDetail.scss';

import ProductImage from './productImage';
import TitlePrice from './title-price';
import AvailableSize from './availableSizes';
import BuyButtons from './buyButtons';
import CollapsableDiv from '../CommonComponent/CollapsableBox/collapsable';
import Offers from './offers';
import DeliveryInfo from './deliveryInfo';
import ProductInfo from './productInfo';
import PaymentsAndReturns from './paymentsAndReturn';

class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render () {

    return (
      <div className="jumbotron">


        <div className="product-detail-div flex">

          <div className="product-image-flex">
            <ProductImage/>
          </div>

          <div className="product-detail-flex">

            <TitlePrice />
            <AvailableSize />
            <BuyButtons />

            <hr className="block-linebreak"/>

            <CollapsableDiv title="OFFER">

            <Offers/>

            </CollapsableDiv>

            <hr className="block-linebreak"/>

            <CollapsableDiv title="DELIVERY INFORMATION">

              <DeliveryInfo />

            </CollapsableDiv>

            <hr className="block-linebreak"/>

            <CollapsableDiv title="PRODUCT INFO">

              <ProductInfo />

            </CollapsableDiv>

            <hr className="block-linebreak"/>

            <CollapsableDiv title="PAYMENTS AND RETURNS ">

              <PaymentsAndReturns />

            </CollapsableDiv>


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
