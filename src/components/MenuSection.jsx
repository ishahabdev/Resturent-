import { useMemo } from 'react';
import { CATEGORIES, MENU } from '../data/menu';
import MenuCategory from './MenuCategory';
import useReveal from '../hooks/useReveal';

export default function MenuSection({ activeCategory }) {
  const ref = useReveal();

  const visibleCategories = useMemo(() => {
    if (activeCategory === 'all') return CATEGORIES;
    return CATEGORIES.filter((category) => category.value === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" ref={ref}>
      <h2 className="heading">Our Menu</h2>

      {visibleCategories.map((category) => (
        <MenuCategory key={category.value} category={category} items={MENU[category.value]} />
      ))}
    </section>
  );
}
