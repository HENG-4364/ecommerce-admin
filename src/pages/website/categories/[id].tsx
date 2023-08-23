import TableCategoriesDetailList from '@/components/TableCategoryDetail';
import { Title } from '@/components/Title';
import { QUERY_PRODUCTS_CATEGORY_DETAIL } from '@/graphql';
import { client } from '@/libs/apollo';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function CategoryDetailPage({ category }: any) {
  const router = useRouter();
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORY_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });
  if (loading || !data) return <>Loading</>;
  return (
    <>
      <Title title={`Category: ${data.productCategory?.category_name}`} />
      <div className="row">
        <div className="col-9">
          <TableCategoriesDetailList data={data.productCategory?.products} />
        </div>
      </div>
    </>
  );
}
