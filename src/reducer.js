//think of this as data layer
// content api and redux are not the same but use the same pattern
//The pattern of global store and dispatching you action into the store
//and the rducer just listens and that "oh you did this, i know what to do"

export const initialState = {
	basket: [],
};

const reducer = (state, action) => {
	//console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state, //...state means whatever the state originally was
				basket: [...state.basket, action.item], //now we are saying that adding the action to the basket's original state, item is the added stuff
			};

		default:
			return state;
	}
};

export default reducer;
