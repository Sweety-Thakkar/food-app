import { useState, useCallback } from 'react'

const useToggle = (initial = false) => {
    const [ toggle, setToggle ] = useState(initial)

    const handleToggle = useCallback((value) => setToggle(value), [])

  return [ toggle, handleToggle ]
}

export default useToggle
