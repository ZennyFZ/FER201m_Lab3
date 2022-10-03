import { useParams } from 'react-router-dom';
import { Films } from '../shared/ListOfFilms';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Detail() {
  const userName = useParams();
  const { theme } = useContext(ThemeContext)
  const Film = Films.find(obj => {
    return obj.id == userName.id;
  });
   return(
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className='image-detail'>
    		<img className='imageDetail' src={`../${Film.img}`} />
    	</div>
    	<div className='title-detail'>{Film.title}</div>
    	<div className='film-details'>
        	<p>Year: {Film.year}</p>
      		<p>Nation: {Film.nation}</p>
      		<div className='film-description'>{Film.info}</div>
        </div>
	</div>
   )
}