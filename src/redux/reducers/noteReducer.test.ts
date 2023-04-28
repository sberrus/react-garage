import { INote, noteReducer, NoteReducerActions } from './noteReducer';
import deepFreeze from "deepfreeze"

describe("noteReducer", () => {
  test("returns a new state after action with toggle impartance", () => {
    // notes mock 
    const state: INote[] = [
      {
        id: 1, content: "note1", important: false
      },
      {
        id: 2, content: "note2", important: false
      }
    ]

    // action
    const action = {
      type: NoteReducerActions.TOGGLE_IMPORTANT,
      payload: {
        id: 2
      }
    }

    // freeze the object to avoid state object mutations in tests
    deepFreeze(state)
    // fire action
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual({
      id: 2, content: "note2", important: true
    })

  })
})
