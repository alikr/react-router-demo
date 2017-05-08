export default (state, action) => {
	// console.log(state,action)
  switch (action.type) {
    case 'NAME':
      return {
      	name:action.name,
      	time:state.time
      }
    case 'TIME':
      return {
      	name:state.name,
      	time:action.time
      }
    default:
      return state
  }
}
