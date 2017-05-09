import {NAME, TIME} from './types.js'

export default (state, action) => {
	const fun = reducer[action.type];
  return fun ? fun(state, action) : state;
}

const reducer = {
  [NAME](state, action){
    var list = Object.assign([],state.list);
    list.push(action.name)
    return {
      name:action.name,
      time:state.time,
      list
    }
  },
  [TIME](state, action){
    var list = Object.assign([],state.list);
    list.push(action.time)
    return {
      name:state.name,
      time:action.time,
      list
    }
  }
}
