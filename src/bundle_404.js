import React, { Component } from 'react'

import Bundle from './bundle.js'
import loadMatch from 'bundle-loader?lazy!./404.js'
export default (arg) => (
  <Bundle load={loadMatch}>
    {(Comp) => Comp
      ? <Comp {...arg}/>
      : (<div>loading</div>)
    }
  </Bundle>
);