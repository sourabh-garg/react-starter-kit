import React from 'react';
import {connect} from 'react-redux';
import Carousel from '../CommonComponent/Carousel/carousel';
import FeedPage from '../CommonComponent/FeedCard/feedPage';



class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container">


       {/*<Carousel />*/}

       <FeedPage />


      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
