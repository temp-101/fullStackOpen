import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const MostVotes = ({votes}) => {
  var anecdoteWithMostVotes = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  return(
    <>
    <p>{anecdotes[anecdoteWithMostVotes]}</p>
    <p>has {votes[anecdoteWithMostVotes]} votes</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0));

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => vote()} text="Vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote" />
      <h1>Anecdotes with most votes</h1>
      <MostVotes votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)