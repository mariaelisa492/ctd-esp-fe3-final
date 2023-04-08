import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Necesitas más información?</h2>
      <p>Deja tus datos en el formulario y muy pronto nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact