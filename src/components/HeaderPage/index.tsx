import React from 'react';
import { Link } from 'react-router-dom';

import setvoltar from '../../assets/images/icons/back.svg';
import hearticon from '../../assets/images/icons/heart.svg';

import './styles.css';

interface HeaderPageProps {
    title: string;
    description?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = (props) => {
    return(
        <header className="header-page">
        <div className="top-bar-container">
            <Link to="/">
                <img src={setvoltar} alt="Voltar"/>
            </Link>
            <img src={hearticon} alt="heart" />
        </div>

        <div className="header-content">
           <strong>{props.title}</strong>
           { props.description && <p>{props.description}</p>}
           {props.children}
        </div>

    </header>
    );
}

export default HeaderPage;