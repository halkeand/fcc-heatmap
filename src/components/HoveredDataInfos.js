import React from 'react'
import { monthNumToName } from '../utils'

export default ({ baseTemp, data }) => {
	const { month, year, variance } = data
	return (
		<div className="hovered-data-infos animated fadeIn">
			<p>
				{year} - {monthNumToName(month)}
			</p>
			<p>
				<strong>
					{(baseTemp + variance).toPrecision(5)} ({variance > 0
						? `+${variance}`
						: variance}) °C
				</strong>
			</p>
		</div>
	)
}
