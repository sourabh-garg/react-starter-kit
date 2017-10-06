import React from 'react';

const baseurl = "https://res.wooplr.com/image/upload/f_auto,q_auto,fl_lossy,c_pad,w_800/";


class FeedImages extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    let feedType = this.props.feedType;
    let photoCollection = this.props.photoCollection;


    let imageCollection = [];

     if(feedType === 1){

       photoCollection.themeCollectionJAXB.productList.forEach((item) => {
         imageCollection.push(item.image_pid);

       });
     }

     if(feedType === 2){
       imageCollection = photoCollection;
     }
     if(feedType === 3){
       imageCollection = photoCollection.image_pid;
     }

     let ImageWidth = "width-33";
     if(imageCollection.length === 1){
       ImageWidth = "width-100";
     }
     if(imageCollection.length === 4 || imageCollection.length === 2 ){
       ImageWidth = "width-50";
     }


    let allImages = imageCollection.map((image ,i ) => {

       return (
         <div className={"feed-image-div " + ImageWidth}>
           <img src={ feedType === 1|| feedType === 3  ? baseurl+image : image } alt=""/>
         </div>
       );

    });


    return (
      <div className="row flex">

        { allImages }

      </div>
    );
  }

}



export default FeedImages;
