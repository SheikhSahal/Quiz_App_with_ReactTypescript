import React, { Component } from 'react'
import { getQuizDetails } from './Quiz_service/Quiz_service'
import { QuestionType, Quiz } from './Classes/quiz_types'
import { Questions } from './Components/Questions'

export class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      quiz: ''
    }
  }

  componentDidMount() {
    async function fetchdatail() {
      const questions: Quiz[] = await getQuizDetails(5, 'easy');
      console.log(questions);
    }
    fetchdatail();
  }

  render() {
    return (
      <div>
        <Questions>
          
        </Questions>
      </div>
    )
  }
}

export default App
