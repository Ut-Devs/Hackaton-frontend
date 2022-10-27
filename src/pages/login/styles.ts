import { Input, Grid } from '@nextui-org/react'
import { styled } from '@nextui-org/react'
import styledComponent from 'styled-components'

export const StyledGridContainer = styled(Grid.Container, {
  height: '100vh',
})

export const Form = styledComponent.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  & > * {
    margin-block: 1rem;
  }
  height: 100%;
  width: 100%;
`
