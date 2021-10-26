import buttonConfig from '../constants/calcButtonConfig';

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

    return (
      buttonRow.map((value: CalcButton)=>{
        return (
          <input
            className={
              `calc__input
              ${value.width==2?'calc__input--2' : 'calc__input--1'}
              calc__input--${value.buttonClass}
              `
            }
            value={value.symbol}
            type='button'
          />
        )
      })
    )
  }

  return (
    <div className='calc'>
      <div className='calc__display'>
        <span className='display__value'>24+45</span>
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
