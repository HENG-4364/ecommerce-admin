import { QUERY_PRODUCTS } from '@/graphql/Products';
import { useQuery } from '@apollo/client';
import { log } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Badge, Stack } from 'react-bootstrap';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';

export default function ProductTableList() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const { data, loading } = useQuery(QUERY_PRODUCTS, {});
  if (loading || !data) return <>Loading...</>;
  console.log(data);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link
          href={'/website/products/create'}
          className=" btn btn-primary text-light mb-3"
        >
          <i className="fa fa-add" /> New Product
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
          <CardTitle className="h4 mb-4">All Products</CardTitle>
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
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product: any, index: any) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td
                          style={{
                            whiteSpace: 'break-spaces',
                            width: '40%',
                          }}
                        >
                          {product.product_name}
                        </td>
                        <td>{product.price}</td>

                        <td>{product.category?.category_name}</td>
                        <td
                          style={{
                            whiteSpace: 'break-spaces',
                            width: '20%',
                          }}
                        >
                          {product.image}
                        </td>
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
                          <Link
                            href={`/website/products/edit/${product.id}`}
                            className="btn btn-primary btn-sm btn-rounded waves-effect waves-light text-light"
                            style={{ marginRight: 12 }}
                          >
                            <a className="fa-solid fa-pen-to-square text-light"></a>{' '}
                            Edit
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
