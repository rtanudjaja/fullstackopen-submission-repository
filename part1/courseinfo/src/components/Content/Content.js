import Part from '../Part'

export const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.name} name={part.name} exercise={part.exercises}/>
    ))}
  </div>
)