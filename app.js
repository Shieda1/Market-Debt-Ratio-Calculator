// https://calculator.swiftutors.com/market-debt-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marketDebtRatioRadio = document.getElementById('marketDebtRatioRadio');
const totalLiabilitiesRadio = document.getElementById('totalLiabilitiesRadio');
const marketValueofEquityRadio = document.getElementById('marketValueofEquityRadio');

let marketDebtRatio;
let totalLiabilities = v1;
let marketValueofEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marketDebtRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Liabilities';
  variable2.textContent = 'Market Value of Equity';
  totalLiabilities = v1;
  marketValueofEquity = v2;
  result.textContent = '';
});

totalLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Market Debt Ratio';
  variable2.textContent = 'Market Value of Equity';
  marketDebtRatio = v1;
  marketValueofEquity = v2;
  result.textContent = '';
});

marketValueofEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Market Debt Ratio';
  variable2.textContent = 'Total Liabilities';
  marketDebtRatio = v1;
  totalLiabilities = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marketDebtRatioRadio.checked)
    result.textContent = `Market Debt Ratio = ${computeMarketDebtRatio().toFixed(2)} %`;

  else if(totalLiabilitiesRadio.checked)
    result.textContent = `Total Liabilities = ${computeTotalLiabilities().toFixed(2)}`;

  else if(marketValueofEquityRadio.checked)
    result.textContent = `Market Value of Equity = ${computeMarketValueofEquity().toFixed(2)}`;
})

// calculation

function computeMarketDebtRatio() {
  return (Number(totalLiabilities.value) / (Number(totalLiabilities.value) + Number(marketValueofEquity.value))) * 100;
}

function computeTotalLiabilities() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeMarketValueofEquity() {
  return (Number(totalLiabilities.value) / (Number(marketDebtRatio.value) / 100)) - Number(totalLiabilities.value);
}