import { handleAction } from "redux-actions";

const defaultState = 0;

export default handleAction("INCREASE", number => number + 1, defaultState);
