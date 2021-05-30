import React from 'react';

import ArticuloPublicacion from './ArticuloPublicacion';

class Reuniones extends React.Component
{
	state = {
		loading: true,
		error: null,
		data: undefined,
	}
	/* componentDidMount() {
		this.fetchData();
	  }
	
	  fetchData = async () => {
		this.setState({ loading: true, error: null });
	
		try {
		  const data = await api.badges.list();
		  this.setState({ loading: false, data: data });
		} catch (error) {
		  this.setState({ loading: false, error: error });
		}
	}; */
	render()
	{
		/* if (this.state.loading === true) {
			return 'Loading...';
		}
	  
		if (this.state.error) {
			return `Error: ${this.state.error.message}`;
		} */

		return(
			<>
				{/* {this.props.publicaciones.map(publicacion => {
					return (
						<li key = {publicacion.id}>
							<ArticuloPublicacion publicacion = {publicacion} />
						</li>
					)
				})} */}
				<ArticuloPublicacion />
				<ArticuloPublicacion />
				<ArticuloPublicacion />
				<ArticuloPublicacion />
				<ArticuloPublicacion />
				<ArticuloPublicacion />
			</>
		)
	}
}

export default Reuniones;