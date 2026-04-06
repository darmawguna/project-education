// src/pages/cheatsheet/WebFoundation.jsx
import { useEffect } from 'react'
// import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
import CheatsheetPage from '../components/cheatsheet/generic/CheatsheetPage'
// import data from '@/data/cheatsheet/seri-web-foundation'
import cheatsheetData from '../data/cheatsheet/web-foundation'

export default function WebFoundation() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}