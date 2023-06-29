import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password })

      const { user, token } = response.data

      localStorage.setItem('candynotes:user', JSON.stringify(user))
      localStorage.setItem('candynotes:token', token)

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        user,
        token,
      })
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Não foi possível entrar na conta')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('candynotes:token')
    localStorage.removeItem('candynotes:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
        console.log(user.avatar)
      }

      await api.put('/users', user)
      user.password = ''
      user.old_password = ''
      localStorage.setItem('candynotes:user', JSON.stringify(user))
      setData({ user, token: data.token })
      alert('Perfil atualizado')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Não foi possível atualizar o perfil')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('candynotes:token')
    const user = localStorage.getItem('candynotes:user')

    if (token && user) {
      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
