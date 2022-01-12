import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }

        localStorage.setItem(key, JSON.stringify(initValue))
        return initValue
    })

    const setStoredState = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }

    return ([state, setStoredState])
}

export default useLocalStorage;