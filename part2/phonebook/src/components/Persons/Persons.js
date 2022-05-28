export const Persons = ({ persons, newFilter }) => (
  <>
    {persons
      .filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map((person) => (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    ))}
  </>
)