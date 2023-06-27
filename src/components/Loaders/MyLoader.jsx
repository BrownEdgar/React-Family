import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
	<ContentLoader
		rtl
		speed={0.5}
		width={1200}
		height={370}
		viewBox="0 0 1200 370"
		{...props}
	>
		<rect x="-10" y="22" rx="2" ry="2" width="400" height="170" />
		<rect x="405" y="21" rx="2" ry="2" width="400" height="170" />
		<rect x="820" y="22" rx="2" ry="2" width="400" height="170" />

		<rect x="-10" y="200" rx="2" ry="2" width="400" height="170" />
		<rect x="405" y="200" rx="2" ry="2" width="400" height="170" />
		<rect x="820" y="200" rx="2" ry="2" width="400" height="170" />
	</ContentLoader>
)

export default MyLoader