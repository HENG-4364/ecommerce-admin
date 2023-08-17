import { Title } from '@/components/Title';
import CatgoriesListScreen from '@/screen/Website/Categories';
import React from 'react';

export default function CategoryPage() {
  return (
    <>
      <Title title={'Product Categories'} />
      <div className='row'>
        <div className='col-9'>
          <CatgoriesListScreen />
        </div>
      </div>
    </>
  );
}
