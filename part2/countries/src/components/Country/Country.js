import Weather from "../Weather";

export const Country = ({ name, capital, area, languages, flag, latlng }) => (
  <div>
    <h2>{name}</h2>
    <p>
      capital {capital}
      <br />
      area {area}
    </p>
    <h4>languages:</h4>
    <ul>
      {languages.map(([key, lang]) => (
        <li key={key}>{lang}</li>
      ))}
    </ul>
    <img src={flag} alt={`${name} flag`} />
    <Weather capital={capital} lat={latlng[0]} lng={latlng[1]} />
  </div>
);
