import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import User from '../static/user-icon.png';
import '../styles/components/Header.css';

const Header = () =>
{

	const title = ["/", "Nosotros", "Publicaciones"];
 	const [myTitle, setMyTitle] = useState("/");

    return(
        <header className="header-inicio"> 
            <div className="navigation">
                <img src alt="logo" />
                <nav className="navigation-link">
				{
					title.map(Titulo =>(
						<Link to = {Titulo} 
							key = {Titulo}
							onClick = {() => setMyTitle(Titulo)}>
							{Titulo=="/"? "Inicio" : Titulo}
						</Link>
					))
				}
               {/*  <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/publicaciones">Publicaciones</Link> */}
                <div className="user__menu">
                    <img src= {User} />
                    <ul>
                    <Link to="login.html">Iniciar Sesión</Link>
                    <Link to="registro.html">Registrarme</Link>
                    </ul>
                </div>
                </nav>
            </div>
            <div className="principal-header">
				
                <h1>
				{
					myTitle=="/"? "Sociedad Entomológica Cruceña" : myTitle
				}</h1>
                <button className="button-header button-2">Sé un Miembro</button>
            </div>
        </header>
    )
    

}

export default Header;