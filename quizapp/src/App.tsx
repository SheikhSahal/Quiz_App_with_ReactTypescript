import React, { Component } from 'react'
import { getQuizDetails } from './Quiz_service/Quiz_service'
import { QuestionType, Quiz } from './Classes/quiz_types'
import Questions from './Components/Questions'


export class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quiz: [],
      crtstep: 0,
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
      console.log(data, "promise");
    });

  }

  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (this.state.crtstep !== this.state.quiz.length - 1) {
      this.setState({
        crtstep: this.state.crtstep + 1
      })
      
    }
    else { alert('Quiz Completed') }

  }

  render() {

    if (!this.state.quiz.length)
      return <h1>loading...</h1>

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
