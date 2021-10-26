import { evaluate } from 'mathjs';

export const calcMathString = (mathString: string): string =>{
  try{
    const answer: string = evaluate(mathString).toString();
    return answer;
  }catch(err: any){
    return "ERROR"
  }
}
