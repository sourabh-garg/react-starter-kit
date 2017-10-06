import React from 'react';
import './feedCard_mobile.scss';
import FeedCard from './feedCard';
import {feeds} from "./dummyData";



class FeedPage extends React.Component{

  constructor(props) {
    super(props);
    this.addCollection =  this.addCollection.bind(this);
    this.share =  this.share.bind(this);
  }

  componentDidMount() {

  }
  addCollection(){


  }

  share(){


  }

  render () {

    let allFeeds;

    try{
      allFeeds =  feeds.map((item, i) => {


        return (
          <FeedCard data ={item} key={i} add={this.addCollection} share={this.share} />
        );

      });

    }catch(e){

    }


    return (
      <div className="container all-feeds-div">

        {allFeeds}

      </div>
    );
  }

}



export default FeedPage;
