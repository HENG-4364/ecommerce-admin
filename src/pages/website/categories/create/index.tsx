import { Title } from '@/components/Title';
import CategoryCreateScreen from '@/screen/Website/Categories/Create';
import React from 'react';

export default function CreateCategory() {
  return (
    <>
      <Title title={'Create New Category'} />
      <CategoryCreateScreen />
    </>
  );
}
