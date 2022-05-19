const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Total = ({ parts }) => (
  <p>Number of exercises {parts.reduce((acc, n) => acc + n.exercises, 0)}</p>
)

const Part = ({ name, exercise }) => (
  <p>{name} {exercise}</p>
)


const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.name} name={part.name} exercise={part.exercises}/>
    ))}
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App