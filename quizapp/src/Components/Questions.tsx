import { receiveMessageOnPort } from "worker_threads";

import React, { Component } from 'react'
import { questionPropsType } from './../Classes/quiz_types'


const Questions: React.FC<questionPropsType> = ({ question, options , callback}) => {
        return (
                <div className="question-container">
                        <div className="question">
                                {question}
                        </div>
                        <form onSubmit={callback}>
                                {
                                        options.map((opt: string, numb: number) => {
                                                return (
                                                        <div>
                                                                <label key={numb}>
                                                                        <input
                                                                                type="radio"
                                                                                name="opt"
                                                                                value={opt}
                                                                        />{opt}
                                                                </label>
                                                        </div>
                                                )
                                        })
                                }
                                <input type="submit" />
                        </form>
                </div>
        )
}

export default Questions;
