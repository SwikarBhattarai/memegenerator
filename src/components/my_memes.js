import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component{
  render(){
    return(
        <div>
          {
            this.props.myMemes.map((meme,i)=>{
              return(
                <img
                  key={i}
                  src={meme.data.url}
                  alt="my-meme"
                  className="my-meme-img"
                />
              )
            })
          }
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    myMemes:state.myMemes
  }
}
export default connect(mapStateToProps, null) (MyMemes);
