export function selectBook(book){
	console.log('selected', book.title);
	return{
		//action always contain type ,always in capitals
		type: 'BOOK_SELECTED',
		// contains payload when needed
		payload:book
	};
}