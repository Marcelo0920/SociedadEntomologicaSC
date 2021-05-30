import React from 'react';

import '../styles/components/ArticuloPublicacion.css';
import articulo3 from '../static/article_1.png';

class ArticuloPublicacion extends React.Component
{
	render()
	{
		return (
			<article className="articulos-publicacion">
			  <div>
				<p>
					{/* <strong>{this.props.publicacion.title}</strong> */}
				  <strong>Lorem Ipsum</strong>
				</p>
				<p>
					{/* {this.props.publicacion.content} */}
				  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum
				  dolorem quod veniam sed, iure eveniet? Itaque, illum distinctio.
				  Repellat, natus! Id voluptate quia porro ratione magnam dolorem
				  temporibus provident.Lore Lorem ipsum dolor sit amet consectetur
				  adipisicing elit. Reiciendis ea doloribus illum cum modi error tempore
				  molestiae molestias facere consectetur. Debitis natus nemo quo modi
				  molestias impedit laudantium sunt corrupti!
				</p>
			  </div>
			  <img src={articulo3} alt="articulo 3" />
			  {/* <img src = {this.props.publicacion.img} /> */}
			</article>
		  );
		};
	}
  
export default ArticuloPublicacion;
