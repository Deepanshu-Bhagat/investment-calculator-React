import React, { useState } from 'react';
import Header from './components/Header/Header';
import FormInput from './components/Form/FormInput';
import Result from './components/Result/Result';

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    const initialInvestment = +userInput.curSavings;
    const yearlyData = [];

    let currentSavings = userInput.curSavings;
    const yearlyContribution = userInput.yearSavings;
    const expectedReturn = userInput.interest / 100;
    const duration = userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <FormInput onCalculate={calculateHandler} />
      {!results || results.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No investment calculated yet. </p>
      ) : (
        <Result items={results} />
      )}
    </div>
  );
}

export default App;
