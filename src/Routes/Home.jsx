import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../Components/Card'

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
      <>
        {data?.map(dentist => <Card {...dentist} key={dentist.id} />)}
      </>
  )
}

export default Home