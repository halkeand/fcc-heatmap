import React, { Component, Fragment } from 'react'
import './Heatmap.css'
import { getAll, formattedData } from '../utils'
import HoveredDataInfos from './HoveredDataInfos'
import ColorLegend from './ColorLegend'

const YearsAxis = ({ years }) => (
	<tr>
		{years.map(year => <th key={year}>{year % 30 === 0 ? year : ''}</th>)}
	</tr>
)

class Heatmap extends Component {
	state = {
		currentDataHovered: null
	}

	changeHoveredData = dataObj => {
		this.setState(prevState => ({
			currentDataHovered: dataObj
		}))
	}
	getDataClassName = num => {
		return 0 < num && num < 2.7
			? 'cell-color-0'
			: 2.7 < num && num < 3.9
				? 'cell-color-1'
				: 3.9 < num && num < 5
					? 'cell-color-2'
					: 5 < num && num < 6.1
						? 'cell-color-3'
						: 6.1 < num && num < 7.2
							? 'cell-color-4'
							: 7.2 < num && num < 8.3
								? 'cell-color-5'
								: 8.3 < num && num < 9.4
									? 'cell-color-6'
									: 9.4 < num && num < 10.5
										? 'cell-color-7'
										: 10.5 < num && num < 11.6
											? 'cell-color-8'
											: 11.6 < num && num < 12.7
												? 'cell-color-9'
												: 'cell-no-color'
	}

	render() {
		const { data } = this.props
		const { currentDataHovered } = this.state

		return (
			<Fragment>
				<table className="heatmap animated fadeIn">
					<tbody>
						<YearsAxis years={getAll('year', data.monthlyVariance)} />
						{formattedData(data.monthlyVariance).map(o => (
							<tr key={o.month}>
								<th>
									<div className="month-header-cell">{o.month}</div>
								</th>
								{o.variances.map((o, i) => (
									<td
										onMouseEnter={() => this.changeHoveredData(o)}
										key={i}
										className={this.getDataClassName(
											o.variance + data.baseTemperature
										)}
									/>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<section className="legend-and-infos-container">
					<ColorLegend />
					{currentDataHovered && (
						<HoveredDataInfos
							data={currentDataHovered}
							baseTemp={data.baseTemperature}
						/>
					)}
				</section>
			</Fragment>
		)
	}
}

export default Heatmap
