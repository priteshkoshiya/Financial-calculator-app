// Stock Profit/Loss Calculator
// Formula: Profit/Loss = (Sell Price - Buy Price) × Quantity Sold
// Return % = (Profit/Loss / Total Cost) × 100
export function calculateStockProfitLoss(
  quantity: number,
  buyPrice: number,
  sellPrice: number,
  quantityToSell: number
) {
  const totalInvestment = quantity * buyPrice;
  const costOfQuantityToSell = quantityToSell * buyPrice;
  const totalSale = quantityToSell * sellPrice;
  const profitLoss = totalSale - costOfQuantityToSell;
  
  // Avoid division by zero
  const profitLossPercentage = costOfQuantityToSell === 0 
    ? 0 
    : (profitLoss / costOfQuantityToSell) * 100;
  
  return {
    totalInvestment: Math.round(totalInvestment * 100) / 100,
    costOfQuantityToSell: Math.round(costOfQuantityToSell * 100) / 100,
    totalSale: Math.round(totalSale * 100) / 100,
    profitLoss: Math.round(profitLoss * 100) / 100,
    profitLossPercentage: Math.round(profitLossPercentage * 100) / 100,
    remainingQuantity: quantity - quantityToSell,
  };
}

// Stock Average Calculator
// Formula: Average Price = Total Cost / Total Units
export function calculateStockAverage(
  purchases: Array<{ units: number; pricePerShare: number }>
) {
  if (!purchases || purchases.length === 0) {
    return {
      totalUnits: 0,
      totalCost: 0,
      averagePrice: 0,
    };
  }
  
  const totalUnits = purchases.reduce((sum, p) => sum + p.units, 0);
  const totalCost = purchases.reduce((sum, p) => sum + p.units * p.pricePerShare, 0);
  const averagePrice = totalUnits === 0 ? 0 : totalCost / totalUnits;
  
  return {
    totalUnits,
    totalCost: Math.round(totalCost * 100) / 100,
    averagePrice: Math.round(averagePrice * 100) / 100,
  };
}

// SIP Calculator (Systematic Investment Plan)
// Formula: FV = P × (((1 + r)^n - 1) / r) × (1 + r)
// Where: P = Monthly Investment, r = Monthly Rate, n = Number of months
export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number
) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  
  let maturityAmount = 0;
  
  // Handle edge case of 0% interest
  if (monthlyRate === 0) {
    maturityAmount = monthlyInvestment * months;
  } else {
    maturityAmount =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));
  }
  
  const totalInvested = monthlyInvestment * months;
  const gainedAmount = maturityAmount - totalInvested;
  
  return {
    maturityAmount: Math.round(maturityAmount * 100) / 100,
    totalInvested: Math.round(totalInvested * 100) / 100,
    gainedAmount: Math.round(gainedAmount * 100) / 100,
  };
}

// SWP Calculator (Systematic Withdrawal Plan)
// Calculates final amount after systematic monthly withdrawals with compound interest
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
    // Apply interest first, then withdraw
    balance = balance * (1 + monthlyRate) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
    
    // Stop if balance goes negative (can't withdraw more than available)
    if (balance < 0) {
      balance = 0;
      break;
    }
  }
  
  const finalAmount = Math.max(0, balance);
  const gainedAmount = finalAmount + totalWithdrawn - initialInvestment;
  
  return {
    finalAmount: Math.round(finalAmount * 100) / 100,
    totalWithdrawn: Math.round(totalWithdrawn * 100) / 100,
    gainedAmount: Math.round(gainedAmount * 100) / 100,
  };
}

// EMI Calculator (Equated Monthly Installment)
// Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
// Where: P = Principal, r = Monthly Rate, n = Number of months
export function calculateEMI(
  principal: number,
  annualRate: number,
  months: number
) {
  const monthlyRate = annualRate / 12 / 100;
  
  let emi = 0;
  
  // Handle edge case of 0% interest
  if (monthlyRate === 0) {
    emi = principal / months;
  } else {
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    emi = numerator / denominator;
  }
  
  const totalPayable = emi * months;
  const totalInterest = totalPayable - principal;
  
  return {
    emi: Math.round(emi * 100) / 100,
    totalPayable: Math.round(totalPayable * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}

// CAGR Calculator (Compound Annual Growth Rate)
// Formula: CAGR = ((Final Value / Initial Value) ^ (1 / Years)) - 1
export function calculateCAGR(
  initialAmount: number,
  finalAmount: number,
  years: number
) {
  if (initialAmount <= 0 || years <= 0) {
    return {
      cagr: 0,
      totalGain: 0,
      gainPercentage: 0,
    };
  }
  
  const cagr = (Math.pow(finalAmount / initialAmount, 1 / years) - 1) * 100;
  const totalGain = finalAmount - initialAmount;
  const gainPercentage = (totalGain / initialAmount) * 100;
  
  return {
    cagr: Math.round(cagr * 100) / 100,
    totalGain: Math.round(totalGain * 100) / 100,
    gainPercentage: Math.round(gainPercentage * 100) / 100,
  };
}

// Stock Split Calculator
// Formula: New Quantity = Current × (Split Ratio Numerator / Denominator)
// New Price maintains total value: Current Price × (Denominator / Numerator)
export function calculateStockSplit(
  currentQuantity: number,
  currentPrice: number,
  splitRatio: string
) {
  const [from, to] = splitRatio.split(":").map(Number);
  
  if (from <= 0 || to <= 0) {
    return {
      newQuantity: 0,
      newPrice: 0,
      investmentValue: 0,
    };
  }
  
  const newQuantity = currentQuantity * (to / from);
  const newPrice = currentPrice * (from / to);
  const investmentValue = newQuantity * newPrice;
  
  return {
    newQuantity: Math.round(newQuantity * 100) / 100,
    newPrice: Math.round(newPrice * 100) / 100,
    investmentValue: Math.round(investmentValue * 100) / 100,
  };
}

// Bonus Share Calculator
// Formula: Bonus Shares = Current × (Bonus Ratio Numerator / Denominator)
// Adjusted Price = Current Price × (Current Quantity / Total Quantity)
export function calculateBonusShare(
  currentQuantity: number,
  currentPrice: number,
  bonusRatio: string
) {
  const [from, to] = bonusRatio.split(":").map(Number);
  
  if (from <= 0 || to <= 0) {
    return {
      bonusShares: 0,
      totalQuantity: currentQuantity,
      adjustedPrice: currentPrice,
      totalValue: 0,
    };
  }
  
  const bonusShares = currentQuantity * (to / from);
  const totalQuantity = currentQuantity + bonusShares;
  const adjustedPrice = totalQuantity === 0 ? 0 : currentPrice * (currentQuantity / totalQuantity);
  const totalValue = totalQuantity * adjustedPrice;
  
  return {
    bonusShares: Math.round(bonusShares * 100) / 100,
    totalQuantity: Math.round(totalQuantity * 100) / 100,
    adjustedPrice: Math.round(adjustedPrice * 100) / 100,
    totalValue: Math.round(totalValue * 100) / 100,
  };
}

// Lumpsum Calculator
// Formula: FV = PV × (1 + r)^n
// Where: PV = Present Value, r = Annual Rate, n = Years
export function calculateLumpsum(
  amount: number,
  annualRate: number,
  years: number
) {
  const maturityAmount = amount * Math.pow(1 + annualRate / 100, years);
  const gainedAmount = maturityAmount - amount;
  const gainPercentage = amount === 0 ? 0 : (gainedAmount / amount) * 100;
  
  return {
    maturityAmount: Math.round(maturityAmount * 100) / 100,
    gainedAmount: Math.round(gainedAmount * 100) / 100,
    gainPercentage: Math.round(gainPercentage * 100) / 100,
  };
}

// Rule of 72 Calculator
// Formula: Years to Double = 72 / Annual Interest Rate
// Estimates how long it takes an investment to double at a given rate
export function calculateRuleOf72(rate: number) {
  const yearsToDouble = rate === 0 ? 0 : 72 / rate;
  
  return {
    yearsToDouble: Math.round(yearsToDouble * 100) / 100,
  };
}

// Percentage Calculator
// Formula: Percentage Amount = (Amount × Percentage) / 100
export function calculatePercentage(
  amount: number,
  percentage: number
) {
  const result = (amount * percentage) / 100;
  const total = amount + result;
  
  return {
    percentageAmount: Math.round(result * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}
