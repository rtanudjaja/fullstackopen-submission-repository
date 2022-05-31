import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import { Country } from "./components/Country/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
  };

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      ),
    [newFilter, countries]
  );

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      {filteredCountries.length > 10 && (
        <div>Too many matches, specify another filter</div>
      )}
      {filteredCountries.length > 1 &&
        filteredCountries.length <= 10 &&
        filteredCountries.map((c) => (
          <div key={c.name.common}>
            {c.name.common}&nbsp;
            <button onClick={() => setNewFilter(c.name.common)}>show</button>
          </div>
        ))}
      {filteredCountries.length === 1 && (
        <Country
          name={filteredCountries[0]?.name.common}
          capital={
            filteredCountries[0]?.capital
              ? filteredCountries[0]?.capital[0]
              : filteredCountries[0]?.name.common
          }
          area={filteredCountries[0]?.area}
          languages={
            filteredCountries[0]?.languages
              ? Object.entries(filteredCountries[0]?.languages)
              : []
          }
          flag={
            filteredCountries[0]?.flags
              ? Object.values(filteredCountries[0]?.flags)[0]
              : ""
          }
          latlng={
            filteredCountries[0]?.capital
              ? filteredCountries[0]?.capitalInfo?.latlng
              : filteredCountries[0]?.latlng
          }
        />
      )}
    </div>
  );
};

export default App;
