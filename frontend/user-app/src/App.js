import React from 'react'

const App = () => {
  return (
    <div>
      <iframe
        src="/App.html"
        width="100%"
        height="100%"
        style={{ border: 'none', minHeight: '100vh' }}
        title="Static HTML"
      />
    </div>
  )
}

export default App