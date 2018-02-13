//Extract all the specified property from the array of object given and return an array
export const getAll = (prop, data) =>
	data.reduce((acc, o, i, a) => {
		if (a[i - 1]) {
			return !acc.includes(o[prop]) ? acc.concat(o[prop]) : acc
		} else return acc.concat(o[prop])
	}, [])

//Map num to month name
export const monthNumToName = monthnum => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	return months[monthnum - 1] || ''
}

//Return only the data correspnding to the given month number
const monthObjs = (monthNum, data) => data.filter(o => o.month === monthNum)

//Create an object with an array of all variances for the given month (and a prop for it's name)
const oneMonthData = (monthNum, data) => ({
	month: monthNumToName(monthNum),
	variances: monthObjs(monthNum, data)
})

//Return data ready for consumption, to render each month's row
export const formattedData = data => {
	const acc = []
	for (let i = 1; i < 13; i++) {
		const monthData = oneMonthData(i, data)
		acc.push(monthData)
	}
	return acc
}
