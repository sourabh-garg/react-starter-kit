import React from 'react';
import {connect} from 'react-redux';




class Main extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    console.log(this.props.data);


    return (
      <div className="">


      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
