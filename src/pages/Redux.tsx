import { Link } from 'react-router-dom'
import ReduxLegacy from '../components/ReduxReactLegacy'

export const Redux = () => {
  return (
    <div>
      <h2>Redux Carsh Course</h2>
      <ul>
        <li>
          <h5 style={{ margin: '0' }}>redux plano</h5>
          <p style={{ margin: '0' }}> se verá en un archivo en la ruta /src/redux/redux-js.js</p>
        </li>
        <li>
          <h5 style={{ margin: '0' }}>Redux React Legacy</h5>
          <Link to='/redux/legacy'>Ver</Link>
        </li>
        <li>
          <h5 style={{ margin: '0' }}>Redux React dependencias</h5>
          <Link to='/redux/react'>Ver</Link>
        </li>
      </ul>
    </div>
  )
}
