import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import "./Card.css";

export const getFavStorage = () => {
	const localData = localStorage.getItem('favs');
	return localData ? JSON.parse(localData) : [];
};

const removeFavStorage = (id) => {
	const StorageFav = getFavStorage();
	const index = StorageFav.findIndex((fav) => fav.id === id);
	if (index !== -1) {
		StorageFav.splice(index, 1);
		localStorage.setItem('favs', JSON.stringify(StorageFav));
		alert('Destista eliminado de tu lista de favoritos.');
	} else {
		alert('Error el eliminar, intenta nuevamente.');
	}
};

const setFavStorage = (dentist) => {
	const StorageFav = getFavStorage();
	const ListFav = StorageFav.filter((fav) => {
		return fav.id === dentist.id;
	});
	if (ListFav.length === 0) {
		StorageFav.push(dentist);
		localStorage.setItem('favs', JSON.stringify(StorageFav));
		alert('Destista agregado a tu lista de favoritos.');
	} else {
		alert('El dentista ya esta en tu lista de favoritos.');
	}
};

const Card = ({ name, username, id }) => {
	const { theme } = useContext(ContextGlobal);
	const isDarkMode = theme === 'dark' || false;

	const isFavorited = (id) => {
		const LocalData = getFavStorage();
		const ListFavorites = LocalData.filter((fav) => {
			return fav.id === id;
		});
		return ListFavorites.length === 1;
	};

	const addFav = () => {
		setFavStorage({ name, username, id });
	};

	const removeFav = () => {
		removeFavStorage(id);
	};

	const favorite = isFavorited(id);
	
	return (
		<div className={`card ${isDarkMode ? 'dark' : 'light'}`}>
			<img className='container-image' src="/images/doctor.jpg" alt="doctor" />
			<Link to={`/dentist/${id}`}>
				<h3>{name}</h3>
			</Link>
			<h5>{username}</h5>
			<button onClick={favorite ? removeFav : addFav} className={`${isDarkMode ? 'dark' : 'light'} button-favorite` }>
				{favorite ? 'Eliminar de favoritos 🗑️' : 'Añadir a favoritos ❤️'}
			</button>
		</div>
	);
};
export default Card;
