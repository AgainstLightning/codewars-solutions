// https://www.codewars.com/kata/554a44516729e4d80b000012/train/typescript

export function nbMonths(startPriceOld: number, startPriceNew: number, savingPerMonth: number, percentLossByMonth: number): number[] {
    let savings: number = 0;
    let newCarPrice: number = startPriceNew;
    let oldCarPrice: number = startPriceOld;
    let currPercentLoss: number = percentLossByMonth;
    let monthCount: number = 0;
    
    
    while((savings + oldCarPrice) < newCarPrice) {
      monthCount++;
      if(monthCount % 2 == 0) currPercentLoss += 0.5;
      savings += savingPerMonth;
      newCarPrice -= ((newCarPrice / 100) * currPercentLoss);
      oldCarPrice -= ((oldCarPrice / 100) * currPercentLoss);
    }
    
    return [monthCount, Math.round((savings + oldCarPrice) - newCarPrice)];
}