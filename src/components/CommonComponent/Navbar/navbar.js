import React from 'react';
import {connect} from 'react-redux';
import TopHeader from './topHeader';
import MainHeader from './mainHeader';
import './navbar.scss';


class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container">

        <div className="jumbotron">
          <TopHeader />
        </div>

        <MainHeader />

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
