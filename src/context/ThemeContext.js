import React from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    isDarkMode: false,
  }

  toggleDark = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode })
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
