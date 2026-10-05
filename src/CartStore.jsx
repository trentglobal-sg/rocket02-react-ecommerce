import { atom, useAtom } from 'jotai';

const initialCart = [
    {
        "id": 1,
        "product_id": 1,
        "quantity": 11,
        "name": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    }
]

const cartAtom = atom(initialCart);

export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const getCartTotal = () => {
        let total = 0;
        for (let c of cart) {
            total += c.price * c.quantity
        }
        return total;
    }

    const addToCart = (product) => {
        // findIndex returns -1 when not found
        const existingItemIndex = cart.findIndex(item => item.product_id === product.id);

        if (existingItemIndex ===-1) {
            const newCartItem = {
                id: Math.floor(Math.random() * 10000 + 1),
                product_id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                description: product.description,
                quantity: 1
            }
            const modifiedCart = [...cart, newCartItem];
            setCart(modifiedCart);
        } else {
            // how to update an object properly in JavaScript + React
            // 1. clone the object
            // 2. modify the clone
            // 3. replace the clone into the array
            const existingCartItem = cart[existingItemIndex];
            const cloned = {...existingCartItem, quantity: existingCartItem.quantity + 1}

            // .with takes two parameters
            // first parameter - the index of the item to replace
            // second parameter - the new item
            // .with will return a modified copy of the original array
            const modifiedCart = cart.with(existingItemIndex, cloned);
            setCart(modifiedCart);
        }

    }

    return {
        cart,
        getCartTotal,
        addToCart
    }
}