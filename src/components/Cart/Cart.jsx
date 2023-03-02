import { useSelector } from 'react-redux'

import CartItem from './CartItem'
import styles from './CartItem.module.css'

const Cart = () => {
    const CartItems = useSelector((state) => state.cart.items)

    return (
        <ul className={styles.ul}>
            {CartItems.map((item) => (
                <CartItem
                    key={item}
                    item={{
                        id: item.id,
                        title: item.name,
                        quantity: item.quantity,
                        image: item.image,
                        total: item.totalPrice,
                        price: item.price,
                        description: item.description
                    }}
                />
            ))}
        </ul>
    )
}

export default Cart
