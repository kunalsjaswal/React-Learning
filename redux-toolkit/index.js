const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions=require('./features/iceCream/iceCreamSlice').iceCreamActions
const fetchUsers=require('./features/users/usersSlice').fetchUsers

console.log('inital state', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.returned())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.returned())
// store.dispatch(iceCreamActions.restocked(10))


// unsubscribe()