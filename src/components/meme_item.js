import React, {Component} from 'react';
import {createMeme} from '../actions';
import {connect} from 'react-redux';

class MemeItem extends Component{
  constructor(props){
    super(props);

    this.state={
      hover:false
    };
  }

  postMeme(){
    const {text0, text1}=this.props;
    const memeObj={
      template_id:this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj);
  }
  render(){
    return(
        <div className="meme-item"
          onMouseEnter={()=>this.setState({hover:true})}
          onMouseLeave={()=>this.setState({hover:false})}
          onClick={()=>this.postMeme()}
        >
          <img
            className={this.state.hover ? "meme-img darken-img" : "meme-img"}
            src={this.props.meme.url}
            alt={this.props.meme.name}
          />
          <p className={this.state.hover ? "meme-txt" : "no-txt"}>
            {this.props.meme.name}
          </p>
        </div>
    );
  }
}

export default connect(null, {createMeme}) (MemeItem);
