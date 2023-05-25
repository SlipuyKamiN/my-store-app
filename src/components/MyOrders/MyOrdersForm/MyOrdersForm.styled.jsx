import styled from '@emotion/styled';

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  gap: 10px;

  width: 300px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
`;

export const FormInput = styled.input`
  padding: 0;
  margin: 0;
  width: 250px;
  font-size: 24px;
`;

export const FormInputLabel = styled.label`
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  width: 250px;
  font-size: 24px;
`;

export const ErrMessage = styled.span`
  max-width: 250px;
  color: red;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  width: 70px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #fed800;
  &:hover,
  &:focus,
  &:disabled {
    cursor: pointer;
    background-color: gray;
    color: #fff;
  }
`;
