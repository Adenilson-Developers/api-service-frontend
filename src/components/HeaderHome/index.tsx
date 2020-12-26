import React from 'react';

import './styles.css';

interface HeaderHomeProps {
    title: string;
}

const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    return(
        <header  id="header-home-page">
        <div className="header-top-bar">
           <strong>{props.title}</strong>
           {props.children}
        </div>
        </header>
    );
}

export default HeaderHome;