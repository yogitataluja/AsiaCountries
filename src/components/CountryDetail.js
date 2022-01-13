import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const CountryDetail = () => {
  const { country } = useParams();
  const [state, setState] = useState({
    countrydetails:[],
    isLoading: false,
    language:[]
  });
  const { countrydetails, isLoading,language } = state;
  const changeState = (newState) =>
    setState((prevState) => ({ ...prevState, ...newState }));

  const getCountryDetails =async () => {
    changeState({ isLoading: true });
    const res = await axios.get(
      ` https://restcountries.com/v3.1/name/${country}`
    );
    changeState({ countrydetails: res?.data });
    changeState({ isLoading: false });
  };

  useEffect(() => {
    getCountryDetails();
  }, []);

  let myData = [countrydetails[0]?.languages];
  function getLanguages() {
    if (myData.length > 0) {
      myData.forEach(function (o) {
        let k = Object.keys(o);
        for (var i in k) 
        language.push(o[k[i]]);
      });
      
    }
    changeState({language:language})
  }
  useEffect(() => {
    countrydetails.length>0 && getLanguages();
  }, [countrydetails]);

  return isLoading ? (
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <section className="country">
        <Link to="/" className="btn-light btn">
          <ArrowBackIcon /> Back
        </Link>
        {countrydetails[0]? (<article>
          <h2><span>{countrydetails[0].name.official}</span></h2>
          <div className="country-inner">
          
            <div className="flag">
              <img src={countrydetails[0].flags.png} alt={countrydetails[0].name.common} />
            </div>

            <div className="country-details">
            
              <div> 
              <h5>
               <strong>Official Name:</strong>  <span>{countrydetails[0].name.official}</span>
                </h5>
                <h5>
               <strong>Common Name:</strong>  <span>{countrydetails[0].name.common}</span>
                </h5>
                <h5>
                  <strong>Capital:</strong>  {countrydetails[0].capital?.join(", ")}
                </h5>
                <h5>
                  <strong>Region:</strong> <span> {countrydetails[0].region}</span>
                </h5>
                <h5>
                  <strong>Sub Region:</strong> <span> {countrydetails[0].subregion}</span>
                </h5>
                <h5>
                  <strong>Population:</strong> <span> {countrydetails[0].population}</span>
                </h5>
              </div>

              <div>
                <h5>
                  <strong>Languages: </strong> <span>{language?.join(", ")}</span> 
                </h5>
                
              </div>
            </div>
          </div>

          
          
            <div className="borders">
            <h3>Border Countries: </h3>
              {countrydetails[0].borders.map((border) => {
                return (
                  <ul key={border} >
                    <li>{border}</li>
                  </ul>
                );
              })}
            </div>
          
        </article>):""}
           
       
         
      </section>
    </>)
  
  };

export default CountryDetail;
