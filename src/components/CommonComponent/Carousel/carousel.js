import React from 'react';
import { IndexLink, Link } from "react-router";
import './carousel.scss';
import ArrowButtom from '../../../images/Icons/arrow-right';


const Images = [ {url : "http://thecsrjournal.in/wp-content/uploads/2017/04/Sports-I.jpg"},
      {url :"http://www.dessosports.com/sites/all/themes/desso_theme/images/background.jpg"},
      {url : "http://www.hitched.co.uk/images/articlecontent/deal-wasing-park.jpg"}

           ];




class Carousel extends React.Component{

  constructor(props) {
    super(props);
    this.state = {imageActive: 0 , images : []};
    this.startCarousel = this.startCarousel.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.moveCarousel = this.moveCarousel.bind(this);

  }

  componentDidMount(){
    this.setPosition();
    this.startCarousel();
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
   }

  moveCarousel(action){
    clearInterval(this.state.timer);
    let currentPos;
    let change;
    let active;

    if(action){
      currentPos = -100;
      change = 1;
      active = this.state.imageActive+1;

    }else{
      currentPos = 100;
      change = -1;
      active = this.state.imageActive -1;
    }

    let ImageArr  = [...this.state.images];
    ImageArr[this.state.imageActive].left = currentPos;
    ImageArr[this.state.imageActive + change].left = 0;

    this.setState({imageActive: active, images: ImageArr});
    this.startCarousel();

  }

  setPosition(){
    let images = Images.map((image, i) =>{
       image["left"] = i === 0 ? 0 : 100;

       return(
         image
       );
    });
    return this.setState({images : images, imageActive: 0 });
  }

  startCarousel(){
    let length = Images.length;
    let timer = setInterval(() => {

    if(this.state.imageActive < length -1){
      let ImageArr  = [...this.state.images];
      ImageArr[this.state.imageActive].left = -100;
      ImageArr[this.state.imageActive+1].left = 0;

      this.setState({imageActive: this.state.imageActive+1, images: ImageArr});
    }else{
      this.setPosition();
    }
    },7000);

    this.setState({timer: timer});
  }


  render(){

   let ImgArr;

   let backActive = this.state.imageActive > 0 ;
   let nextActive = this.state.imageActive < this.state.images.length -1;

   try {
      ImgArr = this.state.images.map((image, i) => {

       let trans = 'translateX(' + image.left + '%' + ')';

       let css = {
         transform: trans
       };


       return (
         <div className="carouselItem" style={css} key={i}>

           <h2 >Wooplr : Some random text</h2>

           <div className="overlay"/>
           <img src={image.url} alt=""/>
         </div>
       );


     });
   }catch(err){
     ImgArr = "";

   }

    return (
      <div className="carouselOuter">

        <div className={backActive ?"backButton" : "backButton disabled"} onClick={this.moveCarousel.bind(this, 0)}>

          <ArrowButtom />
        </div>

        <div className= {nextActive ? "nextButton" : "nextButton disabled"} onClick={this.moveCarousel.bind(this, 1)}>

          <ArrowButtom />

        </div>


        <div className="carouselInner">

          {ImgArr}

        </div>


      </div>
    );}

}



export default Carousel;

