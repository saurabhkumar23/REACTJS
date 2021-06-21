import React, {createContext, useContext} from "react";

const MyContext = createContext(1);

const MyComponent = () => (

	<>
		<p>{useContext(MyContext)}</p>
		<MyContext.Provider value={2}>
			<p>{useContext(MyContext)}</p>
		</MyContext.Provider>
	</>
);
export default MyComponent;
