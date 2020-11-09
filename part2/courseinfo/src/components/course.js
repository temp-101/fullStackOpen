import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
    const parts = course.parts.map(part => part)
    const sum = parts.reduce((accumulator, part) => {
        return accumulator + part.exercises
      }, 0);
    return(
        <p>Number of exercises {sum}</p>
    ) 
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
    </div>
  )
}

const Course = ({ course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course