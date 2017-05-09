import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import {NAME, TIME} from './types.js'

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

      	<h2>time:{this.props.time}{this.props.title}</h2>
      	<p><button onClick={this.props.updateTime}>update time</button></p>
      	<ul>{
      			this.props.list.map((d) =>
						  <li key={d.toString()}>{d}</li>
						)
      	}</ul>
      </div>
    )
  }
  updateName(e){
  	this.props.updateName(e.target.value)
  }
}

const mapStateProps = (stage, action) =>{
	return stage;
}

const mapDispatchProps = (dispatch) =>{
	return {
		updateTime(){
			setTimeout(()=>{
				dispatch({
					type:TIME,
					time:new Date().getTime()
				})
			},1000);
		},
		updateName(name){
			dispatch({
				type:NAME,
				name:name
			})
		}
	}
}

const Edit = connect(mapStateProps,mapDispatchProps)(View);

export default () => (
  <Edit></Edit>
)