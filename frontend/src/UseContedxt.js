import React, { useContext, useState } from "react";

const PassingProps = React.createContext();

const UseCon = ({ children }) => {
  const [search, setSearch] = useState("");
  const onchange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <PassingProps.Provider value={{ search, onchange }}>
      {children}
    </PassingProps.Provider>
  );
};

const GlobalValue = () => useContext(PassingProps);

export { GlobalValue, UseCon };
