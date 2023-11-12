import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "google.com",
//       target: "_blank"
//   },
//   children: "click me to visit google"
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const AnotherUser = "reactLearner";

const ReactElement = createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  AnotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // AnotherElement
  ReactElement
)