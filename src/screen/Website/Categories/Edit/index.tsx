import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Form } from 'react-bootstrap';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useForm from '@/hook';
import { MUTATION_UPDATE_PRODUCT_CATEGORY, QUERY_PRODUCTS_CATEGORY_DETAIL } from '@/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { log } from 'console';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
type FormInputs = {
  category_name: string;
  icon: string;
};
export default function CategoryUpdateScreen() {

  const [selectedOption, setSelectedOption] = useState(null);
  const status = [
    { value: 'public', label: 'PUBLIC' },
    { value: 'pading', label: 'PADING' },
    { value: 'inprogress', label: 'INPROGRESS' },
    { value: 'review', label: 'REVIEW' },
  ];
  const router = useRouter();
  const handleClick = () => {
    router.push('/website/categories')
  };

  const [formData, setFormData] = useState<FormInputs>({
    category_name: '',
    icon: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [updateProductCategory] = useMutation(MUTATION_UPDATE_PRODUCT_CATEGORY);
  const { data, loading } = useQuery(QUERY_PRODUCTS_CATEGORY_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
    fetchPolicy: "no-cache",
  });
  if (loading || !data) return <>Loading...</>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateProductCategory({
      variables: {
        updateProductCategoryId: Number(router.query.id),
        input: {
          category_name: formData?.category_name
        }
      },
      onCompleted: (data) => {
        if (data?.updateProductCategory) {
          //   alert("Created Succesfully");
          router.push(`/website/categories`);
        }
      },
      refetchQueries: ["productCategories"],
    })
    // console.log(formData)

  };
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
                          Category Name
                        </Label>
                        <Input
                          id=""
                          name="category_name"
                          placeholder="Category name..."
                          type="text"
                          defaultValue={data.productCategory.category_name}
                          value={formData.category_name}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="" className="fw-bolder">
                          Icon
                        </Label>
                        <Input
                          id=""
                          name="icon"
                          placeholder="Icon..."
                          type="text"
                          value={formData.icon}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Label for="" className="fw-bolder">
                        Status
                      </Label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={(option: any) => {
                          setSelectedOption(option);
                        }}
                        options={status}
                        placeholder={'Select Status'}
                      />
                    </Col>
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
