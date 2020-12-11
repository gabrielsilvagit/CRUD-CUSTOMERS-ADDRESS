import React from 'react';
import history from '~/services/history';

import BaseLayout from '~/pages/_layouts/base';

import { Container } from './styles';
import Button from 'components/Button';

export default function Errors() {
  return (
    <BaseLayout>
      <Container>
        <div className="error-code">404</div>
        <h1>404</h1>
        <h2>Página não encontrada</h2>

        <Button onClick={() => history.push('/')} color="primary">
          Voltar para Home
        </Button>
      </Container>
    </BaseLayout>
  );
}
