import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const person = persons.find((person) => person.name === newName);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personObject.id = person.id;
        phonebookService
          .update(person.id, personObject)
          .then((data) => {
            const previousPersonsList = persons.filter(
              (n) => n.id !== person.id
            );
            setPersons([...previousPersonsList, data]);

            setSuccessMessage(`${newName}'s number updated`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch(() => {
            setErrorMessage(
              `Information of '${newName}' has already been removed from the server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            const previousPersonsList = persons.filter(
              (n) => n.id !== person.id
            );
            setPersons([...previousPersonsList]);
          });
      }
    } else {
      phonebookService.create(personObject).then((createdPerson ) => {
        setPersons([...persons, createdPerson ]);

        setSuccessMessage(`${newName} added`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      })
      .catch(error => {
        setErrorMessage(error.response.data);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} msgStyle={"error"} />
      <Notification message={successMessage} msgStyle={"success"} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        data={{
          newName,
          newNumber,
        }}
        actions={{
          handleNameChange,
          handleNumberChange,
          handleAdd,
        }}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        newFilter={newFilter}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
