import React from 'react'

interface CardOptionsProps {
    title: string,
    image?: string
}

const CardOptions: React.FC<CardOptionsProps> = ({ title, image }) => {
    return (
        <div>
            {title}
            <img src={image} alt={title} />
        </div>
    )
}

export default CardOptions;