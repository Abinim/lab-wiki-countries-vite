import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>WikiCountries: Your Guide to the World</h1>
      <table className='country-table'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.alpha3Code}>
              <td>
                <Link to={`/countries/${country.alpha3Code}`}>
                  <img
                    src={`https://flagcdn.com/48x36/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`${country.name} flag`}
                  />
                </Link>
              </td>
              <td>
                <Link to={`/countries/${country.alpha3Code}`}>
                  {country.name.common}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
