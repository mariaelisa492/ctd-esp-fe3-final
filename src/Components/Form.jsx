import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [dataUser, setDataUsers] = useState({
    nombre: "",
    apellido:"",
    email: ""
  });
  const [ error, setError ] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setDataUsers((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
		event.preventDefault();
    if(dataUser.nombre.trim()!== "" && dataUser.nombre.length > 3 && dataUser.nombre.charAt(0) !== " " && dataUser.apellido.length > 6){
      setError(false);
    }else{
      setError(true)
    }
	};

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombres"
            value={dataUser.nombre}
            name="nombre"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={dataUser.apellido}
            name="apellido"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={dataUser.email}
            name="email"
            onChange={handleChange}
            required
          />
          <button>Enviar</button>
        </form>
        {
    error && (
        <p className='error-messages'>
          El campo de nombre debe contener más de 3 caracteres y no debes añadir espacios al inicio o al final. El apellido debe tener más de 6 caracteres
        </p>
      )
    }
      </div>
    </div>
  );
};

export default Form;