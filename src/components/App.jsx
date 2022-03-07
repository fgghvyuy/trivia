import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNum = 1;
  console.log(data[questionNum].question.text);
  return (
    <div className="app">
      Trivia!
      <Question question={data[questionNum].question.text} />
    </div>
  );
}
function Question(props) {
  return <h1 className="question"> {props.question}</h1>;
}

export default App;
