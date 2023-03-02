import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import styles from './CartItem.module.css'

const CartItem = (props) => {
    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            item: title,
            image,
            price,
            description,
        }))
    };
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    };

    const { title, quantity, total, price, id, image, description } = props.item;

    return (
        <div className={styles.card}>
                <li>
                    <div className={styles.image}>
                        <img src={image} alt={title} />
                    </div>
                    <div className={styles.detail}>
                        <h1>{title}</h1>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.nums}>
                        <p>Price: ₹{total.toFixed(2)} (₹{price}/item)</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className={styles.button}>
                        <button onClick={addItemHandler}>+</button>
                        <button onClick={removeItemHandler}>-</button>
                    </div>
                </li>
        </div>
    )
}

export default CartItem

