import React from 'react';
import Banner from './Banner';
import '../App.css';

function App() {
	return (
		<div>
            <Banner
                imageName='egg.png'
                text='Recetis para tod@s'/>

			{/*Container (all app content except banner)*/}
			<div className="container">

				<h3>App migrada a React</h3>

				<h5>Ideas :S</h5>
				<ul>
					<li>Añadir nueva receta</li>
					<li>Top ranking</li>
					<li>Imágenes</li>
					<li>Últimas recetas añadidas</li>
					<li>Imagen inicial con "Postre" y otra con "Platos"</li>
					<li>Pasos a seguir una vez se escoge una receta</li>
					<li>Cuando estas siguiendo los pasos de la receta... darle a un botón y que sea "siguiente paso". También un desplegable con los ingredientes</li>
					<li>Puntuación y color de fondo de la receta</li>
				</ul>

			</div>

		</div>
	);
}

export default App;
