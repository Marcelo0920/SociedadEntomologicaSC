import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';

import User from '../static/user-icon.png';
import '../styles/components/Header.css';

const Header = ({auth: {isAuthenticated, loading}, logout}) =>
{

	const title = ["/", "Nosotros", "Publicaciones"];
 	const [myTitle, setMyTitle] = useState("/");

    const authLinks = (
    
            <Fragment>             
                <img alt="logo" />
                <nav className="navigation-link">  {/*<---------Navega a través de los posibles valores de title para hacerle Link*/}
				{
					title.map(Titulo =>(  
						<Link to = {Titulo} 
							key = {Titulo}
							onClick = {() => setMyTitle(Titulo)}>
							{Titulo=="/"? "Inicio" : Titulo}
						</Link>
					))    
				}
                <Link to = "comentarios">Comentarios</Link>
                <Link to = "publicar">Publicar</Link>
                <div className="user__menu">
                    <img src= {User} />
                    <ul>
                        <Link to="/" onClick = {logout}><i className = "fas fa-sign-out-alt"></i>{' '}Cerrar Sesión</Link>
                    </ul>
                </div>
                </nav>
            </Fragment>
    )

    const guestLinks = (
            <Fragment>
                <img alt="logo" />
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
                <div className="user__menu">
                    <img src= {User} />
                    <ul>
                        <Link to="/login">Iniciar Sesión</Link>
                        <Link to="/register">Registrarme</Link>
                    </ul>
                </div>
                </nav>
            </Fragment>
    )

    return(
        <header className="header-inicio"> 
            <div className="navigation">
            {
                (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
            }
            </div>
            
            <div className="principal-header">
				
                <h1>
				{
					myTitle=="/"? "Sociedad Entomológica Cruceña" : myTitle
				}</h1>
                <Link to = "/register">
                    <button className="button-header button-2"   >Sé un Miembro</button>
                </Link>
            </div>
        </header>
    )
    

}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);