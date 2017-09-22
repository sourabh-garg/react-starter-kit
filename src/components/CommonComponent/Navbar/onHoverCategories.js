import React from 'react';
import {connect} from 'react-redux';
import './navbar.scss';
import CategoryBox from './categoryBox';



class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    let categories = this.props.navData[0].properties.map((item , i) => {

      return ( <CategoryBox data = {item} key={i}/>)

    });

    let images = this.props.navData[1].map((item, i) => {

      return(
        <div className="" key={i}>

          <a href=""><img src={item.image} alt=""/></a>
          <p className="text-center">{item.displayName}</p>

        </div>

        )
    });

    let length = this.props.navData[1].length;



    return (
      <div className="onHover-categories-div" onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>

        <div className="flex category-list-flex">

            {categories}


            <div className={length > 2 ? "category-image-men" : "category-image-women" }>

              {images}

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
