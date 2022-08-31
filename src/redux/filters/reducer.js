import { COLORCHANGED, STATASCHANGED } from "./actionTypes";
import { initialState } from "./initailState";

const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case STATASCHANGED:
      return {
        ...state,
        statas: action.payload
      }

      case COLORCHANGED:
        const {color, changeType} = action.payload;

        switch (changeType) {
          case "added":
            return {
              ...state,
              color: [...state.colors, color]
            }
          case "removed":
            return {
              ...state,
              color: state.colors.filter((previousColor) => !color)
            }
            
          default:
            return state;
        }
  
    default:
      return state;
  }
}

export default reducer;