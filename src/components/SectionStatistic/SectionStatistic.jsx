import PropTypes from 'prop-types';
import css from './SectionStatistic.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload Stats</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
