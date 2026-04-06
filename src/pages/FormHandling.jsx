// src/pages/cheatsheet/FormHandling.jsx
import { useEffect } from 'react'
// import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
import CheatsheetPage from '../components/cheatsheet/generic/CheatsheetPage'
import cheatsheetData from '../data/cheatsheet/seri-form-handling'

export default function FormHandling() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}