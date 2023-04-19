import React, { Component } from 'react';
import data from '../dataGlasses.json';
// import '../../public/img/'

export default class Glass extends Component {
  state ={
    img:"",
  };
  xuat = (e) =>{
    this.setState({
      img:e.target.src,
    });
  }
  renderGlass = () =>{
    return data.map((item, index)=>{
      return(
          <div key={index} onClick={this.xuat}>
            <img src={item.url} className='imgList' alt=".." />
          </div>
      );
    });
  };
  render() {
    return (
      <section id='glass'>
        <h2 className='title'>TRY GLASSES APP ONLINE</h2>
        <div className="body">
            <div className="content">
              <div className='model'>
                <img src="/glassesImage/model.jpg" alt="."/>
                <div className="hide" id='hide'><img src={this.state.img} alt="." /></div>               
              </div>
              <div className='model'>
                <img src="/glassesImage/model.jpg" alt="."/>          
              </div>
            </div>
            <div className="list-glass">
              <div className='content'>
                {this.renderGlass()}
              </div>
            </div>
        </div>
      </section>
    )
  }
}
