const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value : 0,
    age : 17
}

//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type == 'ADD_AGE'){
        return {
            ...state,
            age: state.age + 1
        }
    }
    if(action.type == 'CHANGE_VALUE'){
        return{
            ...state,
            value: state.value + action.newValue
        }
    }
    return state
}

//store
const store = createStore(rootReducer)
console.log(store.getState())

//subscrabtion
store.subscribe(()=>{
    console.log('store change: ', store.getState())
})

//dispatch
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState())