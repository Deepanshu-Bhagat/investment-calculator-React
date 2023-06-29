import React, { useState } from 'react';
import style from './FormInput.module.css';
const FormInput = (props) => {
  const [curSavings, setCurSavings] = useState('');
  const [yearSavings, setYearSavings] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');

  const inputChangeHandler = (input, value) => {
    if (input === 'current-savings') setCurSavings(value);
    else if (input === 'yearly-contribution') setYearSavings(value);
    else if (input === 'expected-return') setInterest(value);
    else setDuration(value);
  };
  const resetHandler = (e) => {
    setCurSavings('');
    setYearSavings('');
    setInterest('');
    setDuration('');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const savingsData = {
      curSavings: +curSavings,
      yearSavings: +yearSavings,
      interest: +interest,
      duration: +duration,
    };
    props.onCalculate(savingsData);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={curSavings}
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={yearSavings}
            onChange={(e) =>
              inputChangeHandler('yearly-contribution', e.target.value)
            }
          />
        </p>
      </div>
      <div className={style['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={interest}
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={duration}
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type='reset' className={style.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type='submit' className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormInput;
