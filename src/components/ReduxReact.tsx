import { legacy_createStore } from 'redux'
import { noteReducer, NoteReducerActions } from '../redux/reducers/noteReducer'

const store = legacy_createStore(noteReducer)

store.dispatch({
  type: NoteReducerActions.NEW_NOTE,
  payload: {
    content: 'Clases de midudev',
    important: true,
    id: 1
  }
})
store.dispatch({
  type: NoteReducerActions.NEW_NOTE,
  payload: {
    content: 'Clases de midudev 2',
    important: false,
    id: 2
  }
})

const ReduxReact = () => {
  const state = store.getState()
  return (
    <div>
      <h2>Redux React</h2>
      <p>Veremos como usar redux en react usando TDD</p>
      <hr />
      <h3>Notes list</h3>
      <hr />
      {state.map((note) => (
        <li key={note.id}>
          {note.content}
          {' - '}
          <small>
            <strong>{note.important ? 'Important' : 'Not important'}</strong>
          </small>
        </li>
      ))}
    </div>
  )
}

export default ReduxReact
