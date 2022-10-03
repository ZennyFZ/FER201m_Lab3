import React, { Component } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
export default function Navigation(){
    const { theme, toggle, dark } = useContext(ThemeContext)
        return (
            <div>
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul className='navi'>
                        <li><a href='#'>
                            <img className='logo' src='assets/images/icon.png' />    
                            </a>
                        </li>
                        <li><Link className='active' to='/'>Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <div style={{position: 'absolute', right: '0'}}>
                            <a className='switch-mode' href='#' onClick={toggle}
                            style={{
                                color: theme.color,
                                outline: 'none',
                            }}>
                                Switch Theme to {!dark ? 'Dark' : 'Light'} mode
                            </a>
                        </div>
                    </ul>
                </nav>
             </div>
        )
}