import { useEffect } from 'react'
import CheatsheetPage from '@/components/cheatsheet/generic/CheatsheetPage'
import cheatsheetData from '../data/cheatsheet/seri-all-in-one-styling'

export default function AllInOneStyling() {
    useEffect(() => {
        document.title = `${ cheatsheetData.meta.title } — ${ cheatsheetData.meta.navTitle }`
    }, [])

    return <CheatsheetPage data={cheatsheetData} />
}