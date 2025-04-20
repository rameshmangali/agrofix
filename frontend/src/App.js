// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import './App.css'

const App = () => (
    <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/" element={<Home />} />
    {/* <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
    <Route path="/products/:id" element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>} />
    <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" replace />} /> */}
  </Routes>
)

export default App

// import { Routes, Route, Navigate } from 'react-router-dom'

// const App = () => (
//   <Routes>
//     <Route path="/login" element={<LoginForm />} />
//     <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//     <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
//     <Route path="/products/:id" element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>} />
//     <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
//     <Route path="/not-found" element={<NotFound />} />
//     <Route path="*" element={<Navigate to="/not-found" replace />} />
//   </Routes>
// )

// export default App

