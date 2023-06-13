import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: {} || JSON.parse(localStorage.getItem("user")) , 
    token:  localStorage.getItem("token") || "",  
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getPlants()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
     
    })
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }
 
  const [plants, setPlants] = useState([]);
  
  //get all plants
  function getPlants() {
    userAxios.get("/api/plants")
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
      userAxios
        .get(`/api/plants/search/type?type=${e.target.value}`)
        .then((res) => setPlants(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getPlants();
  }, []);


  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        resetAuthErr,
        logout,
        getPlants,
        handleFilter,
        plants,
        setPlants
      }}>
      { props.children }
    </UserContext.Provider>
  )
}