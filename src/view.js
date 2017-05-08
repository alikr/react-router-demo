import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom';
class View extends Component {
	constructor(arg){
		super(...arg);
		this.updateName = this.updateName.bind(this);
	}
  render(){
    return (
      <div>
      	<h2>name:{this.props.name}</h2>
      	<p><input type="text" defaultValue={this.props.name} onChange={this.updateName}/></p>

      	<h2>time:{this.props.time}</h2>
      	<p><button onClick={this.props.updateTime}>update time</button></p>
      </div>
    )
  }
  updateName(e){
  	this.props.updateName(e.target.value)
  }
}

const mapStateProps = (stage) =>{
	return stage;
}

const mapDispatchProps = (dispatch) =>{
	return {
		updateTime(){
			dispatch({
				type:"TIME",
				time:new Date().getTime()
			})
		},
		updateName(name){
			dispatch({
				type:"NAME",
				name:name
			})
		}
	}
}

const Edit = connect(mapStateProps,mapDispatchProps)(View);

export default () => (
  <Edit></Edit>
);