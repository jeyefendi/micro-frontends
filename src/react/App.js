import React from 'react'

const styles = {
  navbar: {
    height: '5em',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#EFD81A',
    color: '#000',
    boxShadow: 'rgb(0 0 0 / 54%) 0px 2px 11px 4px',
  },
  h2: {
    margin: 0,
    fontWeight: 900,
    fontSize: 32
  },
}

const App = () => {
  const [count, setCount] = React.useState(window.store.count)

  React.useEffect(() => {
    window.store.subscribe(() => {
      setCount(window.store.count)
    })
  }, [])

  return (
    <div style={styles.navbar}>
      <h2 style={styles.h2}>React Clicks Count: {count}</h2>
    </div>
  )
}

export default App
