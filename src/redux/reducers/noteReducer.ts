/**
 * Para mejorar la legibilidad y la estructura de los proyectos, al igual que los test
 * se recomienda que haya una carpeta de redux que va a manejar la lógica de negocio de
 * las stores para poder simplemente llamar a la store desde este sitio y compartir su 
 * lógica dentro de nuestra app
 */

export enum NoteReducerActions {
  NEW_NOTE = '@notes/created'
}

export interface INote {
  content: string
  important: boolean
  id: number
}

export interface INoteReducerAction {
  type: NoteReducerActions
  payload: INote
}

export function noteReducer (state: INote[] = [], action: INoteReducerAction) {
  if (action.type === NoteReducerActions.NEW_NOTE) {
    /**
     * Usamos concat ya que los reducers son funciones puras, por lo que
     * no debemos modificar el state original directamente, sino
     * que creamos una copia y esta es la que devolvemos. En el caso
     * del método concat, lo que hace es unir distintos arrays devolviendo
     * un nuevo array sin modificar el original.
     */
    return state.concat(action.payload)
  }
  return state
}
