import React from 'react';
import ResultItem from './ResultItem';
import style from './Result.module.css';

const Result = (props) => {
  return (
    <table className={style.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          return <ResultItem key={item.year} {...item} />;
        })}
      </tbody>
    </table>
  );
};

export default Result;
