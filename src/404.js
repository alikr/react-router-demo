import React, { Component } from 'react'
export default (arg) => {
	return (
	  <div>
	    <h3>无法匹配 <code>{arg.location.pathname}</code></h3>
	  </div>
	)
};