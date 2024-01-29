import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CountryDetailsPage.css';
const CountryDetailsPage = () => {
  const { alpha3Code } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
        );
        setCountryDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryData();
  }, [alpha3Code]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const flagImageUrl = `https://flagcdn.com/w80/${countryDetails.alpha2Code.toLowerCase()}.png`;

  return (
    <div className='container mt-4'>
      <div className='flag-container'>
        <img src={flagImageUrl} alt={`${countryDetails.name.common} flag`} />
      </div>
      <div className='details-container'>
        <h1>{countryDetails.name.common}</h1>
        <h2>Country Details</h2>
        <ul>
          <li>Capital: {countryDetails.capital[0]}</li>
          <li>Area: {countryDetails.area} sq km</li>
        </ul>
        <h2>Borders:</h2>
        <ul>
          {countryDetails.borders.map(border => (
            <li key={border}>
              <Link to={`/countries/${border}`}>{border}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
