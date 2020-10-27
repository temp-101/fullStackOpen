import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Feedback = (props) => {
  return(
    <>
    <Button handleClick={() => props.setGood(props.good+1)} text="Good" />
    <Button handleClick={() => props.setNeutral(props.neutral+1)} text="Neutral" />
    <Button handleClick={() => props.setBad(props.bad+1)} text="Bad" />
    </>
  )
}

const Statistic = ({text, value}) => {
  return(
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}
  


const Statistics = ({good, neutral, bad}) => {
  if(good+bad+neutral === 0){
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  else {
    return(
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good+neutral+bad} />
          <Statistic text="average" value={(good-bad)/(good+bad+neutral)} />
          <Statistic text="positive" value={good/(good+bad+neutral)*100} />
        </tbody>
      </table>
    )
  }
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Feedback good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)