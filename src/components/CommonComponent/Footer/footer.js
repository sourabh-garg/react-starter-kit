import React from 'react';
import {connect} from 'react-redux';
import './footer.scss';
import FbSvg from '../../../images/Icons/facebook';
import InstaSvg from '../../../images/Icons/instagram';
import TwitterSvg from '../../../images/Icons/twitter';


class Main extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="flex footer-div">
            <div className="footer-links">
              <p>COMPANY</p>
              <ul >
                <li><a href="">We are Hiring</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Collections</a></li>
                <li><a href="">Track your order</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <p>LEGAL</p>
              <ul>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Shipping, Exchange & Returns</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <p>DOWNLOAD APP</p>
              <ul >

              </ul>
              <div className="download-app-div">
                <a href=""><img src="../../../images/google-play.png" alt=""/></a>
                <a href=""><img src="../../../images/app-store.png" alt=""/></a>
              </div>
              <div className="footer-links">
                <p>FOLLOW US</p>
              </div>
              <div className="social-icons">
                <a href=""> <FbSvg /></a>
                <a href=""> <InstaSvg /></a>
                <a href=""> <TwitterSvg /></a>
             </div>
            </div>
          </div>
        </div>
        <hr className="line-break"/>
        <div className="jumbotron">
          <p className="copyright">© 2017 www.wooplr.com. All rights reserved.</p>
        </div>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
