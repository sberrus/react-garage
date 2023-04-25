/**
 * En este archivo vamos a ver como se usa redux
 * de forma legacy dentro de react.
 *
 * Esta no es la mejor forma para utilizar redux a fecha de
 * hoy (25/04/2023) ya que le equipo de redux recomienda que
 * se utilize redux-toolkit.
 *
 * Redux toolkit se verá en otro componente
 */
import { legacy_createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1
    case '@counter/decremented':
      return state - 1
    case '@counter/reseted':
      return 0
    default:
      return state
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

store.subscribe(() => {
  console.log(`estado modificado -> ${store.getState()}`)
})

// obteniendo el estado
console.log(`\n------\nEl estado final es ${store.getState()}`)
