import { memo, useCallback } from 'react';
import { FILTER_OPTIONS } from '../data/filters';

function MenuFilters({ activeCategory, onChange }) {
  const handleSelectChange = useCallback((event) => onChange(event.target.value), [onChange]);
  const handleButtonClick = useCallback((value) => () => onChange(value), [onChange]);

  return (
    <div className="menu-filters">
      <select className="filter-dropdown" value={activeCategory} onChange={handleSelectChange}>
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.selectLabel}
          </option>
        ))}
      </select>

      <div className="filter-buttons">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            data-category={option.value}
            className={`filter-btn${activeCategory === option.value ? ' active' : ''}`}
            onClick={handleButtonClick(option.value)}
          >
            {option.buttonLabel}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(MenuFilters);
