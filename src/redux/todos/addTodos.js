import {ADD_TODOS} from './todoTypes'

export const addTodos = (dataStorage) => {
	return{
		type: ADD_TODOS,
		dataStorage
	}
}