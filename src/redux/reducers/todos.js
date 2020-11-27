import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIDs: [],
  byIDs: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIDs: [...state.allIDs, id],
        byIDs: {
          ...state.byIDs,
          [id]: {
            content: content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIDs: {
          ...state.byIDs,
          [id]: {
            ...state.byIDs[id],
            completed: !state.byIDs[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
