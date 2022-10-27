import { Grid, Input, Text } from '@nextui-org/react'
import { StyledGridContainer, Form } from './styles'

const Login = () => {
  return (
    <StyledGridContainer
      justify="center"
      gap={2}
      alignItems="center"
    >
      <Grid xs={4}>
        <Text h1>Não tem conta?</Text>
      </Grid>
      <Grid xs={4} css={{background: '#3F2E56', height: '100%'}}>
        <Form action="">
          <Input
            size='xl'
            placeholder="email"
            type="email"
            css={{
              width: '100%',
            }}
          />
          <Input.Password
            placeholder="Password"
            size="xl"
            css={{
              width: '100%',
            }}
          />
        </Form>
      </Grid>
    </StyledGridContainer>
  )
}

export default Login
