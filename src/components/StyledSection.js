import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
	height: 100vh;
	width: 100vw;
   display flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
font-family: 'Arimo', sans-serif;
`
export default ({ children }) => <StyledSection>{children}</StyledSection>
