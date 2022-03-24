import React from 'react';

/*
Steps to use Context:
-------------------------------------------------
1. Create a Context
2. Provide a Context value
3. Consume the Context value

*/

/*
Provider component is responsible to provide value to the descendent componeent.
*/

const UserContext = React.createContext();

const UserConsumer = UserContext.Provider;
const UserProvider = UserContext.Consumer;

export { UserProvider, UserConsumer}