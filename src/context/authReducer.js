export default function authReducer(state, action) {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return { ...state, currentUser: action.payload };

		case "CLEAR_STATE":
			return { currentUser: null };

		default:
			return state;
	}
}
