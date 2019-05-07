import React from 'react'

const localStorageKeyForDark = 'isDarkEnabled'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    isDarkMode: false,
  }

  componentDidMount() {
    const userPreferenceOfDarkMode = localStorage.getItem(
      localStorageKeyForDark,
    )
    if (userPreferenceOfDarkMode !== null) {
      if (userPreferenceOfDarkMode === 'yes') {
        this.setState({ isDarkMode: true })
      } else if (userPreferenceOfDarkMode === 'no') {
        this.setState({ isDarkMode: false })
      }
    }
  }

  toggleDark = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode })
    localStorage.setItem(
      localStorageKeyForDark,
      !this.state.isDarkMode ? 'yes' : 'no',
    )
  }

  render() {
    const { children } = this.props
    const { isDarkMode } = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkMode,
          toggleDark: this.toggleDark,
        }}>
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
