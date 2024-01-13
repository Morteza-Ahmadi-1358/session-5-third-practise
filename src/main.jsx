import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductsList from './components/ProductsList.jsx'
import UsersList from './components/UsersList.jsx'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsList />
)
