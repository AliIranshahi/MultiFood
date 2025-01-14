import { createContext, useEffect, useReducer } from "react";

export const ThemContext = createContext();
const themReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

export function ThemProvider({ children }) {
  const [state, dispatch] = useReducer(themReducer, {
    // color: "e73b8b",
    mode: "light",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  
  return (
    <ThemContext.Provider value={{ ...state, changeColor , changeMode }}>
      {children}
    </ThemContext.Provider>
  );
}
