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

    let categories = NavData.women[0].properties.map((item , i) => {

      return ( <CategoryBox data = {item} key={i}/>)

    });




    return (
      <div className="onHover-categories-div">

        {categories}

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
