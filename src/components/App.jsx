import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data[0].question.text);
  var questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question question="Question" />
    </div>
  );
}
function Question(props) {
  return <h1 className="question"> {props.question}</h1>;
}

export default App;
