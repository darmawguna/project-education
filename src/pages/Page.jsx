import { useEffect } from 'react'
import CheatsheetPage from '../components/cheatsheet/generic/CheatsheetPage'
import cheatsheetData2 from '../data/cheatsheet/responsive'

export default function ResponsiveCustomization() {
    useEffect(() => {
        document.title = `${ cheatsheetData2.meta.title } — ${ cheatsheetData2.meta.navTitle }`
    }, [])
    return <CheatsheetPage data={cheatsheetData2} />
}