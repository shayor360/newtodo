import {createStore} from 'redux'
import todosReducer from './todos/todosReducer'

const store = createStore(todosReducer)

export default store