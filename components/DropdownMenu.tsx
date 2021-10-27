import { useState, useEffect, useRef } from 'react';
import themeData from '../constants/themeData';
import ThemeData from '../types/ThemeData';
import Theme from '../types/Theme';
import { FiX } from 'react-icons/fi';

interface DropdownProps{
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean)=>void;
  setTheme: (arg: Theme)=>void;
}

const DropdownMenu = (props: DropdownProps) =>{
  const menuRef = useRef<any>();
  const themes: ThemeData[] = Object.values(themeData);
  const closeMenu = () =>{
    props.setIsMenuOpen(false);
  }
  useEffect(()=>{
    if(props.isMenuOpen){
      menuRef.current.style.transform='translate(0, 0)'
    }else{
      menuRef.current.style.transform='translate(500px, 0)'
    }
  }, [props.isMenuOpen])
  return (
    <ul className='dropdown__container' ref={menuRef}>
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
          return (
            <li
              className='dropdown__item'
              key={index}
              onClick={(e: any)=>props.setTheme(value.id)}
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
