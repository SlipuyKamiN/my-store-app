import {
  AppForm,
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
} from './OrderForm.styled';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const OrderForm = ({ isShoppingCartEmpty, onFormSubmit }) => {
  const nameID = nanoid();
  const numberID = nanoid();
  const emailID = nanoid();
  const addressID = nanoid();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
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
        reset({ name: '', number: '', address: '', email: '' });
        onFormSubmit(data);
      })}
    >
      <FormInputLabel htmlFor={nameID}>Name</FormInputLabel>
      <FormInput type="text" {...register('name')} id={nameID} />
      {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
      <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
      <FormInput type="text" {...register('number')} id={numberID} />
      {errors.number && <ErrMessage>{errors.number.message}</ErrMessage>}
      <FormInputLabel htmlFor={emailID}>email</FormInputLabel>
      <FormInput type="text" {...register('email')} id={emailID} />
      {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
      <FormInputLabel htmlFor={addressID}>address</FormInputLabel>
      <FormInput type="text" {...register('address')} id={addressID} />
      {errors.address && <ErrMessage>{errors.address.message}</ErrMessage>}
      <SubmitButton type="submit" disabled={isShoppingCartEmpty}>
        'Submit'
      </SubmitButton>
    </AppForm>
  );
};
