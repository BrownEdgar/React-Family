
import { MyContext } from './Context'

export default function C() {

	return (
		<div>
			<MyContext.Consumer>
				{(value) => <h2>C Component :{JSON.stringify(value)}</h2>}
			</MyContext.Consumer>
		</div>
	)
}