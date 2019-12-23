import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const DestroyButton = ({id, collback}) => {
  return (
    <div>
      <Button
        negative
        size='mini'
        onClick={() => collback(id)}
      >
        Delete
      </Button>
    </div>
  )
}

DestroyButton.propTypes = {
  id: PropTypes.number.isRequired,
  collback: PropTypes.func.isRequired
}

export default DestroyButton
