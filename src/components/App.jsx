import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNum = 0;
  let [AnswerIsShown, setAnswerIsShown] = useState(false);
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionNum].question.text}
        answers={data[questionNum].question.choices}
      />
      <NextQuestion />s
    </div>
  );
}
function Answer(props) {
  return <p>{props.choice}</p>;
}

function Question(props) {
  let AnswerParagraphs = props.answers.map((choice) => (
    <Answer choice={choice} />
  ));
  return (
    <div>
      <h1 className="question"> {props.question}</h1>
      {AnswerParagraphs}
    </div>
  );
}

function NextQuestion() {
  return <button> Next Question </button>;
}

export default App;
