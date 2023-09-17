import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

export const TitleH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #2c3b91;
`;

export const Form = styled.form`
  display: flex;
  max-width: 400px;
`;

export const Input = styled.input`
  flex: 1 0;
  background: transparent;
  outline: none;
  border: 1px solid #2e2e2e;
  border-radius: 2px;
  font-family: inherit;
  padding: 2px;
`;

export const Button = styled.button`
  padding: 0 4px;
  font-family: inherit;
`;
