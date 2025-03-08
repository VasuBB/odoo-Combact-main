import React, { createContext, useContext, useState, useEffect } from "react";

export const curr_context = createContext();

export default function Central(props) {
 
  return (
    <>
      <curr_context.Provider value={{ }}>
        {props.children}
      </curr_context.Provider>
    </>
  );
}