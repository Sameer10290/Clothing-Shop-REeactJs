import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import styles from './ProductItem.module.css'

const ProductItem = (props) => {
    const dispatch = useDispatch()

    const { title, price, description, id, image } = props;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image,
            description,
        }))
    }

    return (
        <li className={styles.prods} key={id} id={id}>
            <div className={styles.card}>
                <img src={image} alt={title} />
                <h1>{title}</h1>
                <p>₹ {price}</p>
                <p className={styles.description}>{description}</p>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </li>
    )
}

export default ProductItem;
