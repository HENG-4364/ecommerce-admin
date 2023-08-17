
import { QUERY_PRODUCTS_CATEGORY_DETAIL } from "@/graphql";
import { client } from "@/libs/apollo";

export default function ProductDetailPage({ category }: any) {
  return (
    <>
      <h1>{category.category_name}</h1>
    </>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const { id } = params;

  const { data } = await client.query({
    query: QUERY_PRODUCTS_CATEGORY_DETAIL,
    variables: {
      id: Number(id),
    },
  });

  return {
    props: {
      category: data.productCategory,
    },
  };
};
