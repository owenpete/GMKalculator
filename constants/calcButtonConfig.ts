const config = {
  row1: {
    'clear' : {
      symbol: 'C',
      actionType: 'clear',
      action: 'clear',
      width: 1,
      buttonClass: 'secondaryOp'
    },
    'plus-minus' : {
      symbol: '±',
      actionType: 'plus-minus',
      action: '*-1',
      width: 1,
      buttonClass: 'secondaryOp'
    },
    'precentage' : {
      symbol: '%',
      actionType: 'precentageConversion',
      action: '/100',
      width: 1,
      buttonClass: 'secondaryOp'
    },
    'devide' : {
      symbol: '÷',
      actionType: 'devide',
      action: '/',
      width: 1,
      buttonClass: 'primaryOp'
    },
  },
  row2: {
    '7' : {
      symbol: '7',
      actionType: '7',
      action: '7',
      width: 1,
      buttonClass: 'general'
    },
    '8' : {
      symbol: '8',
      actionType: '8',
      action: '8',
      width: 1,
      buttonClass: 'general'
    },
    '9' : {
      symbol: '9',
      actionType: '9',
      action: '9',
      width: 1,
      buttonClass: 'general'
    },
    'multiply' : {
      symbol: '×',
      actionType: 'multiply',
      action: '*',
      width: 1,
      buttonClass: 'primaryOp'
    },
  },
  row3: {
    '4' : {
      symbol: '4',
      actionType: '4',
      action: '4',
      width: 1,
      buttonClass: 'general'
    },
    '5' : {
      symbol: '5',
      actionType: '5',
      action: '5',
      width: 1,
      buttonClass: 'general'
    },
    '6' : {
      symbol: '6',
      actionType: '6',
      action: '6',
      width: 1,
      buttonClass: 'general'
    },
    'minus' : {
      symbol: '÷',
      actionType: 'devide',
      action: '/',
      width: 1,
      buttonClass: 'primaryOp'
    },
  },
  row4: {
    '1' : {
      symbol: '1',
      actionType: '1',
      action: '1',
      width: 1,
      buttonClass: 'general'
    },
    '2' : {
      symbol: '2',
      actionType: '2',
      action: '2',
      width: 1,
      buttonClass: 'general'
    },
    '3' : {
      symbol: '3',
      actionType: '3',
      action: '3',
      width: 1,
      buttonClass: 'general'
    },
    'plus' : {
      symbol: '+',
      actionType: 'plus',
      action: '+',
      width: 1,
      buttonClass: 'primaryOp'
    },
  },
  row5: {
    '0' : {
      symbol: '0',
      actionType: '0',
      action: '0',
      width: 2,
      buttonClass: 'general'
    },
    'decimalPoint' : {
      symbol: '.',
      actionType: 'decimalPoint',
      action: '.',
      width: 1,
      buttonClass: 'general'
    },
    'equals' : {
      symbol: '=',
      actionType: 'equals',
      action: '=',
      width: 1,
      buttonClass: 'primaryOp'
    },
  }
}

export default config;
