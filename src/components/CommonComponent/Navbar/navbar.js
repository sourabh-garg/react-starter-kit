import React from 'react';
import {connect} from 'react-redux';

import './navbar.scss';
import './navbar_mobile.scss';

import HamMenu from '../../../images/Icons/hamMenu';
import Add from '../../../images/Icons/add';


class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container navbar">

        <div className="jumbotron flex">

          <div className="user-profile-pic">
            <img src="https://i1.wp.com/verifiedloot.com/wp-content/uploads/2017/06/Beautiful-Girl-Pic-for-Whatsapp.jpg?resize=300%2C300&ssl=1" alt=""/>
          </div>

          <div className="user-name">
            <p>Tanya Sharma</p>
            <p>View Profile</p>
          </div>

          {/*<div className="add-btn">*/}

            {/*<Add />*/}

          {/*</div>*/}

          {/*<div className="ham-menu">*/}
            {/*<HamMenu />*/}
          {/*</div>*/}


        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Navbar);
