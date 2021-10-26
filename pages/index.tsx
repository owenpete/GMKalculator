import { useEffect, useState } from 'react';
import buttonConfig from '../constants/calcButtonConfig';
import Theme from '../types/theme';
import { calcMathString } from '../utils/engine';
import { FiSliders } from 'react-icons/fi';
import DropdownMenu from '../components/DropdownMenu';

interface CalcButton {
  symbol: string;
  actionType: string;
  action: string;
  width:  number;
  buttonClass: string;
}

const Index = () =>{
  const [theme, setTheme] = useState<Theme>('botanical');
  const [prevTheme, setPrevTheme] = useState<Theme>(theme);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(()=>{
    document.body.classList.add(theme);
  }, [])
  useEffect(()=>{
    document.body.classList.replace(prevTheme, theme);
    setPrevTheme(theme);
  }, [theme]);

  const toggleMenu = () =>{
    setIsMenuOpen(true);
  }

  const handleThemeChange = (theme: Theme) =>{
    setTheme(theme);
  }

  return (
    <div className='index__container'>
      <div className='menu__container'>
        <FiSliders
          className='index__switch-theme'
          onClick={(e: any)=>toggleMenu()}
        />
        {isMenuOpen&&
          <DropdownMenu
            setIsMenuOpen={setIsMenuOpen}
            setTheme={handleThemeChange}
          />
        }
      </div>

      <Calculator
      />
    </div>
  );
}

const Calculator = () =>{
  const getPrimaryOps = (buttonConfig: Object)=>{
    let primaryKeys = [];
    const buttons: any[] = Object.values(buttonConfig);
    for(let i = 0; i < buttons.length; i++){
      const values: CalcButton[] = Object.values(buttons[i]);
      for(let j = 0; j < values.length; j++){
        if(values[j].buttonClass == 'primaryOp'){
          primaryKeys.push(values[j].action);
        }
      }
    }
    return primaryKeys;
  }

  const [display, setDisplay] = useState<string>("0");
  const primaryOps = getPrimaryOps(buttonConfig);

  const renderButtons = (rowNumber: number, buttonData: any) =>{
    let buttonRow: any;
    switch(rowNumber){
      case 1:
        buttonRow=Object.values(buttonData.row1);
        break;
      case 2:
        buttonRow=Object.values(buttonData.row2);
        break;
      case 3:
        buttonRow=Object.values(buttonData.row3);
        break;
      case 4:
        buttonRow=Object.values(buttonData.row4);
        break;
      case 5:
        buttonRow=Object.values(buttonData.row5);
        break;
    }

    const handleButtonClick = (event: any, actionType: string, action: string, buttonClass: string) =>{
      // mutable variable for the display value
      let localDisplay = display;
      const lastCharIndex = localDisplay.length-1;
      const lastChar = localDisplay[lastCharIndex];
      const isLastCharPrimary: boolean = primaryOps.includes(lastChar);
      if(localDisplay == 'ERROR'){
        localDisplay = "0";
      }
      if(buttonClass == 'general'){
        if(localDisplay == '0'){
          setDisplay(action)
        }else if(!(lastChar == '.' && action == '.')){
          setDisplay(localDisplay+action);
        }
      }else if(buttonClass == 'secondaryOp'){
        if(actionType == 'clear'){
          setDisplay('0');
        }else if(actionType == 'plus-minus'){
          setDisplay((parseInt(calcMathString(localDisplay))*-1).toString());
        }else if(actionType == 'percentageConversion'){
          setDisplay((parseInt(calcMathString(localDisplay))*0.01).toString());
        }
      }else if(buttonClass == 'primaryOp'){
        if(!isLastCharPrimary){
          if(actionType == 'devide'){
            setDisplay(localDisplay+'/');
          }else if(actionType == 'multiply'){
            setDisplay(localDisplay+'*');
          }else if(actionType == 'subtract'){
            setDisplay(localDisplay+'-');
          }else if(actionType == 'add'){
            setDisplay(localDisplay+'+');
          }else if(actionType == 'equals'){
            setDisplay(calcMathString(localDisplay).toString());
          }
        }else if(isLastCharPrimary && lastChar!=action && lastChar != '='){
          if(actionType == 'devide'){
            setDisplay(localDisplay.slice(0, lastCharIndex)+'/');
          }else if(actionType == 'multiply'){
            setDisplay(localDisplay+'*');
            setDisplay(localDisplay.slice(0, lastCharIndex)+'*');
          }else if(actionType == 'subtract'){
            setDisplay(localDisplay+'-');
            setDisplay(localDisplay.slice(0, lastCharIndex)+'-');
          }else if(actionType == 'add'){
            setDisplay(localDisplay+'+');
            setDisplay(localDisplay.slice(0, lastCharIndex)+'+');
          }
        }
      }else{
        console.error('no matching button class found.');
      }
    }

    return (
       buttonRow.map((value: CalcButton, index: number)=>{
        return (
          <input
            className={
              `calc__input
              ${value.width==2?'calc__input--2' : 'calc__input--1'}
              calc__input--${value.buttonClass}`
            }
            value={value.symbol}
            onClick={(e: any) => handleButtonClick(e, value.actionType, value.action, value.buttonClass)}
            type='button'
            key={index}
          />
        )
      })
    )
  }

  return (
    <div className='calc'>
      <div className='calc__display'>
        <span className='display__value'>{display}</span>
      </div>
      <div className='calc__row1'>
        {
          renderButtons(1, buttonConfig)
        }
      </div>
      <div className='calc__row2'>
        {
          renderButtons(2, buttonConfig)
        }
      </div>
      <div className='calc__row3'>
        {
          renderButtons(3, buttonConfig)
        }
      </div>
      <div className='calc__row4'>
        {
          renderButtons(4, buttonConfig)
        }
      </div>
      <div className='calc__row5'>
        {
          renderButtons(5, buttonConfig)
        }
      </div>
    </div>
  );
}

export default Index;
