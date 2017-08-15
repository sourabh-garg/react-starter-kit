import React from 'react';
import {connect} from 'react-redux';





 class Main extends React.Component{

   constructor(props) {
     super(props);
   }




  render () {




    return (
      <div className="container">

         {this.props.children}

          </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
