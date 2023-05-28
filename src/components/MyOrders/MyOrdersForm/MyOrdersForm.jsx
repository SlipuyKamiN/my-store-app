import PropTypes from 'prop-types';
import {
  AppForm,
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
} from './MyOrdersForm.styled';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const MyOrdersForm = ({ onFormSubmit }) => {
  const numberID = nanoid();
  const emailID = nanoid();

  const validationSchema = yup.object().shape({
    number: yup
      .string()
      .matches(
        '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
    email: yup
      .string()
      .matches('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', 'Wrong email format')
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <AppForm
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        reset({ number: '', email: '' });
        onFormSubmit(data);
      })}
    >
      <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
      <FormInput type="text" {...register('number')} id={numberID} />
      {errors.number && <ErrMessage>{errors.number.message}</ErrMessage>}
      <FormInputLabel htmlFor={emailID}>email</FormInputLabel>
      <FormInput type="text" {...register('email')} id={emailID} />
      {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
      <SubmitButton type="submit">Submit</SubmitButton>
    </AppForm>
  );
};

MyOrdersForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
