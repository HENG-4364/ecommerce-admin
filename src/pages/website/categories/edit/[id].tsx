import { Title } from '@/components/Title';
import CategoryUpdateScreen from '@/screen/Website/Categories/Edit';
import React from 'react';

export default function UpdateCategoryPage () {
    return (
        <>
            <Title title={'Update Category'} />
            <CategoryUpdateScreen />
        </>
    );
}
