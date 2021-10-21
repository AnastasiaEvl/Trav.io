import React, { useState } from "react";
import "../MainPage/MainPage.css";

const Input = () => {
  const [search, setSearch] = useState();
  return (
    <input
      className="search_area"
      type="text"
      name="search"
      placeholder="Поиск.."
      value={search}
      onChange={(data) => setSearch(data.target.value)}
    />
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button className="search_btn" onClick={onAddBtnClick}>
        <img src="./images/Search.svg" />
      </button>
      {inputList}
    </div>
  );
};

export default Form;
