import { AnyAction } from 'redux'
/**
 * Para mejorar la legibilidad y la estructura de los proyectos, al igual que los test
 * se recomienda que haya una carpeta de redux que va a manejar la lógica de negocio de
 * las stores para poder simplemente llamar a la store desde este sitio y compartir su 
 * lógica dentro de nuestra app
 */

export enum NoteReducerActions {
  NEW_NOTE = '@notes/created',
  TOGGLE_IMPORTANT = '@notes/toggle_important'
}

export interface INote {
  content: string
  important: boolean
  id: number
}

export function noteReducer (state: INote[] = [], action: AnyAction) {
  if (action.type === NoteReducerActions.NEW_NOTE) {
    /**
     * Usamos concat ya que los reducers son funciones puras, por lo que
     * no debemos modificar el state original directamente, sino
     * que creamos una copia y esta es la que devolvemos. En el caso
     * del método concat, lo que hace es unir distintos arrays devolviendo
     * un nuevo array sin modificar el original.
     */
    return [...state, action.payload]
  }

  if (action.type === NoteReducerActions.TOGGLE_IMPORTANT) {
    const { id } = action.payload
    return state.map((note) => {
      if (note.id === id) {
        // return Object.assign({}, note, { ...note, important: true })
        // hay que tener cuidado cuando queremos hacer spreads de objetos
        // cuando sabemos que vamos a recibir objetos anidados.
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }

  // fallback
  return state
}
