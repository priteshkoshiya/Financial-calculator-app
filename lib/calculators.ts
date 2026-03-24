// Stock Profit/Loss Calculator
export function calculateStockProfitLoss(
  quantity: number,
  buyPrice: number,
  sellPrice: number,
  quantityToSell: number
) {
  const totalInvestment = quantity * buyPrice;
  const totalSale = quantityToSell * sellPrice;
  const profitLoss = totalSale - quantityToSell * buyPrice;
  const profitLossPercentage = (profitLoss / (quantityToSell * buyPrice)) * 100;
  
  return {
    totalInvestment,
    totalSale,
    profitLoss,
    profitLossPercentage,
    remainingQuantity: quantity - quantityToSell,
  };
}

// Stock Average Calculator
export function calculateStockAverage(
  purchases: Array<{ units: number; pricePerShare: number }>
) {
  const totalUnits = purchases.reduce((sum, p) => sum + p.units, 0);
  const totalCost = purchases.reduce((sum, p) => sum + p.units * p.pricePerShare, 0);
  const averagePrice = totalCost / totalUnits;
  
  return {
    totalUnits,
    totalCost,
    averagePrice,
  };
}

// SIP Calculator (Systematic Investment Plan)
export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number
) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  
  const maturityAmount =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));
  
  const totalInvested = monthlyInvestment * months;
  const gainedAmount = maturityAmount - totalInvested;
  
  return {
    maturityAmount,
    totalInvested,
    gainedAmount,
  };
}

// SWP Calculator (Systematic Withdrawal Plan)
export function calculateSWP(
  initialInvestment: number,
  monthlyWithdrawal: number,
  annualRate: number,
  months: number
) {
  let balance = initialInvestment;
  const monthlyRate = annualRate / 12 / 100;
  let totalWithdrawn = 0;
  
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyRate) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
    if (balance < 0) {
      balance = 0;
      break;
    }
  }
  
  return {
    finalAmount: Math.max(0, balance),
    totalWithdrawn,
    gainedAmount: Math.max(0, balance + totalWithdrawn - initialInvestment),
  };
}

// EMI Calculator (Equated Monthly Installment)
export function calculateEMI(
  principal: number,
  annualRate: number,
  months: number
) {
  const monthlyRate = annualRate / 12 / 100;
  
  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  
  const totalPayable = emi * months;
  const totalInterest = totalPayable - principal;
  
  return {
    emi,
    totalPayable,
    totalInterest,
  };
}

// CAGR Calculator (Compound Annual Growth Rate)
export function calculateCAGR(
  initialAmount: number,
  finalAmount: number,
  years: number
) {
  const cagr =
    (Math.pow(finalAmount / initialAmount, 1 / years) - 1) * 100;
  
  return {
    cagr,
    totalGain: finalAmount - initialAmount,
    gainPercentage: ((finalAmount - initialAmount) / initialAmount) * 100,
  };
}

// Stock Split Calculator
export function calculateStockSplit(
  currentQuantity: number,
  currentPrice: number,
  splitRatio: string
) {
  const [from, to] = splitRatio.split(":").map(Number);
  const newQuantity = currentQuantity * (to / from);
  const newPrice = currentPrice * (from / to);
  const investmentValue = newQuantity * newPrice;
  
  return {
    newQuantity,
    newPrice,
    investmentValue,
  };
}

// Bonus Share Calculator
export function calculateBonusShare(
  currentQuantity: number,
  currentPrice: number,
  bonusRatio: string
) {
  const [from, to] = bonusRatio.split(":").map(Number);
  const bonusShares = currentQuantity * (to / from);
  const totalQuantity = currentQuantity + bonusShares;
  const adjustedPrice = currentPrice * (currentQuantity / totalQuantity);
  const totalValue = totalQuantity * adjustedPrice;
  
  return {
    bonusShares,
    totalQuantity,
    adjustedPrice,
    totalValue,
  };
}

// Lumpsum Calculator
export function calculateLumpsum(
  amount: number,
  annualRate: number,
  years: number
) {
  const maturityAmount = amount * Math.pow(1 + annualRate / 100, years);
  const gainedAmount = maturityAmount - amount;
  
  return {
    maturityAmount,
    gainedAmount,
    gainPercentage: (gainedAmount / amount) * 100,
  };
}

// Rule of 72 Calculator
export function calculateRuleOf72(rate: number) {
  const yearsToDouble = 72 / rate;
  
  return {
    yearsToDouble,
  };
}

// Percentage Calculator
export function calculatePercentage(
  amount: number,
  percentage: number
) {
  const result = (amount * percentage) / 100;
  const total = amount + result;
  
  return {
    percentageAmount: result,
    total,
  };
}
