// src/pages/cheatsheet/MysqlOverview.jsx
import { useEffect } from 'react'
import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
// import data from '@/data/cheatsheet/seri-mysql-overview'
import cheatsheetData from '../data/cheatsheet/seri-mysql-overview'

export default function MysqlOverview() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}