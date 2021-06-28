import { produce } from "immer";

export const initialUserState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return produce(state, (draftState) => {
                draftState.user = action.user
            });

        case 'DE_USER':
            return produce(state, (draftState) => {
                draftState.user = null
            });

        default:
            return {
                ...state
            }
    }
}

export default reducer;
