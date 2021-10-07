import React from 'react'
import "../css/quiz1.css";


import quiz1 from "../quiz1";


  
function QuizBindo() {
  console.log('quiz b indo', quiz1);

  let shuffledQuestions = [];
  // function handleQuestions() {
  //     while (shuffledQuestions.length <= 9) {
  //       const random = quiz1[Math.floor(Math.random() * quiz1.length)];
  //       if (!shuffledQuestions.includes(random)) {
  //         shuffledQuestions.push(random);
  //       }
  //     }
  //   }
  return (
      <div className="QuizBindo" onload="NextQuestion(0)">
    <main>
      <div className="modal-container" id="score-modal">
        <div className="modal-content-container">
          <h1>CONGRATS!!</h1>

          <div className="grade-details">
            <p>Attempts:10</p>
            <p>Wrong Answers:<span id="wrong-answers"></span></p>
            <p>Right Answers:<span id="right-answers"></span></p>
            <p>Grade :<span id="grade-percentage"></span>%</p>
            <p><span id="remarks"></span></p>
          </div>

          <div className="modal-button-container">
            <button className="button-quiz" onclick="closeScoreModal()">continue</button>
          </div>
        </div>
      </div>

      <div className="game-quiz-container">
        <div className="game-details-container">
          <h1>Score:<span id="player-score"></span> /10</h1>
          <h1>Question:<span id="question-number"></span> /10</h1>
        </div>

        <div className="game-question-container">
        <h1>tes</h1>
          {
            quiz1.map((item, key) => (
              <div>
                <h1 >{item.question}</h1>
                <p>Soal</p>
              </div>
            ))
          }
        </div>

        <div className="game-options-container">
          <div className="modal-container" id="option-modal">
            <div className="modal-content-container">
              <h1>Please pick an option</h1>

              <div className="modal-button-container">
                <button onclick="closeOptionModal()">continue</button>
              </div>
            </div>
          </div>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-one"
              name="option"
              className="radio-quiz"
              value="optionA"
            />
            <label
              for="option-one"
              className="option-quiz"
              id="option-one-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-two"
              name="option"
              className="radio-quiz"
              value="optionB"
            />
            <label
              for="option-two"
              className="option-quiz"
              id="option-two-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-three"
              name="option"
              className="radio-quiz"
              value="optionC"
            />
            <label
              for="option-three"
              className="option-quiz"
              id="option-three-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-four"
              name="option"
              className="radio-quiz"
              value="optionD"
            />
            <label
              for="option-four"
              className="option-quiz"
              id="option-four-label"
            ></label>
          </span>
        </div>

        <div className="next-button-container">
          <button className="button-quiz" onclick="handleNextQuestion()">Next Question</button>
        </div>
      </div>
    </main>
    <script src="quiz1.js"></script>
</div>
  )
}

export default QuizBindo