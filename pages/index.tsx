import { useEffect, useState } from 'react';
import buttonConfig from '../constants/calcButtonConfig';
import { calcMathString } from '../utils/engine';

interface CalcButton {
  symbol: string;
  actionType: string;
  action: string;
  width:  number;
  buttonClass: string;
}

const Index = () =>{
  return (
    <div className='index__container'>
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
      if(buttonClass == 'general'){
        if(display == '0'){
          setDisplay(action)
        }else{
          setDisplay(display+action);
        }
      }else if(buttonClass == 'secondaryOp'){
        if(actionType == 'clear'){
          setDisplay('0');
        }else if(actionType == 'plus-minus'){
          setDisplay((calcMathString(display)*-1).toString());
        }else if(actionType == 'percentageConversion'){
          setDisplay((calcMathString(display)*0.01).toString());
        }
      }else if(buttonClass == 'primaryOp'){
        const lastCharIndex = display.length-1;
        const lastChar = display[lastCharIndex];
        const isLastCharPrimary: boolean = primaryOps.includes(lastChar);
        if(!isLastCharPrimary){
          if(actionType == 'devide'){
            setDisplay(display+'/');
          }else if(actionType == 'multiply'){
            setDisplay(display+'*');
          }else if(actionType == 'subtract'){
            setDisplay(display+'-');
          }else if(actionType == 'add'){
            setDisplay(display+'+');
          }else if(actionType == 'equals'){
            setDisplay(calcMathString(display).toString());
          }
        }else if(isLastCharPrimary && lastChar!=action && lastChar != '='){
          if(actionType == 'devide'){
            setDisplay(display.slice(0, lastCharIndex)+'/');
          }else if(actionType == 'multiply'){
            setDisplay(display+'*');
            setDisplay(display.slice(0, lastCharIndex)+'*');
          }else if(actionType == 'subtract'){
            setDisplay(display+'-');
            setDisplay(display.slice(0, lastCharIndex)+'-');
          }else if(actionType == 'add'){
            setDisplay(display+'+');
            setDisplay(display.slice(0, lastCharIndex)+'+');
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
