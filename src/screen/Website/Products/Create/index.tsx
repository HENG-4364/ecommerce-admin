import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
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
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useMutation, useQuery } from '@apollo/client';
import { log } from 'console';
import { MUTATION_CREATE_PRODUCT } from '@/graphql/Products';
import { QUERY_PRODUCTS_CATEGORIES } from '@/graphql';
import Swal from 'sweetalert2';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
type FormInputs = {
  product_name: string;
  description: string;
  sumary: string;
  image: string;
  price:number;
};
export default function ProductCreateScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  const [formData, setFormData] = useState<FormInputs>({
    product_name: '',
    description: '',
    sumary: '',
    image: '',
    price:0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [createProduct] = useMutation(MUTATION_CREATE_PRODUCT);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createProduct({
      variables: {
        input: {
          product_name: formData?.product_name,
          description: formData?.description,
          summary: formData?.sumary,
          image: formData?.image,
          category_id: selectedCategoryId,
          price:Number(formData?.price),
        },
      },
      onCompleted: (data) => {
        if (data?.createProduct) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/website/products');
        }
      },
      refetchQueries: ['products'],
    });
    // console.log(formData)
  };
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
      <div className="page-content">
        <Row>
          <Col md={9}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div></div>
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
                      <Select
                        defaultValue={selectedCategoryId}
                        onChange={(option: any) => {
                          setSelectedCategoryId(option.value);
                        }}
                        required
                        options={category}
                        placeholder={'Select Category'}
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
