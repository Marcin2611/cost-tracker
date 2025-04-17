'use client';

import { useEffect, useState } from 'react';
import { Category } from '@/models/categories';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('api/categories');
      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li style={{ margin: '1rem auto', width: '400px' }} key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesPage;
