import { legacy_createStore } from 'redux'

// state default value
/**
 * El estado que va a tener el reducer va a ser el que le pase
 * mos como default parameter al state. La store
 * se va a encargar de crear una copia de ese state
 * y la copia va a ser el valo que se va a modificar
 * a lo largo del ciclo de vida del reducer.
 */
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1
    case '@counter/decremented':
      return state - 1
    case '@counter/reseted':
      return 0
    default:
      return 0
  }
}
const store = legacy_createStore(counterReducer)

const actionIncremented = {
  type: '@counter/incremented'
}
const actionDecremented = {
  type: '@counter/decremented'
}
const actionReseted = {
  type: '@counter/reset'
}

// subscripcion
/**
 * el método .subscribe() nos permite pasar un cb el cual
 * se ejecutará después que el estado hay sido modificado.
 * De esta forma podemos tener la UI actualizada siempre
 * que sea necesario y que el estado cambie.
 */
store.subscribe(() => {
  console.log(`estado modificado -> ${store.getState()}`)
})

// disparando action
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)

store.dispatch(actionDecremented)
store.dispatch(actionDecremented)

store.dispatch(actionReseted)
// obteniendo el estado
console.log(`\n------\nEl estado final es ${store.getState()}`)
