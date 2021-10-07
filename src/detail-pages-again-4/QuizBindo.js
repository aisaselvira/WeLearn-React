import React from 'react'
import "../css/quiz1.css";

function QuizBindo() {
  return (
      <div classNameName="QuizBindo" onload="NextQuestion(0)">
    <main>
      <div class="modal-container" id="score-modal">
        <div class="modal-content-container">
          <h1>CONGRATS!!</h1>

          <div class="grade-details">
            <p>Attempts:10</p>
            <p>Wrong Answers:<span id="wrong-answers"></span></p>
            <p>Right Answers:<span id="right-answers"></span></p>
            <p>Grade :<span id="grade-percentage"></span>%</p>
            <p><span id="remarks"></span></p>
          </div>

          <div class="modal-button-container">
            <button className="button-quiz" onclick="closeScoreModal()">continue</button>
          </div>
        </div>
      </div>

      <div class="game-quiz-container">
        <div class="game-details-container">
          <h1>Score:<span id="player-score"></span> /10</h1>
          <h1>Question:<span id="question-number"></span> /10</h1>
        </div>

        <div class="game-question-container">
          <h1 id="display-question"></h1>
        </div>

        <div class="game-options-container">
          <div class="modal-container" id="option-modal">
            <div class="modal-content-container">
              <h1>Please pick an option</h1>

              <div class="modal-button-container">
                <button onclick="closeOptionModal()">continue</button>
              </div>
            </div>
          </div>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-one"
              name="option"
              class="radio-quiz"
              value="optionA"
            />
            <label
              for="option-one"
              class="option-quiz"
              id="option-one-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-two"
              name="option"
              class="radio-quiz"
              value="optionB"
            />
            <label
              for="option-two"
              class="option-quiz"
              id="option-two-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-three"
              name="option"
              class="radio-quiz"
              value="optionC"
            />
            <label
              for="option-three"
              class="option-quiz"
              id="option-three-label"
            ></label>
          </span>

          <span className="span-quiz">
            <input
              type="radio"
              id="option-four"
              name="option"
              class="radio-quiz"
              value="optionD"
            />
            <label
              for="option-four"
              class="option-quiz"
              id="option-four-label"
            ></label>
          </span>
        </div>

        <div class="next-button-container">
          <button className="button-quiz" onclick="handleNextQuestion()">Next Question</button>
        </div>
      </div>
    </main>
    <script src="quiz1.js"></script>
</div>
  )
}

export default QuizBindo