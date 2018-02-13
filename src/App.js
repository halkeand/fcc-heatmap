import React, { Component } from 'react'
import axios from 'axios'

import StyledFooter from './components/StyledFooter'
import StyledSection from './components/StyledSection'
import Loader from './components/Loader'
import Title from './components/Title'
import Heatmap from './components/Heatmap'
class App extends Component {
	state = {
		isFetching: false,
		data: null,
		error: null
	}

	componentDidMount() {
		this.setState(prevState => ({
			isFetching: true
		}))

		axios
			.get(
				'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json'
			)
			.then(resp =>
				this.setState(prevState => ({
					data: resp.data,
					isFetching: false
				}))
			)
			.catch(error =>
				this.setState(prevState => ({
					error: 'Sorry an error occured while fetching data',
					isFetching: false
				}))
			)
	}

	render() {
		const { isFetching, error, data } = this.state
		return (
			<StyledSection>
				<Title />
				{isFetching && <Loader>Fetching data</Loader>}
				{error && <p>{error}</p>}
				{data && <Heatmap data={data} />}
				<StyledFooter />
			</StyledSection>
		)
	}
}

export default App
