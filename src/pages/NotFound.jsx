import React from 'react'
import { Button } from 'react-bootstrap'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center h-100" style={{ minHeight: '96vh' }}>
    <FaExclamationTriangle className="text-warning display-1 mb-4" />
    <h1 className="display-4 font-weight-bold mb-4">404 Not Found</h1>
    <p className="h5 mb-5">This page does not exist</p>
    <Button as={Link} to="/" variant="primary" className="px-4 py-2 mt-4">
      Go Back
    </Button>
  </section>
  )
}

export default NotFound
