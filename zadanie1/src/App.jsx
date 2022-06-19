import { useState } from "react";
import "./app.css";
function App() {
  const [text, setText] = useState("");
  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState("Поле ввода не может быть пустым");
  const [isEmpty, setIsEmpty] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
    if (!e.target.value) {
      setTextError("Поле ввода не может быть пустым");
      setDisabled(true)
      setIsEmpty('')
    } else {
      setTextError("");
      setDisabled(false)
    }
  };

  const handleClick = (e) => {
    if (text !== "") {
      setIsEmpty("Сообщение отправлено");
      console.log(text);
      setText("");
    }
  };

  const handleChangeText = () => {
    if (!text) {
      setTextError("Поле ввода не может быть пустым");
      setTextDirty(true);
      setIsEmpty("");
      setDisabled(true)
    }
  };


  return (
    <>
      <div className="app">
        <form onClick={(e) => e.preventDefault()}>
          <input
            className="inp"
            onChange={(e) => textHandler(e)}
            value={text}
            onBlur={handleChangeText}
            name="name"
            type="text"
          />
          <button  className={!text ? '' : 'btn'} disabled ={!text} onClick={handleClick} type="submit">
            Отправить
          </button>
        </form>
        {textDirty && <div  style={{ color: "red" }}>{textError}</div>}
        {isEmpty && <div style={{ color: "green" }}>{isEmpty}</div>}
      </div>
    </>
  );
}

export default App;
