import React, { Component, useState } from 'react'
import { questionPropsType } from './../Classes/quiz_types'


const Questions: React.FC<questionPropsType> = ({ question, options, callback }) => {

        let [selectedAns, setSelectedAns] = useState("");

        const handleselect = (e: any) => {
                setSelectedAns(e.target.value)
        }
        return (
                <div className="container">
                        <br />
                        <div className="card">
                                <div className="card-header">
                                      <b>Quiz App</b>  
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">
                                                {question}
                                        </h5>



                                        <form onSubmit={(e) => callback(e, selectedAns)}>

                                                {
                                                        options.map((opt: string, numb: number) => {
                                                                return (
                                                                        <p className="card-text">
                                                                                <label key={numb}>
                                                                                        <input
                                                                                                type="radio"
                                                                                                name="opt"
                                                                                                required
                                                                                                value={opt}
                                                                                                checked={selectedAns === opt}
                                                                                                onChange={handleselect}
                                                                                        /> {opt}
                                                                                </label>
                                                                        </p>
                                                                )
                                                        })
                                                }
                                                <input type="submit" className="btn btn-primary" />
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default Questions;
