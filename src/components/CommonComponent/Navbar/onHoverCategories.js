import React from 'react';
import {connect} from 'react-redux';
import './navbar.scss';
import {NavData} from './headerData';
import CategoryBox from './categoryBox';



class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    let categories = this.props.navData.properties.map((item , i) => {

      return ( <CategoryBox data = {item} key={i}/>)

    });




    return (
      <div className="onHover-categories-div" onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>

        <div className="flex category-list-flex">

          {categories}

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
