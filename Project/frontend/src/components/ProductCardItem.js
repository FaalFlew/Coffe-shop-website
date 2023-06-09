import logo from '../img/MockupProduct.png';
import '../css/Global.css'
import '../css/ProductCardItem.css'
import {Link} from 'react-router-dom';


const ProductCardItem = ({img, title, weight, type,price,source, imgAlt}) => {
  return (
    <article className="product-card">
    <Link to={source} className="product-card-link">
    <div className="product-card-container">
    <figure className="product-image">
      <img src={img} alt={imgAlt} />
    </figure>
    <header className="product-card-info">
      <h2 className="product-title">{title}</h2>
        <span className="product-type">{weight !== null ? `${type} | ${weight}g` : `${type}`}</span>
        <span className="price">${price}</span>
    </header>
    </div>
    </Link>
    
  </article>

  )
}

ProductCardItem.defaultProps = {
    img:logo,
    title: 'Coffee Bag',
    type:'Arabica',
    price:'5.99',
    imgAlt:'Coffee bag'

}

export default ProductCardItem