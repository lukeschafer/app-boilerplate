export interface CurrencyPlanPrices {
  symbol: string;
  code: string;
  basic: number;
  trial: number;
  trialThereafter: number;
  perpetual: number;
}

export interface PricingConfig {
  USD: CurrencyPlanPrices;
  AUD: CurrencyPlanPrices;
}

export const PRICING_CONFIG: PricingConfig = {
  USD: {
    symbol: '$',
    code: 'USD',
    basic: 7,
    trial: 1,
    trialThereafter: 7,
    perpetual: 119,
  },
  AUD: {
    symbol: '$',
    code: 'AUD',
    basic: 9,
    trial: 1,
    trialThereafter: 9,
    perpetual: 149,
  },
};
