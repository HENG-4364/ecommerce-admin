import {
  MUTATION_REMOVE_PRODUCT_CATEGORY,
  QUERY_PRODUCTS_CATEGORIES,
} from '@/graphql';
import { gql, useMutation, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Badge, Button, Dropdown, Stack } from 'react-bootstrap';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import FxDropDown from '../Dropdown';
import Swal from 'sweetalert2';

export default function TableCategoriesList() {
  const [removeProductCategory] = useMutation(MUTATION_REMOVE_PRODUCT_CATEGORY);
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORIES, {});
  if (loading || !data) return <>Loading...</>;
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  const confirmToRemove = (removeProductCategoryId: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeProductCategory({
          variables: {
            removeProductCategoryId,
          },
          refetchQueries: ['productCategories'],
        });
      }
    });
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
                {data.productCategories.map(
                  (productCategory: any, index: any) => {
                    return (
                      <>
                        <tr>
                          <td>{index+1}</td>
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
                                style={{
                                  fontSize: '10px',
                                  padding: '5px 10px',
                                }}
                              >
                                PUBLIC
                              </Badge>
                            </Stack>
                          </td>
                          <td>
                            <FxDropDown>
                              <Dropdown.Item
                                href={`/website/categories/edit/${productCategory.id}`}
                              >
                                <i className="fa-solid fa-pen-to-square  me-1"></i>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                href=""
                                onClick={() =>
                                  confirmToRemove(productCategory.id)
                                }
                              >
                                <i className="fa-solid fa-trash  me-1"></i>
                                Remove
                              </Dropdown.Item>
                            </FxDropDown>
                          </td>
                        </tr>
                      </>
                    );
                  }
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
