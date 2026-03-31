// src/pages/cheatsheet/PhpDasar.jsx
import { useEffect } from 'react'
// import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
import CheatsheetPage from '../components/cheatsheet/generic/CheatsheetPage'
// import data from '@/data/cheatsheet/seri-php-dasar'
import cheatsheetData from '../data/cheatsheet/seri-php-dasar'

export default function PhpDasar() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}