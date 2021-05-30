import React from 'react';

import '../styles/components/Footer.css';

const Footer = () =>
{
    return(
        <footer>
            <nav class="social-network">
                <ul><a href = "https://facebook.com" target = "_blank"><i class="fab fa-facebook"></i></a></ul>
                <ul><a href = "https://youtube.com" target = "_blank"><i class="fab fa-youtube"></i></a></ul>
                <ul><a href = "https://instagram.com" target = "_blank" ><i class="fab fa-instagram"></i></a></ul>
            </nav>
            <h2>Sociedad Entomológica Cruceña</h2>
            <p>Made by @Marcelo_Vargas_Avila</p>
        </footer>
    )
}

export default Footer;