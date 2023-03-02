import data from '../../data/data.json'
import ProductItem from "./ProductItem"
import styles from './ProductItem.module.css'

const Products = () => {
    return (
        <>
            <ul className={styles.ul}>
                {data.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </>
    )
}

export default Products;
