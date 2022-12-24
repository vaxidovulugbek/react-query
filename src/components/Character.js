import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

function Character() {
  // const [character, setCharacter] = useState([])

  const fetchCharacter = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    return  res.json()
    // const data = res.json
    // setCharacter(data)
  }

  const {data, status, } = useQuery("character", fetchCharacter)
  if (status === "loading"){
    return <div>Loading...</div>
  }
  if (status === "error") {
    return <div>Error</div>
  }
console.log(data);
  return (
    <div>
    {
      
    }
    </div>
  )
}

export default Character