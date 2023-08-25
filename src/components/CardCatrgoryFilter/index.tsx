import { QUERY_PRODUCTS_CATEGORIES } from '@/graphql';
import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
export default function CardCategoryFilter() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORIES, {});
  if (loading || !data) return <>Loading...</>;
  const category = data.productCategories.map((category: any) => {
    return {
      label: category?.category_name,
      value: category?.id,
    };
  });
  return (
    <>
      <Card className="border-0">
        <CardBody>
          <CardTitle className="h4 mb-4">Filter</CardTitle>
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="" className="fw-bolder">
                    Search By Name
                  </Label>
                  <Input
                    id=""
                    name="name"
                    placeholder="Name of Product"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Label for="" className="fw-bolder">
                  Category
                </Label>
                <Select
                  onChange={(option: any) => {
                    setSelectedCategoryId(option.value);
                  }}
                  required
                  options={category}
                  placeholder={'Select Category'}
                />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
