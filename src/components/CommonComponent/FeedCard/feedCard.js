import React from 'react';

import './feedCard_mobile.scss';

import FeedImages from './feedImages';

class FeedCard extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {
    let data = this.props.data;

    let photoCollection = data.photoUrls;

    if(data.feedType === 1){
      photoCollection = data.collectionDetail;
    }
    if(data.feedType === 3){
      photoCollection = data.productDetail;
    }

    return (
      <div className="feed-card-div">

        <a href=""></a> <h4>{data.title}</h4>
        <h6>{data.description}</h6>

        <FeedImages feedType={data.feedType} photoCollection ={photoCollection} />

        <div className="flex action_btn">

          <button onClick={this.props.add}>ADD</button>
          <button onClick={this.props.share}>SHARE</button>

        </div>

      </div>
    );
  }

}



export default FeedCard;
