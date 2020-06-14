import React from 'react';
import './hero.scss';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Hero(props){
    return (
            <div className="hero-container">
                <div className="container">
                    <p className="hero__title">{props.Title}</p>
                    <Link to={props.Url}>
                        <Button variant="primary" type="button" className="hero__button">{props.ButtonText}</Button>
                    </Link>
                </div>    
            </div>
    );
}

export default Hero