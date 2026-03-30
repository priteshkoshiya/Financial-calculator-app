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

// Compound Interest Calculator
// Formula: A = P × (1 + r/n)^(n×t)
// frequency: 1=annually, 2=semiannually, 4=quarterly, 12=monthly, 365=daily
export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  frequency: number
) {
  const r = annualRate / 100;
  const amount = principal * Math.pow(1 + r / frequency, frequency * years);
  const interest = amount - principal;
  const effectiveRate = (Math.pow(1 + r / frequency, frequency) - 1) * 100;
  return {
    amount: Math.round(amount * 100) / 100,
    interest: Math.round(interest * 100) / 100,
    effectiveRate: Math.round(effectiveRate * 100) / 100,
    principal,
  };
}

// Savings Goal Calculator (Reverse SIP / Reverse Lumpsum)
// Given a target amount, how much to invest per month or as lumpsum?
export function calculateSavingsGoal(
  targetAmount: number,
  annualRate: number,
  years: number,
  mode: 'sip' | 'lumpsum'
) {
  if (mode === 'lumpsum') {
    const required = annualRate === 0
      ? targetAmount
      : targetAmount / Math.pow(1 + annualRate / 100, years);
    return {
      required: Math.round(required * 100) / 100,
      totalInvested: Math.round(required * 100) / 100,
      expectedGain: Math.round((targetAmount - required) * 100) / 100,
    };
  } else {
    const months = years * 12;
    const r = annualRate / 12 / 100;
    let required = 0;
    if (r === 0) {
      required = targetAmount / months;
    } else {
      required = (targetAmount * r) / ((Math.pow(1 + r, months) - 1) * (1 + r));
    }
    const totalInvested = required * months;
    return {
      required: Math.round(required * 100) / 100,
      totalInvested: Math.round(totalInvested * 100) / 100,
      expectedGain: Math.round((targetAmount - totalInvested) * 100) / 100,
    };
  }
}

// Retirement Calculator
// Calculates corpus needed and monthly savings required to retire comfortably
export function calculateRetirement(
  currentAge: number,
  retirementAge: number,
  monthlyExpense: number,
  inflationRate: number,
  returnRate: number,
  currentSavings: number,
  lifeExpectancy: number
) {
  const yearsToRetire = retirementAge - currentAge;
  const retirementDuration = lifeExpectancy - retirementAge;
  const monthlyExpenseAtRetirement = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetire);
  const monthlyRate = returnRate / 12 / 100;
  const retirementMonths = retirementDuration * 12;
  let corpusNeeded = 0;
  if (monthlyRate === 0) {
    corpusNeeded = monthlyExpenseAtRetirement * retirementMonths;
  } else {
    corpusNeeded = monthlyExpenseAtRetirement * ((1 - Math.pow(1 + monthlyRate, -retirementMonths)) / monthlyRate);
  }
  const grownSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToRetire);
  const additionalNeeded = Math.max(0, corpusNeeded - grownSavings);
  const months = yearsToRetire * 12;
  let monthlySavingsRequired = 0;
  if (months > 0) {
    if (monthlyRate === 0) {
      monthlySavingsRequired = additionalNeeded / months;
    } else {
      monthlySavingsRequired = (additionalNeeded * monthlyRate) / ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    }
  }
  return {
    corpusNeeded: Math.round(corpusNeeded * 100) / 100,
    monthlyExpenseAtRetirement: Math.round(monthlyExpenseAtRetirement * 100) / 100,
    grownSavings: Math.round(grownSavings * 100) / 100,
    additionalNeeded: Math.round(additionalNeeded * 100) / 100,
    monthlySavingsRequired: Math.round(Math.max(0, monthlySavingsRequired) * 100) / 100,
    yearsToRetire,
    retirementDuration,
  };
}

// Capital Gains Calculator (global — user sets their own tax rates)
export function calculateCapitalGains(
  purchasePrice: number,
  salePrice: number,
  quantity: number,
  holdingDays: number,
  shortTermTaxRate: number,
  longTermTaxRate: number,
  longTermThresholdDays: number = 365
) {
  const costBasis = purchasePrice * quantity;
  const saleValue = salePrice * quantity;
  const gain = saleValue - costBasis;
  const isLongTerm = holdingDays >= longTermThresholdDays;
  const taxRate = isLongTerm ? longTermTaxRate : shortTermTaxRate;
  const taxAmount = gain > 0 ? (gain * taxRate) / 100 : 0;
  const netGain = gain - taxAmount;
  const gainPercentage = costBasis === 0 ? 0 : (gain / costBasis) * 100;
  return {
    costBasis: Math.round(costBasis * 100) / 100,
    saleValue: Math.round(saleValue * 100) / 100,
    gain: Math.round(gain * 100) / 100,
    gainPercentage: Math.round(gainPercentage * 100) / 100,
    isLongTerm,
    taxRate,
    taxAmount: Math.round(taxAmount * 100) / 100,
    netGain: Math.round(netGain * 100) / 100,
  };
}

// XIRR Calculator — Newton-Raphson method
// Returns annualised return rate as a percentage
export function calculateXIRR(
  cashFlows: { date: Date; amount: number }[],
  guess: number = 0.1
): number {
  if (cashFlows.length < 2) return 0;
  const t0 = cashFlows[0].date.getTime();
  const times = cashFlows.map((cf) => (cf.date.getTime() - t0) / (365 * 24 * 60 * 60 * 1000));
  const amounts = cashFlows.map((cf) => cf.amount);
  let rate = guess;
  for (let iter = 0; iter < 200; iter++) {
    let f = 0;
    let df = 0;
    for (let i = 0; i < amounts.length; i++) {
      const factor = Math.pow(1 + rate, times[i]);
      f += amounts[i] / factor;
      df -= times[i] * amounts[i] / (factor * (1 + rate));
    }
    if (Math.abs(df) < 1e-10) break;
    const newRate = rate - f / df;
    if (Math.abs(newRate - rate) < 1e-7) { rate = newRate; break; }
    rate = newRate;
    if (rate <= -1) { rate = -0.999; }
  }
  return Math.round(rate * 10000) / 100;
}

// Net Worth Calculator
export function calculateNetWorth(
  assets: { name: string; value: number }[],
  liabilities: { name: string; value: number }[]
) {
  const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.value, 0);
  const netWorth = totalAssets - totalLiabilities;
  const debtToAssetRatio = totalAssets === 0 ? 0 : (totalLiabilities / totalAssets) * 100;
  return {
    totalAssets: Math.round(totalAssets * 100) / 100,
    totalLiabilities: Math.round(totalLiabilities * 100) / 100,
    netWorth: Math.round(netWorth * 100) / 100,
    debtToAssetRatio: Math.round(debtToAssetRatio * 100) / 100,
  };
}
