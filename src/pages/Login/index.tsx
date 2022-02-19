import * as S from './styles'
import { useState } from 'react'
import { useFormik } from 'formik'
import { SignInSchema } from '../../schemas/SignIn'
import Input from '../../components/DataEntry/Input'
import Button from '../../components/DataEntry/Button'
import InputPassword from '../../components/DataEntry/InputPassword'

const Login = () => {
  const [validateOnChange, setValidateOnChange] = useState(false)

  //eslint-disable-next-line
  const handleLogin = (values: any) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      handleLogin(values)
    },
    validationSchema: SignInSchema,
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnChange
  })
  return (
    <S.Wrapper>
      <S.AnimationContainer>
        <S.LoginCard>
          <S.TitleLogin>Login</S.TitleLogin>
          <S.FormLogin
            onSubmitCapture={() => {
              formik.handleSubmit()
              setValidateOnChange(true)
            }}
          >
            <Input
              label="Email"
              placeholder="Type your email"
              error={formik.errors.email}
              {...formik.getFieldProps('email')}
            />
            <InputPassword
              label="Password"
              type="password"
              placeholder="Type your password"
              error={formik.errors.password}
              {...formik.getFieldProps('password')}
            />
            <S.BottomFormLoginElements>
              <Button htmlType="submit" onClick={handleLogin}>
                Login
              </Button>
            </S.BottomFormLoginElements>
          </S.FormLogin>
          <S.CopyrightWrapper>
            <S.LoginPageText>&reg; Template Typescript</S.LoginPageText>
          </S.CopyrightWrapper>
        </S.LoginCard>
      </S.AnimationContainer>
    </S.Wrapper>
  )
}
export default Login
