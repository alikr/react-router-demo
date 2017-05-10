import { createStore, combineReducers, applyMiddleware } from 'redux'
function thunkMiddleware ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
function logMiddleware ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            console.log('logMiddleware action:', action)
            return next(action)
        }
    }
}
export default applyMiddleware(thunkMiddleware, logMiddleware)(createStore);