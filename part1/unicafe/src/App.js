const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Total = ({ content }) => (
  <p>Number of exercises {content.part1.exercises + content.part2.exercises + content.part3.exercises}</p>
)

const Part = ({ part, exercise }) => (
  <p>{part} {exercise}</p>
)


const Content = ({ content }) => (
  <div>
    <Part part={content.part1.name} exercise={content.part1.exercises}/>
    <Part part={content.part2.name} exercise={content.part2.exercises}/>
    <Part part={content.part3.name} exercise={content.part3.exercises}/>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const content = {
    part1,
    part2,
    part3,
  }

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App