import { memo } from 'react';
import MenuItem from './MenuItem';

function MenuCategory({ category, items }) {
  return (
    <div className="menu-category" data-category={category.value}>
      <h3 className="heading">{category.title}</h3>
      <div className="menu-grid">
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default memo(MenuCategory);
