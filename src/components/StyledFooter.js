import React from 'react'
import styled from 'styled-components'

const Section = styled.footer`
	height: 100px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px dashed #dcdde1;
	color: black;
	text-align: center;

	a {
		border-radius: 3px;
		background-image: linear-gradient(to top left, #44bd32, #4cd137);
		text-decoration: none;
		padding: 5px;
		color: white;
		border-bottom: 4px solid transparent;
		box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0);

		transition: box-shadow 0.3s ease-in-out;

		&:hover {
			box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
			transition: box-shadow 0.3s ease-in-out;
		}
	}
`
export default () => (
	<Section>
		<p>
			Source code available on{' '}
			<a href="https://github.com/halkeand/fcc-heatmap" target="blank">
				Github
			</a>
		</p>
	</Section>
)
