//Q 10) Class component, ProviderComponent provides two context values

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

export class ProviderComponent extends Component {
	render() {
		return (
			<NameContext.Provider value='Backbencher'>
				<AgeContext.Provider value='23'>
					<Test2 />
				</AgeContext.Provider>
			</NameContext.Provider>
		);
	}
}

// We have Test2 with following code.
import React from "react";
import NameContext  from './'
import AgeContext  from './'

function Test2() {
	return <div>
        <NameContext.Consumer>
            {
                (data) => {
                    return <h1>the value is {data}</h1>
                } 
            }
        </NameContext.Consumer>
        <AgeContext.Consumer>
            {
                (age) => {
                    return <h1>the age is {age}</h1>
                } 
            }
        </AgeContext.Consumer>
    </div>;
}
export default Test2;
// Complete Test2 component to consume the context values and display the name and age
