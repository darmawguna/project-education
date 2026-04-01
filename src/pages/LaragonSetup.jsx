// src/pages/cheatsheet/LaragonSetup.jsx
import { useEffect } from 'react'
// import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
import CheatsheetPage from '../components/cheatsheet/generic/CheatsheetPage'
// import data from '@/data/cheatsheet/seri-laragon-setup'
import cheatsheetData from '../data/cheatsheet/laragon-setup'

export default function LaragonSetup() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}