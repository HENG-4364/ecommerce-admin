import { Title } from '@/components/Title';
import CategoryUpdateScreen from '@/screen/Website/Categories/Edit';
import React from 'react';

export default function UpdateCategory () {
    return (
        <>
            <Title title={'Update Category'} />
            <CategoryUpdateScreen />
        </>
    );
}
