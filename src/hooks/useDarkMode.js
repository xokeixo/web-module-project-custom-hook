import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', initValue)
    return [darkMode, setDarkMode]
}

export default useDarkMode;