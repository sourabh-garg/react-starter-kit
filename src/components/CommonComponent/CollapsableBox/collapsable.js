import React from 'react';
import {connect} from 'react-redux';
import Expand from '../../../images/Icons/arrow';


import './collapsable.scss';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {show : true};
    this.toggle = this.toggle.bind(this);

  }

  componentDidMount() {

  }
  toggle(){

    this.setState({show : !this.state.show});

  }


  render () {

    return (
      <div className="">

         <p>
           <p className="expand-info-btn" onClick={this.toggle}>
             <span className="product-detail-label">{this.props.title}</span>
             <span className={this.state.show ? "expandSvg expandSvg-reverse" : "expandSvg" }> <Expand /></span>
           </p>

         </p>



        <div className= { this.state.show ? "collapsable-info-div" : "collapsable-info-div collapse"} >
           {this.props.children}
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
