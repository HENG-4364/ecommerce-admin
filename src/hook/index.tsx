import { useState } from 'react';
type FormInputs = {
  category_name: string;
  icon: string;
};

export default function useForm() {
  const [formData, setFormData] = useState<FormInputs>({
    category_name: '',
    icon: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return [formData, handleChange];
}
