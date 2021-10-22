import React, {useState} from "react";
import "../MainPage/MainPage.css";

// const Input = () => {
//   const [search, setSearch] = useState();

//   return (
//     <input
//       className="search_area"
//       type="text"
//       name="search"
//       placeholder="Поиск.."
//       value={search}
//       onChange={(data) => setSearch(data.target.value)}
//     />
//   );
// };

const Form = () => {
  // const [inputList, setInputList] = useState([]);

  // const onAddBtnClick = (event) => {
  //   setInputList(inputList.concat(<Input key={inputList.length} />));
  // };
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
