export const Total = ({ parts }) => (
  <p><b>Number of exercises {parts.reduce((acc, n) => acc + n.exercises, 0)}</b></p>
)