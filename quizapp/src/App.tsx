import React, { Component } from 'react'
import { getQuizDetails } from './Quiz_service/Quiz_service'

export class App extends Component {

  componentDidMount() {
    async function fetchdatail() {
      const questions = await getQuizDetails(5, 'easy');
      console.log(questions);
    }
    fetchdatail();
  }

  render() {
    return (
      <div>
        <h1>hellow</h1>
      </div>
    )
  }
}

export default App
