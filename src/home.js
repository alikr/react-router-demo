import React, { Component } from 'react'
export default class View extends Component {
	constructor(){
		super();
		this.changeHandle = this.changeHandle.bind(this);
		this.state = {
			show:true
		}
	}
	changeHandle(){
		this.setState({
      show: !this.state.show
    });
	}
	componentDidMount(){
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(100,100);
		ctx.stroke();
	}
	render(){
		return(
		  <div>
		    <h2>Home</h2>
		    {this.state.show && <div>show</div>}
		    <div><button onClick={this.changeHandle}>change | {this.state.show.toString()}</button></div>
		    <canvas width='500' height='500' ref={el => this.canvas = el}></canvas>
		  </div>
		)
	}
}