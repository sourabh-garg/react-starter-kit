import React from 'react';
import {connect} from 'react-redux';
import SearchSvg from '../../../images/Icons/search';
import AccountSvg from '../../../images/Icons/account';
import BagSvg from '../../../images/Icons/bag';

class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render () {

    return (

      <div className="navbar-bottom-shadow">

      <div className=" jumbotron main-header flex">

        <a href="" className="logo">
          <img   src="../../../images/wooplr.png" alt="wooplr-home"/>
        </a>



        <div className="main-links">

          <a href="">MEN</a>
          <a href="">WOMEN</a>
          <a href="">STYLE FEED</a>
          <a href="">WOOPLRXYOU</a>

        </div>


        <div className="search-div">

          <div>

            <SearchSvg />

            <input type="text"  placeholder="Search for products" className=""/>
          </div>


        </div>


        <div className="account-bag-div">

          <a href="">
            <AccountSvg />
          </a>

          <a href="">
          <BagSvg />
          </a>

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
