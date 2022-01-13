import React, { useState, useEffect,useCallback } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from "@mui/material/Box";
const API = "https://restcountries.com/v3.1/region/asia";

const Country = () => {
  const [state, setState] = useState({ countries: [], isLoading: false });
  const { countries, isLoading } = state;
  const changeState = (newState) =>
    setState((prevState) => ({ ...prevState, ...newState }));

  const getCountries =useCallback( async () => {
    changeState({ isLoading: true });
    const res = await axios.get(`${API}`);
    changeState({ countries: res.data });
    changeState({ isLoading: false });
  },[]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);
  

  return isLoading ? (
    <Box sx={{ top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', }}>
      <CircularProgress />
    </Box>
  ) : (
      <div className="grid">
      <div className="refresh_wrapper" ><button className="refreshbtn btn-light"  onClick={getCountries}> Refresh <RefreshIcon style={{marginRight:"5px"}} /></button></div>
        {countries.length > 0
          ? countries.map((item, index) => (
              <CountryItem key={item.name.common}  item={item} />
            ))
          : ""}
      </div>
    
    
  );
};

export default Country;
