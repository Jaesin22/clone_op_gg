import { combineReducers } from "redux";
import typeInfo from "./buttonEvent";

//reducer를 하나로 묶어주는 메소드
const rootReducer = combineReducers({
  typeInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
