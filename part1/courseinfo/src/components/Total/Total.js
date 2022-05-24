export const Total = ({ parts }) => {
  const total = parts.reduce((acc, n) => acc + n.exercises, 0)
  return (
    <p><b>total of {total} exercises</b></p>
  )
}