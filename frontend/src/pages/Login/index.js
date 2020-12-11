import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Input, Checkbox } from 'formik-antd';
import * as Yup from 'yup';

import { signInRequest, rememberCredentials } from '~/store/modules/auth/actions';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import BaseLayout from '~/pages/_layouts/base';
import FormControl from '~/components/Form/FormControl';

import { Container, ButtonGlobalStyle } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('campo obrigatório'),
  password: Yup.string().required('campo obrigatório'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const { t } = useTranslation();
  var email = useSelector(state => state.auth.email);
  var password = useSelector(state => state.auth.password);
  var remember = useSelector(state => state.auth.remember);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleRemember(values) {
    dispatch(rememberCredentials(values));
  }

  return (
    <BaseLayout>
      <ButtonGlobalStyle />

      <Formik initialValues={{ email, password, remember }} onSubmit={handleSubmit} validationSchema={schema}>
        {({ errors, touched, values, isSubmitting }) => (
          <Container>
            <Logo title="Bem-vindo" />
            <FormControl field="email" error={errors.email}>
              <Input type="email" name="email" placeholder={t('fields:login.email.placeholder')} />
            </FormControl>
            <FormControl field="password" error={errors.password}>
              <Input type="password" name="password" placeholder={t('fields:login.password.placeholder')} />
            </FormControl>
            <Checkbox className="remember-me" name="remember" checked={remember} onChange={handleRemember(values)}>
              Lembrar Login
            </Checkbox>
            <Link to="/users" className="createAccount">
              Criar Conta
            </Link>
            <Button size="large" block type="submit" margin="40px 0 0 0" loading={loading} color="primary">
              {t('fields:login.submit')}
            </Button>
          </Container>
        )}
      </Formik>
    </BaseLayout>
  );
}
