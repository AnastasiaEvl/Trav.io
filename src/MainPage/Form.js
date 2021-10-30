import React, {useState} from "react";
import "../MainPage/MainPage.css";

const Form = () => {

  const [test, setTest] = useState(false);

  function onAddBtnClick() {
    setTest(true);
  }

  return (
    <div>
      <button className="search_btn" onClick={onAddBtnClick}>
        <img src="./images/Search.svg" />
      </button>
      {test && (
        <input className="search_area" type="text" placeholder="Поиск.." />
      )}
    </div>
  );
};

export default Form;
