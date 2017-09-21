import React from 'react';
import {connect} from 'react-redux';




class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    let data = this.props.data;
    let childLinks = data.properties.map((item, i) => {

      return (
        <li key={i}><a href="">{item.displayName}</a> </li>
      )

    });



    return (
      <div className="category-box">

        <a href="" className="catergory-parent-link">{data.displayName}</a>

        <ul className="category-links">
          {childLinks}
        </ul>


      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
