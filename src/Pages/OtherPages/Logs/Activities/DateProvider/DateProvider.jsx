import React, { createContext, useContext, useReducer } from "react";

export const DATE_CONTEXT = createContext();

const DateProvider = ({ children }) => {

  const initialDate = new Date();

  const DateReducer = (state, action) => {
    const day = 24 * 60 * 60 * 1000;
    const ms = initialDate.getTime();
    switch (action.type) {
      case `TODAY`:
        return new Date();
      case `TOMMOWROW`:
        return new Date(state.date.getTime() + day);
      case `YEASTARDAY`:
        return new Date(state.date.getTime() - day);
      case `WEEK`:
        return new Date(ms - day * 7);
      case `MONTH`:
        return new Date(ms - day * 30);
      case `YEAR`:
        return new Date(ms - day * 365);
      case `CUSTOM`:
        return new Date(action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(DateReducer, initialDate);

  const dateValue = { state, dispatch };

  return (
    <DATE_CONTEXT.Provider value={dateValue}>{children}</DATE_CONTEXT.Provider>
  );
};

export const useDate = () => {
  const dateValue = useContext(DATE_CONTEXT);
  return dateValue;
};

export default DateProvider;
