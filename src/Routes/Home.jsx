import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { Box } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState(null)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Box component='div' sx={{display: {xs: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '50px'}, height: '100vh'}}>
      <div>
        {data?.map(dentist => <Card {...dentist} key={dentist.id} />)}
      </div>
      </Box>
  )
}

export default Home