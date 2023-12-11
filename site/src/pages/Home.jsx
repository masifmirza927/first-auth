import React, { useState } from 'react'

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
    .then( res => res.json() )
    .then(json => setData(json))
  }
  

// const name = res => console.log("asdf")
console.log(data)

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      </div>
  )
}

export default Home