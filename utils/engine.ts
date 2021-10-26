import { evaluate } from 'mathjs';

export const calcMathString = (mathString: string): number =>{
  const answer: number = evaluate(mathString);
  return answer;
}
