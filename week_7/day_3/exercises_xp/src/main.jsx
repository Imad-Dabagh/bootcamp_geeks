import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './App.jsx'
import Color from './Color.jsx';

createRoot(document.getElementById('root')).render(
  <>
    {/* <h3>Click on the numbers to increase the counters</h3>
    <h3>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component</h3>
    <hr />
    <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
    </ErrorBoundary>
    <hr />
    <h3>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected</h3>
    <ErrorBoundary>
        <BuggyCounter />
    </ErrorBoundary>

    <ErrorBoundary>
        <BuggyCounter />
    </ErrorBoundary>
    <hr />
    <h3>This counter is not inside of boundary. So if crashes, all other components are deleted</h3>
    <BuggyCounter /> */}
    <Color />
  </>,
)
