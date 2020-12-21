import React, { Component } from 'react'
import { getQuizDetails } from './Quiz_service/Quiz_service'
import { QuestionType, Quiz } from './Classes/quiz_types'
import Questions from './Components/Questions'


class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quiz: [],
      crtstep: 0,
      score: 0,
      showresult: false
    }
  }

  componentDidMount() {
    async function fetchdatail() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      console.log(questions);
      return questions;
    }

    fetchdatail().then((response) => {
      let data = [];
      for (var item in response) {
        data.push(response[item]);
      }
      this.setState({
        quiz: data
      })
    });

  }

  handleSubmit = (e: React.FormEvent<EventTarget>, userans: string) => {
    e.preventDefault();
    const currentQuestion: QuestionType = this.state.quiz[this.state.crtstep];

    console.log("Corrent answer: " + currentQuestion.correct_answer + " User Selection :" + userans)
    if (userans === currentQuestion.correct_answer) {
      this.setState({
        score: this.state.score + 1
      })

    }
    if (this.state.crtstep !== this.state.quiz.length - 1) {
      this.setState({
        crtstep: this.state.crtstep + 1
      })

    }
    else {
      this.setState({
        crtstep: 0,
        score: 0,
        showresult: true
      })
    }

  }

  render() {

    if (this.state.showresult) {
      return (
        <div className="container">
          <br />
          <div className="card">
            <div className="card-header">
              Result
          </div>
            <div className="card-body">
              <h5 className="card-title">
                Your Final score is : {this.state.score} out of {this.state.quiz.length}
              </h5>
              {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
        </div>

      )
    }
    if (!this.state.quiz.length)
      return (
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>

      )

    return (
      <div>
        <Questions
          options={this.state.quiz[this.state.crtstep].option}
          question={this.state.quiz[this.state.crtstep].question}
          callback={this.handleSubmit}
        />
        {/* {quizlist} */}
      </div>
    )
  }
}

export default App
