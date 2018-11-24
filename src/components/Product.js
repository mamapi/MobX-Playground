import React from 'react'

const Product = ({ id, name, tags, isSold, onBuyClick }) => {

    const handleClick = () => {
        onBuyClick(id)
    }

    return (
        <div>
            <span style={{ textDecoration: isSold ? 'line-through' : 'none' }}>{name}: </span>
            <button onClick={handleClick}>
                Buy
        </button>
            {tags.map(tag =>
                <p key={tag}>{tag}</p>
            )}
        </div>
    )
}

export default Product