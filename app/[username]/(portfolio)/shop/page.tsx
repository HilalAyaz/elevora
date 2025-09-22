import React from 'react';

const products = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Mug', price: 10 },
    { id: 3, name: 'Sticker', price: 5 },
];

export default function ShopPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Shop</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: 16 }}>
                        <span style={{ fontWeight: 'bold' }}>{product.name}</span> - ${product.price}
                        <button style={{ marginLeft: 12 }}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}