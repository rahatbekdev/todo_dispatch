import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer.js"; // Импортируем ваш редуктор
import App from "./App.jsx"; // Импортируем компонент App

const store = createStore(reducer); // Создаем хранилище Redux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") // Рендерим приложение в корневой элемент с id "root"
);
