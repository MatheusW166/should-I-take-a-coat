import { FormEventHandler } from 'react';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

type CountryFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
}

export function CountryForm({ loading, onSubmit }: CountryFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="country" type="text" placeholder="Digite o local..." />
      <Button disabled={loading} type="submit">Buscar</Button>
    </Form>
  );
}