import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(data => (
          <li key={data.id} className={css.item}>
            <span className={css.text}>{data.label}</span>
            <span className={css.text}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
