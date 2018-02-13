import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.header`
	text-align: center;
	padding: 10px;
`
export default () => (
	<StyledContainer>
		<h1 className="animated fadeIn">
			Monthly Global Land-Surface Temperature (1753 - 2015)
		</h1>
		<p>
			Temperatures are in Celsius and reported as anomalies relative to the Jan
			1951-Dec 1980 average. Estimated Jan 1951-Dec 1980 absolute temperature
			°C: 8.66 +/- 0.07
		</p>
	</StyledContainer>
)
