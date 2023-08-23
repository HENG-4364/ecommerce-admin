import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCTS_CATEGORIES } from '@/graphql';
import {
  MUTATION_UPDATE_PRODUCT,
  QUERY_PRODUCTS_DETAIL,
} from '@/graphql/Products';
import { CategorySelect } from '@/components/Select/categorySelect';
import Swal from 'sweetalert2';
type FormInputs = {
  product_name?: string;
  description?: string;
  sumary?: string;
  image?: string;
  price?: number;
};

function UpdateProductForm({ defaultValue }: { defaultValue: any }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    defaultValue ? defaultValue?.product?.category?.id : 0
  );
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateProduct({
      variables: {
        updateProductId: Number(router.query.id),
        input: {
          product_name: formData?.product_name,
          description: formData?.description,
          summary: formData?.sumary,
          image: formData?.image,
          category_id: selectedCategoryId,
          price: Number(formData?.price),
        },
      },
      onCompleted: (data) => {
        if (data?.updateProduct) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been changed',
            showConfirmButton: false,
            timer: 1500,
          });
          router.back();
        }
      },
      refetchQueries: ['products'],
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState<FormInputs>({
    product_name: defaultValue?.product?.product_name,
    description: defaultValue?.product?.description,
    sumary: defaultValue?.product?.sumary,
    image: defaultValue?.product?.image,
    price: defaultValue?.product?.price,
  });
  const [updateProduct] = useMutation(MUTATION_UPDATE_PRODUCT);

  return (
    <>
      <div className="page-content">
        <Row>
          <Col md={9}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div></div>
              <div
                className="btn btn-danger mb-3 text-light"
                style={{ marginLeft: 10 }}
                onClick={handleClick}
              >
                <i className="fa-solid fa-angle-left" /> Back
              </div>
            </div>
            <Card className="border-0">
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Product Name
                        </Label>
                        <Input
                          id=""
                          name="product_name"
                          placeholder="Product name"
                          type="text"
                          value={formData.product_name}
                          
                          required
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Description
                        </Label>
                        <Input
                          id=""
                          name="description"
                          placeholder="Description"
                          type="text"
                          value={formData.description}
                     
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Summary
                        </Label>
                        <Input
                          id=""
                          name="sumary"
                          placeholder="Summary"
                          type="text"
                          value={formData.sumary}
                       
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Image
                        </Label>
                        <Input
                          id=""
                          name="image"
                          placeholder="Image"
                          type="text"
                          value={formData.image}
                        
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Label for="" className="fw-bolder">
                        Category
                      </Label>
                      <CategorySelect
                        selectedCategoryId={selectedCategoryId}
                        setSelectedCategoryId={setSelectedCategoryId}
                        category={defaultValue.product.category}
                      />
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Price
                        </Label>
                        <Input
                          id=""
                          name="price"
                          placeholder="Price"
                          type="number"
                          value={formData.price}
                          onChange={handleChange}
                          
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="d-flex align-items-end">
                      <Button
                        className="btn btn-primary text-light border-0"
                        style={{ background: '#2980b9' }}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default function UpdateProductScreen() {
  const router = useRouter();
  const { data, loading } = useQuery(QUERY_PRODUCTS_DETAIL, {
    variables: {
      productId: Number(router.query.id),
    },
    fetchPolicy: 'no-cache',
  });
  if (loading || !data) return <>Loding...</>;
  return <UpdateProductForm defaultValue={data} />;
}
