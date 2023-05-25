import styled from '@emotion/styled';

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  gap: 10px;

  width: 100%;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  width: 100%;
  color: var(--primary-white-color);
  font-size: 24px;
  background-color: transparent;
  border: 1px solid var(--brand-color);
`;

export const FormInputLabel = styled.label`
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  width: 100%;
  font-size: 24px;
`;

export const ErrMessage = styled.span`
  max-width: 100%;
  color: red;
  padding: 10px;
  border-radius: 10px;
  background-color: #61dbfb22;
`;

export const SubmitButton = styled.button`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: var(--brand-color);
  border: 2px solid var(--brand-color);
  background-color: transparent;
  transition: color 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    color: var(--primary-white-color);
    border: 2px solid var(--primary-white-color);
  }
  &:disabled {
    cursor: not-allowed;
    border: 2px solid #000000cc;
    color: #000000cc;
    background-color: #00000011;
  }
`;
