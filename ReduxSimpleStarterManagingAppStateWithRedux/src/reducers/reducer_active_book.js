// state is not application state,
//only state responsible by this reducer
export default function(state = null, action) {
	console.log('selected');
	switch(action.type){
		case 'BOOK_SELECTED':
		console.log(action.payload);
			return action.payload;
	}
	return state;
}