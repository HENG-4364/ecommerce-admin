import { QUERY_PRODUCTS_CATEGORIES } from '@/graphql';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Badge, Stack } from 'react-bootstrap';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';

export default function TableCategoriesList() {
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORIES, {});
  if (loading || !data) return <>Loading...</>;
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link
          href={'/website/categories/create'}
          className=" btn btn-primary text-light mb-3"
        >
          <i className="fa fa-add" /> New Category
        </Link>
        <Link
          className="btn btn-danger mb-3 text-light"
          style={{ marginLeft: 10 }}
          href={''}
          onClick={handleClick}
        >
          <i className="fa-solid fa-angle-left" /> Back
        </Link>
      </div>
      <Card className="border-0">
        <CardBody>
          <CardTitle className="h4 mb-4">All categories</CardTitle>
          <div className="table-responsive">
            <Table
              className="table-centered table-nowrap mb-0 table-borderless"
              hover
              striped
            >
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Icon</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.productCategories.map((productCategory: any) => {
                  return (
                    <>
                      <tr>
                        <td>{productCategory.id}</td>
                        <td
                          style={{
                            whiteSpace: 'break-spaces',
                            width: '70%',
                          }}
                        >
                          {productCategory.category_name}
                        </td>
                        <td>dfsdf</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Badge
                              bg="primary"
                              style={{ fontSize: '10px', padding: '5px 10px' }}
                            >
                              PUBLIC
                            </Badge>
                          </Stack>
                        </td>
                        <td>
                          <Link href={`/website/categories/edit/${productCategory.id}`}
                            className="btn btn-primary btn-sm btn-rounded waves-effect waves-light text-light"
                            style={{ marginRight: 12 }}
                          >
                            <a className="fa-solid fa-pen-to-square"></a> Edit
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
