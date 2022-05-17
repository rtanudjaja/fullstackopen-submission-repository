const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Total = ({ content }) => (
  <p>Number of exercises {content.exercises1 + content.exercises2 + content.exercises3}</p>
)

const Part = ({ part, exercise }) => (
  <p>{part} {exercise}</p>
)


const Content = ({ content }) => (
  <div>
    <Part part={content.part1} exercise={content.exercises1}/>
    <Part part={content.part2} exercise={content.exercises2}/>
    <Part part={content.part3} exercise={content.exercises3}/>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = {
    part1,
    part2,
    part3,
    exercises1,
    exercises2,
    exercises3
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