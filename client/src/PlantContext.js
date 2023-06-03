import React, {useState, useEffect} from "react"
import axios from "axios"


export const PlantContext = React.createContext()

export default function PlantProvider(props) {
    const [plants, setPlants] = useState([]);
  
    function getPlants() {
      axios
        .get("/plants")
        .then((res) => {
          console.log(res.data); // Check the response data
          setPlants(res.data);
        })
        .catch((err) => console.log(err.response.data.errMsg));
    }
  
    function handleFilter(e) {
      if (e.target.value === "reset") {
        getPlants();
      } else {
        axios
          .get(`/plants/search/type?type=${e.target.value}`)
          .then((res) => setPlants(res.data))
          .catch((err) => console.log(err));
      }
    }
  
    useEffect(() => {
      getPlants();
    }, []);
  
    return (
      <PlantContext.Provider
        value={{ getPlants, handleFilter, plants, setPlants }}
      >
        {props.children}
      </PlantContext.Provider>
    );
  }
  