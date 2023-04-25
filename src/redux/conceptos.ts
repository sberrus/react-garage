// CONCEPTOS
// Reducers
/**
 * Los reducers son unas funciones especiales
 * que nos ayudan a obtener el estado actual
 * y devolver un nuevo estado.
 * 
 * Consiste en una funcion que recive como parámetros 
 * el estado actual, la acción y devuelve
 * el nuevo estado.
 * 
 */

const reducer = (state: any, action: any) => state

// Acciones
/**
 * Las acciones son el cómo le indicamos a redux que
 * realize algo dentro de la lógica del mismo.
 * Las acciones suelen ser objetos que contienen
 * el type que suele ser el identificador de la 
 * acción
 */

const counterReducer = (state: number, action: { type: string }) => {

  switch (action.type) {
    case "@counter/incremented":
      return state++
    case "@counter/decremented":
      return state--
    case "@counter/reseted":
      return 0
    default:
      break;
  }

}

const actionIncremented = {
  type: "@counter/incremented"
}
const actionDecremented = {
  type: "@counter/decremented"
}
const actionReseted = {
  type: "@counter/reset"
}

counterReducer(0, actionIncremented) // => 1

counterReducer(4, actionDecremented) // => 3

counterReducer(232, actionReseted) // => 0


// store
/**
 * La store es donde se manejan los actions y los reducers. 
 * Además, es el encargado de gestionar el estado del mismo.
 */

