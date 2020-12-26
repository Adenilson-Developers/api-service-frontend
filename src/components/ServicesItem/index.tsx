import React from 'react';

import './styles.css';

interface ServicesItemProps {
    title: string;
    description: string;
}

const  ServicesItem: React.FC<ServicesItemProps> = (props) => {
    return(
        <article className="services-item">
        <header>
        <strong>{props.title}</strong>
        </header>
            <p>{props.description}</p>
            
        <footer>
              <strong>{props.children}</strong>
        </footer>

        </article>
    );
}

export default ServicesItem;