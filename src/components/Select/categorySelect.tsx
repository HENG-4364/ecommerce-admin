import { QUERY_PRODUCTS_CATEGORIES } from '@/graphql';
import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
type Props = {
  selectedCategoryId: number;
  setSelectedCategoryId: (value: any) => void;
  category: any;
};

export const CategorySelect: React.FC<Props> = ({
  selectedCategoryId,
  setSelectedCategoryId,
  category,
}) => {
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORIES, {});
  if (loading || !data) return <>Loding...</>;
  const categories = data.productCategories.map((category: any) => {
    return {
      label: category?.category_name,
      value: category?.id,
    };
  });

  const defaultCategory = data?.productCategories.find(
    (category: any) => category.id === selectedCategoryId
  );

  return (
    <Select
      onChange={(option: any) => {
        setSelectedCategoryId(option.value);
      }}
      required
      options={categories}
      placeholder={'Select Category'}
      defaultValue={{
        value: category?.id,
        label: category?.category_name,
      }}
    />
  );
};
