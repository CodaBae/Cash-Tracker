import {createStore, combineReducers} from 'redux'



const expensesReducersDState =[]
const expensesReducers=(state =expensesReducersDState, action)=>{
    switch(action.type){
        default:
        return state
    }

};

const filterReducersDState = {
    text: '',
    sortBy: 'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducers = (state = filterReducersDState,action)=>{
    switch(action.type){
        default:
        return state
    }
}

const store =createStore(combineReducers({
    expenses: expensesReducers,
    filters: filterReducers

}));
console.log(store.getState())


const demoState={
    expenses:[{
        id: 'jjkssd',
        des: 'rent',
        note:'my rent',
        amount:555,
        createdAt: 0,
    }],
    filters: {
        text :'rent',
        sortBy:'data', //amount or date
        startDate: undefined,
        endDate: undefined,
    }
}

