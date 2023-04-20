import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const buttonStyles = {
  textDecoration: 'none',
  marginLeft: '5px',
  padding: '5px 10px',
  background: '#1d1d1d',
  border: '1px solid #d1d1d1',
  borderRadius: '5px'
}

const Navbar = () => {
  // hooks
  const { user, login, logout } = useAuth()

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <Link style={buttonStyles} to='/'>
          Home (public)
        </Link>
        <Link style={buttonStyles} to='/about'>
          About (public)
        </Link>
        <Link style={buttonStyles} to='/profile'>
          Profile (Protected)
        </Link>
        <Link style={buttonStyles} to='/auth'>
          Auth Form (Protected)
        </Link>
      </header>
      <h6 style={{ color: user ? 'greenyellow' : 'var(--accent)' }}>
        User logged: {user ? 'user logged' : 'user not logged'}
      </h6>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button
          onClick={() => {
            login()
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            logout()
          }}
        >
          Log out
        </button>
      </div>

      <hr />
    </div>
  )
}

export default Navbar
