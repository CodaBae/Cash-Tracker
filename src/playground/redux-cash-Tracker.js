import {createStore, combineReducers} from 'redux'
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

