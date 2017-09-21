import React from 'react';
import {connect} from 'react-redux';
import SearchSvg from '../../../images/Icons/search';
import AccountSvg from '../../../images/Icons/account';
import BagSvg from '../../../images/Icons/bag';
import Categories from './onHoverCategories';
import {NavData} from './headerData';


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {show :false , active : "none"};
    this.showCategory = this.showCategory.bind(this);
    this.hideCategory = this.hideCategory.bind(this);

  }

  componentDidMount() {

  }

  showCategory(type){
    clearTimeout(this.state.timer);
    this.setState({show : true , active : type});
  }

  hideCategory(){
   this.setTimer();
  }

  setTimer(){

    let timer = setTimeout(() => {
      this.setState({show : false, active : "none"});

    },200);

    this.setState({timer : timer});

  }


  render () {
    let navData = [];

    try {
       navData = NavData[this.state.active][0];


    }catch(e){
      console.log(e);
    }


    return (

      <div className="navbar-bottom-shadow">

      <div className=" jumbotron main-header flex">


        { this.state.show ? <Categories navData = {navData}
                                        onMouseOver={this.showCategory.bind(this, this.state.active)}
                                        onMouseLeave={this.hideCategory}/> : "" }


        <a href="" className="logo">
          <img   src="../../../images/wooplr.png" alt="wooplr-home"/>
        </a>



        <div className="main-links">

          <a href=""  className={this.state.active === "men" ? "active-nav-link" : "" }
             onMouseOver={this.showCategory.bind(this, "men")}
             onMouseLeave={this.hideCategory}>MEN </a>

          <a href=""  className={this.state.active === "women" ? "active-nav-link" : "" }
             onMouseOver={this.showCategory.bind(this, "women")}
             onMouseLeave={this.hideCategory}>WOMEN </a>

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
