
import  { createStore } from 'redux';

const incrementF = ({incrementBy = 1 } = {}) =>({
type:'INCREMENT',
incrementBy
});

const decrementF = ({decrementBy = 1} = {}) => ({
type: 'DECREMENT',
decrementBy
});
const resetF = () => ({
type: 'RESET'

});
const setF =({count = 0}={}) =>({
type: 'SET',
count
});

const countReducers = (state={count:0}, action) =>{
    switch(action.type){
        case 'INCREMENT' : 
        
        return {
            count: state.count  +action.incrementBy
        }
        case 'DECREMENT':
        
        return{
            count:state.count -action.decrementBy
        }
        case 'RESET':
        return {
            count: state.count = 0
        }
        case 'SET':
       
        return{
            count: state.count = action.count
        }
        default: return state;
    }   
}
const store = createStore(countReducers);


    store.subscribe(()=>{
       console.log(store.getState())
    }) 

    store.dispatch(incrementF({incrementBy: 10}))

    store.dispatch(incrementF({incrementBy: 10}))
    
    store.dispatch(resetF())
    store.dispatch(decrementF({decrementBy: 5}))

    store.dispatch(decrementF({decrementBy: 5}))

    store.dispatch(setF({count: 100}))
  
  
  

