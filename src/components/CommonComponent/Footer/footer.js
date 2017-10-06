import React from 'react';

import './footer.scss';
import './footer_mobile.scss';

import DashBoard from '../../../images/Icons/dashboard';
import Support from '../../../images/Icons/support';
import Feed from '../../../images/Icons/feed';


class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="container  footer-div">

        <div className="flex jumbotron">

          <div className="footer-links-div  text-center">
            <div>
              <Feed />
            </div>

            <p>For you</p>

          </div>

          <div className="footer-links-div  footer-links-active text-center">
            <div>
              <DashBoard />
            </div>

            <p>Dashboard</p>
          </div>

          <div className="footer-links-div   text-center">
            <div>
              <Support />
            </div>
            <p>Support</p>

          </div>
        </div>


      </div>
    );
  }

}


export default Footer;
