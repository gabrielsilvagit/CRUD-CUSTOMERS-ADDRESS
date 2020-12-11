import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'formik-antd';
import * as Yup from 'yup';
import history from '~/services/history';

import api from '~/services/api';
import Button from '~/components/Button';
import BaseLayout from '~/pages/_layouts/base';
import FormControl from '~/components/Form/FormControl';
import errorHandler from '~/Utils/errorHandler';

import { Container, ButtonGlobalStyle, Footer } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('campo obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('campo obrigatório'),
  password: Yup.string().required('campo obrigatório'),
});

export default function User() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSave = async (values, { setErrors }) => {
    setLoading(true);
    try {
      const response = await api.post('/users', values);
      history.push('/');
    } catch (error) {
      setErrors(errorHandler(error));
    }
    setLoading(false);
  };

  return (
    <BaseLayout>
      <ButtonGlobalStyle />

      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{}}
        onSubmit={handleSave}
        validationSchema={schema}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Container>
            <FormControl field="name" error={errors.name}>
              <Input type="name" name="name" placeholder={t('fields:login.name.placeholder')} />
            </FormControl>
            <FormControl field="email" error={errors.email}>
              <Input type="email" name="email" placeholder={t('fields:login.email.placeholder')} />
            </FormControl>
            <FormControl field="password" error={errors.password}>
              <Input type="password" name="password" placeholder={t('fields:login.password.placeholder')} />
            </FormControl>
            <Footer>
              <Button size="large" style={{ width: '200px' }} loading={loading} color="default">
                <Link to="/">{t('screens:users.back')}</Link>
              </Button>
              <Button size="large" style={{ width: '200px' }} type="submit" loading={loading} color="primary">
                {t('screens:users.submit')}
              </Button>
            </Footer>
          </Container>
        )}
      </Formik>
    </BaseLayout>
  );
}
