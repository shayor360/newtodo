import {ADD_TODOS} from './todoTypes'



const todosReducer = (state = [], action) =>{
	switch(action.type) {
		case ADD_TODOS:
			return[
			...state,
			action.dataStorage
		]
	
	default:
		return state;
	}
}


export default todosReducer




