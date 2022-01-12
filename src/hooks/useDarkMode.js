import { useState } from 'react';

const useDarkMode = (initValue) => {
    const [darkMode, setDarkMode] = useState(initValue)
    return [darkMode, setDarkMode]
}

export default useDarkMode;