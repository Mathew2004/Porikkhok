import React from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Button from '../Button';

const Navbar = () => {
    return (
        <div className='container'>
            <div className=" navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        পরীক্ষক 
                        {/* <img src="https://www.porikkhok.com/img/porikkhok-dark.png" className='w-100 h-5' alt="" /> */}
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Button/>
                        </li>
                        <li>
                            <ThemeSwitch />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;