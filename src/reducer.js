//think of this as data layer
// content api and redux are not the same but use the same pattern
//The pattern of global store and dispatching you action into the store
//and the rducer just listens and that "oh you did this, i know what to do"

export const initialState = {
	basket: [],
	user: null,
};

// building a selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amaount, item) => item.price + amaount, 0);
const reducer = (state, action) => {
	//console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state, //...state means whatever the state originally was
				basket: [...state.basket, action.item], //now we are saying that adding the action to the basket's original state, item is the added stuff
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id} as its not in basket!`
				);
			}

			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
