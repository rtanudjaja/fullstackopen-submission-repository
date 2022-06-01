import phonebookService from "../../services/phonebook";

export const Persons = ({
  persons,
  setPersons,
  newFilter,
  setErrorMessage,
}) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deleteEntry(person.id)
        .then(() => {
          setPersons([...persons].filter((n) => n.id !== person.id));
        })
        .catch(() => {
          setErrorMessage(
            `Information of '${person.name}' has already been removed from the server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons([...persons].filter((n) => n.id !== person.id));
        });
    }
  };

  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}&nbsp;
            <button onClick={() => handleDelete(person)}>delete</button>
          </div>
        ))}
    </>
  );
};
