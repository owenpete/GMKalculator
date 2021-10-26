import { useState, useEffect } from 'react';
import themeData from '../constants/themeData';
import ThemeData from '../types/ThemeData';
import Theme from '../types/Theme';
import { FiX } from 'react-icons/fi';

interface DropdownProps{
  setIsMenuOpen: (arg: boolean)=>void;
  setTheme: (arg: Theme)=>void;
}

const DropdownMenu = (props: DropdownProps) =>{
  const themes: ThemeData[] = Object.values(themeData);
  console.log(themes)
  const closeMenu = () =>{
    props.setIsMenuOpen(false);
  }
  return (
    <ul className='dropdown__container'>
      <div
        className='dropdown__exit'
        onClick={(e: any)=>closeMenu()}
      >
        <span>Themes</span>
        <FiX
        />
      </div>
      {
        themes.map((value: {name: Theme, primaryColor: string}, index: number)=>{
          console.log(value)
          return (
            <li
              className='dropdown__item'
              key={index}
              onClick={(e: any)=>props.setTheme(value.name)}
            >
              <span
                className='dropdown__color-icon'
                style={{
                  backgroundColor: `${value.primaryColor}`
                }}
              ></span>
              <span>{value.name}</span>
            </li>
          )
        })
      }
    </ul>
  );
}

export default DropdownMenu;
