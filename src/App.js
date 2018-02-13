import React, { Component } from 'react'
import axios from 'axios'
import StyledFooter from './components/StyledFooter'
import StyledSection from './components/StyledSection'
import Loader from './components/Loader'
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
		console.log(data)
		return (
			<StyledSection>
				{isFetching && <Loader>Fetching data</Loader>}
				{error && <p>{error}</p>}
				<StyledFooter />
			</StyledSection>
		)
	}
}

export default App
