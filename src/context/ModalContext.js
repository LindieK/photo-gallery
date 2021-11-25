import React, { createContext, useReducer } from "react";

const ModalContext = createContext();

const modalInitialState = {
  showModal: false,
  modalPhoto: {},
  showPhotoInfo: false,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PHOTO_MODAL":
      return {
        ...state,
        showModal: true,
        modalPhoto: action.value,
      };
    case "SHOW_PHOTO_INFO":
      return {
        ...state,
        showPhotoInfo: true,
      };
    case "HIDE_PHOTO_MODAL":
      return {
        ...state,
        showModal: false,
        modalPhoto: {},
      };
    case "HIDE_PHOTO_INFO":
      return {
        ...state,
        showPhotoInfo: true,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ModalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(modalReducer, modalInitialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
