import React from 'react';
import Banner from './Banner';
import ListItems from './ListItems';
import '../App.css';

const elements = [{
	itemName: 'javier'
}, {
	itemName: 'pedro'
}]

function App() {
	return (
		<div>
            <Banner
                imageName='egg.png'
                text='Recetis para tod@s'/>

			{/*Container (all app content except banner)*/}
			<div className="container">

				<span>Lista de ideas (Componente ListItems.js)</span>

				<ListItems items={[
					{ name: 'Añadir receta' },
					{ name: 'Top ranking '},
					{ name: 'Últimas recetas' },
					{ name: 'Imagen inicial con "Postre" y otra con "Platos"' },
					{ name: 'Imágenes' },
					{ name: 'Pasos a seguir una vez se escoge una receta' },
					{ name: 'Cuando estas siguiendo los pasos de la receta... darle a un botón y que sea "siguiente paso". También un desplegable con los ingredientes' },
					{ name: 'Puntuación y color de fondo de la receta' }
				]}/>
			</div>

		</div>
	);
}

export default App;
