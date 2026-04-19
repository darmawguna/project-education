import { useState, useRef } from 'react'
import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'

// ─── REGISTRY COMPONENTS ──────────────────────────────────────────────────────
/**
 * Registry berisi daftar komponen preview yang tersedia.
 * Demo cukup memanggil key yang sesuai dari data JSON.
 *
 * Preview generik (lintas seri):
 *   'card'    → satu box dengan Tailwind class diapply langsung
 *   'flex'    → tiga kotak A/B/C dalam flex container
 *
 * Preview spesifik MySQL (Seri 3):
 *   'sql-table-builder' → builder interaktif CREATE TABLE
 *   'crud-sim'          → simulator 4 operasi CRUD
 */
const PREVIEW_REGISTRY = {
    // ── Generik ─────────────────────────────────────────────────────────────────
    card: CardPreview,
    flex: FlexPreview,

    // ── HTTP & Form (contoh seri lain) ──────────────────────────────────────────
    'request-response-sim': RequestResponseSim,
    'url-dissector-sim': URLDissectorSim,
    'form-sim': FormSimPreview,
    'validator-sim': ValidatorSimPreview,

    // ── MySQL (Seri 3) ───────────────────────────────────────────────────────────
    'sql-table-builder': SQLTableBuilder,
    'crud-sim': CRUDSimulator,
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── GENERIC PREVIEWS ──────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

function CardPreview({ state }) {
    const classes = Object.values(state).join(' ')
    return (
        <div className="flex items-center justify-center min-h-[140px] bg-surface border border-border1 rounded-xl p-6">
            <div className={`w-32 h-20 rounded-xl bg-white/10 border border-white/20 transition-all duration-300 ${ classes }`} />
        </div>
    )
}

function FlexPreview({ state }) {
    const classes = Object.values(state).join(' ')
    return (
        <div className="bg-surface border border-border1 rounded-xl p-6">
            <div className={`flex min-h-[100px] transition-all duration-300 ${ classes }`}>
                {['A', 'B', 'C'].map(l => (
                    <div key={l} className="w-16 h-16 rounded-xl bg-tcyan/10 border border-tcyan/30 flex items-center justify-center font-mono text-tcyan font-bold text-lg">{l}</div>
                ))}
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── MYSQL PREVIEW 1: SQL TABLE BUILDER ────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const TYPE_OPTIONS = ['INT', 'VARCHAR(100)', 'VARCHAR(255)', 'DATE', 'TEXT', 'FLOAT', 'BOOLEAN']
const CONSTR_OPTIONS = ['', 'NOT NULL', 'AUTO_INCREMENT PRIMARY KEY', 'UNIQUE', 'DEFAULT NULL']

const TYPE_COLOR = {
    'INT': 'text-tblue  bg-tblue/10  border-tblue/25',
    'VARCHAR(100)': 'text-tgreen bg-tgreen/10 border-tgreen/25',
    'VARCHAR(255)': 'text-tgreen bg-tgreen/10 border-tgreen/25',
    'DATE': 'text-torange bg-torange/10 border-torange/25',
    'TEXT': 'text-tpurple bg-tpurple/10 border-tpurple/25',
    'FLOAT': 'text-tblue  bg-tblue/10  border-tblue/25',
    'BOOLEAN': 'text-tpink  bg-tpink/10  border-tpink/25',
}

function buildCreateSQL(tableName, columns) {
    if (!tableName.trim() || columns.length === 0) return ''
    const lines = columns.map(c => {
        const parts = [`  ${ c.name || 'kolom' }`, c.type]
        if (c.constraint) parts.push(c.constraint)
        return parts.join(' ')
    })
    return `CREATE TABLE ${ tableName } (\n${ lines.join(',\n') }\n);`
}

function highlightSQL(sql) {
    // Highlight sederhana: keyword → purple, tipe → blue/orange, string → green
    return sql
        .replace(/\b(CREATE TABLE|INT|VARCHAR|DATE|TEXT|FLOAT|BOOLEAN)\b/g, '<span class="sh-kw">$1</span>')
        .replace(/\b(AUTO_INCREMENT|PRIMARY KEY|NOT NULL|UNIQUE|DEFAULT NULL)\b/g, '<span class="sh-at">$1</span>')
        .replace(/(\w+)\s*\(/g, (m, p1) => `<span class="sh-sel">${ p1 }</span>(`)
        .replace(/(\d+)\)/g, '<span class="sh-str">$1</span>)')
}

function SQLTableBuilder({ state, onFieldChange }) {
    const { tableName, columns } = state

    const setTableName = (val) => onFieldChange('tableName', val)
    const setColumns = (val) => onFieldChange('columns', val)

    const addColumn = () =>
        setColumns([...columns, { name: '', type: 'VARCHAR(100)', constraint: '' }])

    const removeColumn = (i) =>
        setColumns(columns.filter((_, idx) => idx !== i))

    const updateColumn = (i, key, val) =>
        setColumns(columns.map((c, idx) => idx === i ? { ...c, [key]: val } : c))

    const generatedSQL = buildCreateSQL(tableName, columns)

    return (
        <div className="flex flex-col gap-5">

            {/* ── Nama Tabel ── */}
            <div>
                <label className="block font-mono text-[10.5px] text-tmuted uppercase tracking-wider mb-1.5">Nama Tabel</label>
                <input
                    value={tableName}
                    onChange={e => setTableName(e.target.value)}
                    placeholder="contoh: tabel_siswa"
                    className="w-full bg-[#060910] border border-border2 rounded-xl px-4 py-2.5 font-mono text-[12.5px] text-ttext focus:outline-none focus:border-tcyan/50 transition-colors"
                />
            </div>

            {/* ── Daftar Kolom ── */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-[10.5px] text-tmuted uppercase tracking-wider">Kolom</label>
                    <button
                        onClick={addColumn}
                        className="font-mono text-[11px] text-tcyan border border-tcyan/30 bg-tcyan/5 hover:bg-tcyan/15 px-3 py-1 rounded-lg transition-all"
                    >
                        + Tambah Kolom
                    </button>
                </div>

                {/* Header row */}
                <div className="grid grid-cols-[1fr_140px_160px_28px] gap-2 px-1 mb-1">
                    {['Nama Kolom', 'Tipe Data', 'Constraint', ''].map(h => (
                        <span key={h} className="font-mono text-[9.5px] text-tmuted uppercase tracking-wider">{h}</span>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    {columns.map((col, i) => (
                        <div key={i} className="grid grid-cols-[1fr_140px_160px_28px] gap-2 items-center group">
                            {/* Nama */}
                            <input
                                value={col.name}
                                onChange={e => updateColumn(i, 'name', e.target.value)}
                                placeholder="nama_kolom"
                                className="bg-[#060910] border border-border2 rounded-lg px-3 py-2 font-mono text-[12px] text-ttext focus:outline-none focus:border-tcyan/50 transition-colors"
                            />
                            {/* Tipe */}
                            <div className="relative">
                                <select
                                    value={col.type}
                                    onChange={e => updateColumn(i, 'type', e.target.value)}
                                    className={`w-full appearance-none bg-[#060910] border rounded-lg px-2.5 py-2 font-mono text-[11px] focus:outline-none focus:border-tcyan/50 transition-colors cursor-pointer ${ TYPE_COLOR[col.type] || 'text-tmuted2 border-border2' }`}
                                >
                                    {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[9px] opacity-50">▾</span>
                            </div>
                            {/* Constraint */}
                            <div className="relative">
                                <select
                                    value={col.constraint}
                                    onChange={e => updateColumn(i, 'constraint', e.target.value)}
                                    className="w-full appearance-none bg-[#060910] border border-border2 text-tmuted2 rounded-lg px-2.5 py-2 font-mono text-[11px] focus:outline-none focus:border-tpurple/50 transition-colors cursor-pointer"
                                >
                                    {CONSTR_OPTIONS.map(c => <option key={c} value={c}>{c || '—'}</option>)}
                                </select>
                                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[9px] opacity-50">▾</span>
                            </div>
                            {/* Hapus */}
                            <button
                                onClick={() => removeColumn(i)}
                                disabled={columns.length <= 1}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-tmuted hover:text-tred hover:bg-tred/10 border border-transparent hover:border-tred/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Output SQL ── */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label className="font-mono text-[10.5px] text-tmuted uppercase tracking-wider">SQL yang Dihasilkan</label>
                    <CopyButton text={generatedSQL} />
                </div>
                <div className="bg-[#060910] border border-border1 rounded-xl px-5 py-4 font-mono text-[12.5px] leading-relaxed overflow-x-auto">
                    {generatedSQL
                        ? <pre className="whitespace-pre" dangerouslySetInnerHTML={{ __html: highlightSQL(generatedSQL) }} />
                        : <span className="text-tmuted italic">Isi nama tabel dan minimal satu kolom...</span>
                    }
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── MYSQL PREVIEW 2: CRUD SIMULATOR ───────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const INITIAL_ROWS = [
    { id: 1, nama: 'Budi Santoso', umur: 16 },
    { id: 2, nama: 'Siti Rahayu', umur: 17 },
    { id: 3, nama: 'Ahmad Fauzi', umur: 15 },
]

const CRUD_META = {
    SELECT: { color: 'text-tcyan  border-tcyan/30  bg-tcyan/5', label: 'READ', badge: 'text-tcyan  bg-tcyan/10  border-tcyan/25' },
    INSERT: { color: 'text-tgreen border-tgreen/30 bg-tgreen/5', label: 'CREATE', badge: 'text-tgreen bg-tgreen/10 border-tgreen/25' },
    UPDATE: { color: 'text-torange border-torange/30 bg-torange/5', label: 'UPDATE', badge: 'text-torange bg-torange/10 border-torange/25' },
    DELETE: { color: 'text-tred   border-tred/30   bg-tred/5', label: 'DELETE', badge: 'text-tred   bg-tred/10   border-tred/25' },
}

function buildCRUDSQL(op, inputNama, inputUmur, filterValue) {
    const nama = inputNama || 'Nama Siswa'
    const umur = inputUmur || '16'
    const id = filterValue || '1'

    switch (op) {
        case 'SELECT':
            return filterValue
                ? `SELECT * FROM tabel_siswa\nWHERE id = ${ id };`
                : `SELECT * FROM tabel_siswa;`
        case 'INSERT':
            return `INSERT INTO tabel_siswa (nama, umur)\nVALUES ('${ nama }', ${ umur });`
        case 'UPDATE':
            return `UPDATE tabel_siswa\nSET nama = '${ nama }', umur = ${ umur }\nWHERE id = ${ id };`
        case 'DELETE':
            return `DELETE FROM tabel_siswa\nWHERE id = ${ id };`
        default: return ''
    }
}

function highlightCRUD(sql) {
    return sql
        .replace(/\b(SELECT|INSERT INTO|UPDATE|DELETE|FROM|SET|WHERE|VALUES)\b/g, '<span class="sh-kw">$1</span>')
        .replace(/\b(tabel_siswa)\b/g, '<span class="sh-sel">$1</span>')
        .replace(/\b(nama|umur|id)\b/g, '<span class="sh-prop">$1</span>')
        .replace(/'([^']*)'/g, '<span class="sh-str">\'$1\'</span>')
        .replace(/\b(\d+)\b(?!['])/g, '<span class="sh-val">$1</span>')
}

function CRUDSimulator({ state, onFieldChange }) {
    const [rows, setRows] = useState(INITIAL_ROWS)
    const [nextId, setNextId] = useState(4)
    const [feedback, setFeedback] = useState(null)
    const [highlight, setHighlight] = useState(null) // id baris yang baru diubah

    const { operation, filterValue, inputNama, inputUmur } = state
    const meta = CRUD_META[operation]
    const sql = buildCRUDSQL(operation, inputNama, inputUmur, filterValue)

    const flash = (id, type = 'success') => {
        setHighlight({ id, type })
        setTimeout(() => setHighlight(null), 1400)
    }

    const runQuery = () => {
        const id = parseInt(filterValue) || 1
        const umur = parseInt(inputUmur) || 16
        const nama = inputNama || 'Nama Siswa'

        switch (operation) {
            case 'SELECT': {
                const found = filterValue ? rows.find(r => r.id === id) : null
                setFeedback({ ok: true, msg: filterValue ? (found ? `✅ Ditemukan: ${ found.nama }` : '❌ Data tidak ditemukan') : `✅ Menampilkan ${ rows.length } baris data` })
                if (found) flash(found.id)
                break
            }
            case 'INSERT': {
                const newRow = { id: nextId, nama, umur }
                setRows(prev => [...prev, newRow])
                setNextId(n => n + 1)
                setFeedback({ ok: true, msg: `✅ Baris baru ditambahkan (id: ${ nextId })` })
                flash(nextId)
                break
            }
            case 'UPDATE': {
                const target = rows.find(r => r.id === id)
                if (!target) { setFeedback({ ok: false, msg: `❌ id ${ id } tidak ditemukan` }); break }
                setRows(prev => prev.map(r => r.id === id ? { ...r, nama, umur } : r))
                setFeedback({ ok: true, msg: `✅ Baris id=${ id } berhasil diperbarui` })
                flash(id)
                break
            }
            case 'DELETE': {
                const target = rows.find(r => r.id === id)
                if (!target) { setFeedback({ ok: false, msg: `❌ id ${ id } tidak ditemukan` }); break }
                setRows(prev => prev.filter(r => r.id !== id))
                setFeedback({ ok: true, msg: `✅ Baris id=${ id } berhasil dihapus` })
                break
            }
        }
    }

    const resetRows = () => {
        setRows(INITIAL_ROWS)
        setNextId(4)
        setFeedback(null)
        setHighlight(null)
    }

    const needsInput = ['INSERT', 'UPDATE'].includes(operation)
    const needsFilter = ['UPDATE', 'DELETE', 'SELECT'].includes(operation)

    return (
        <div className="flex flex-col gap-5">

            {/* ── Input fields ── */}
            <div className={`grid gap-3 ${ needsInput && needsFilter ? 'md:grid-cols-3' : needsFilter ? 'md:grid-cols-2' : 'md:grid-cols-2' }`}>
                {needsInput && (
                    <>
                        <div>
                            <label className="block font-mono text-[10.5px] text-tmuted uppercase tracking-wider mb-1.5">nama</label>
                            <input
                                value={inputNama}
                                onChange={e => { onFieldChange('inputNama', e.target.value); setFeedback(null) }}
                                placeholder="contoh: Dewi Lestari"
                                className="w-full bg-[#060910] border border-border2 rounded-xl px-3 py-2.5 font-mono text-[12px] text-ttext focus:outline-none focus:border-tgreen/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[10.5px] text-tmuted uppercase tracking-wider mb-1.5">umur</label>
                            <input
                                value={inputUmur}
                                type="number"
                                onChange={e => { onFieldChange('inputUmur', e.target.value); setFeedback(null) }}
                                placeholder="contoh: 16"
                                className="w-full bg-[#060910] border border-border2 rounded-xl px-3 py-2.5 font-mono text-[12px] text-ttext focus:outline-none focus:border-tgreen/50 transition-colors"
                            />
                        </div>
                    </>
                )}
                {needsFilter && (
                    <div>
                        <label className="block font-mono text-[10.5px] text-tmuted uppercase tracking-wider mb-1.5">
                            {operation === 'SELECT' ? 'WHERE id (kosongkan = semua)' : 'WHERE id'}
                        </label>
                        <input
                            value={filterValue}
                            type="number"
                            onChange={e => { onFieldChange('filterValue', e.target.value); setFeedback(null) }}
                            placeholder="contoh: 1"
                            className="w-full bg-[#060910] border border-border2 rounded-xl px-3 py-2.5 font-mono text-[12px] text-ttext focus:outline-none focus:border-torange/50 transition-colors"
                        />
                    </div>
                )}
            </div>

            {/* ── SQL Preview ── */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${ meta.badge }`}>{meta.label}</span>
                        <label className="font-mono text-[10.5px] text-tmuted uppercase tracking-wider">Query yang akan dijalankan</label>
                    </div>
                    <CopyButton text={sql} />
                </div>
                <div className="bg-[#060910] border border-border1 rounded-xl px-5 py-4 font-mono text-[12.5px] leading-relaxed overflow-x-auto">
                    <pre className="whitespace-pre" dangerouslySetInnerHTML={{ __html: highlightCRUD(sql) }} />
                </div>
            </div>

            {/* ── Run Button ── */}
            <div className="flex gap-3">
                <button
                    onClick={runQuery}
                    className={`flex-1 font-outfit text-sm py-2.5 rounded-xl border transition-all ${ meta.color }`}
                >
                    ▶ Jalankan Query
                </button>
                <button
                    onClick={resetRows}
                    className="font-mono text-[11px] px-4 py-2 rounded-xl border border-border2 text-tmuted hover:text-tmuted2 hover:border-border2 transition-all"
                >
                    Reset
                </button>
            </div>

            {/* ── Feedback ── */}
            {feedback && (
                <div className={`font-mono text-[12px] px-4 py-3 rounded-xl border transition-all ${ feedback.ok ? 'text-tgreen bg-tgreen/5 border-tgreen/20' : 'text-tred bg-tred/5 border-tred/20' }`}>
                    {feedback.msg}
                </div>
            )}

            {/* ── Tabel Preview ── */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <label className="font-mono text-[10.5px] text-tmuted uppercase tracking-wider">Isi Tabel Saat Ini</label>
                    <span className="font-mono text-[10px] text-tmuted border border-border2 rounded-full px-2 py-0.5">{rows.length} baris</span>
                </div>
                <div className="bg-[#060910] border border-border1 rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b border-border1 px-4 py-2.5 bg-surface">
                        {['id', 'nama', 'umur'].map(col => (
                            <span key={col} className="font-mono text-[10.5px] text-tcyan uppercase tracking-wider">{col}</span>
                        ))}
                    </div>
                    {/* Rows */}
                    {rows.length === 0 ? (
                        <div className="px-4 py-6 text-center font-mono text-[12px] text-tmuted italic">
                            Tabel kosong — semua baris telah dihapus
                        </div>
                    ) : (
                        rows.map(row => {
                            const isNew = highlight?.id === row.id && highlight?.type === 'success'
                            const isUpdated = highlight?.id === row.id
                            return (
                                <div
                                    key={row.id}
                                    className={`grid grid-cols-3 border-b border-border1/40 px-4 py-2.5 font-mono text-[12px] transition-all duration-500 last:border-b-0 ${ isNew || isUpdated
                                        ? 'bg-tcyan/5 text-ttext'
                                        : 'text-tmuted2 hover:bg-surface/50'
                                        }`}
                                >
                                    <span className={isNew ? 'text-tcyan font-semibold' : 'text-tpurple'}>{row.id}</span>
                                    <span>{row.nama}</span>
                                    <span className="text-torange">{row.umur}</span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── EXISTING PREVIEWS (HTTP/Form — dari seri lain) ────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const STEPS = [
    { id: 0, label: 'Idle', icon: '💤', desc: 'Menunggu request...', actor: null },
    { id: 1, label: 'DNS Lookup', icon: '🔍', desc: 'Browser mencari alamat IP dari domain...', actor: 'client' },
    { id: 2, label: 'Kirim Request', icon: '📤', desc: 'Browser mengirim HTTP Request ke Server...', actor: 'client' },
    { id: 3, label: 'Diproses', icon: '⚙️', desc: 'Server memproses — mencari file/data...', actor: 'server' },
    { id: 4, label: 'Kirim Response', icon: '📥', desc: 'Server mengirim HTTP Response balik...', actor: 'server' },
    { id: 5, label: 'Render', icon: '🖥️', desc: 'Browser merender HTML — muncul di layar!', actor: 'client' },
]

function RequestResponseSim({ state, onFieldChange }) {
    const [step, setStep] = useState(0)
    const [running, setRunning] = useState(false)
    const timerRef = useRef(null)
    const url = state.url || ''

    const runFlow = () => {
        if (running || !url.trim()) return
        setRunning(true); setStep(0)
        let current = 0
        const next = () => {
            current++; setStep(current)
            if (current < STEPS.length - 1) timerRef.current = setTimeout(next, 1200)
            else setRunning(false)
        }
        timerRef.current = setTimeout(next, 400)
    }
    const reset = () => { clearTimeout(timerRef.current); setStep(0); setRunning(false) }
    const currentStep = STEPS[step]

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <input type="text" placeholder="contoh: https://toko.com/produk" value={url}
                    onChange={e => { onFieldChange('url', e.target.value); reset() }}
                    className="flex-1 bg-[#060910] border border-border2 rounded-xl px-4 py-2.5 font-mono text-[12.5px] text-ttext focus:outline-none focus:border-tcyan/50"
                />
                <button onClick={runFlow} disabled={running || !url.trim()} className={`font-outfit text-sm px-5 py-2 rounded-xl border transition-all ${ running || !url.trim() ? 'border-border2 text-tmuted bg-surface cursor-not-allowed' : 'border-[rgba(56,245,212,0.3)] bg-[rgba(56,245,212,0.08)] text-tcyan hover:bg-[rgba(56,245,212,0.15)]' }`}>
                    {running ? '...' : 'Kirim →'}
                </button>
            </div>
            <div className="bg-surface border border-border1 rounded-xl p-5">
                <div className="flex items-center justify-between mb-6 px-2">
                    <ActorNode type="client" active={currentStep.actor === 'client'} />
                    <div className="flex-1 mx-4 flex flex-col items-center gap-2">
                        <div className="relative w-full h-6 flex items-center">
                            <div className="w-full h-px bg-border2" />
                            {running && step > 0 && step < 5 && (
                                <div className={`absolute w-3 h-3 rounded-full border-2 transition-all duration-700 ${ currentStep.actor === 'client' ? 'right-0 bg-tcyan border-tcyan/50 animate-pulse' : 'left-0 bg-tpurple border-tpurple/50 animate-pulse' }`} />
                            )}
                        </div>
                        <div className={`font-mono text-[10px] px-3 py-1 rounded-full border text-center ${ step === 0 ? 'border-border2 text-tmuted' : step === 5 ? 'border-tgreen/30 text-tgreen bg-tgreen/10' : currentStep.actor === 'client' ? 'border-tcyan/30 text-tcyan bg-tcyan/10' : 'border-tpurple/30 text-tpurple bg-tpurple/10' }`}>
                            {currentStep.icon} {currentStep.label}
                        </div>
                    </div>
                    <ActorNode type="server" active={currentStep.actor === 'server'} />
                </div>
                <div className={`text-center font-mono text-[12px] py-3 px-4 rounded-xl border transition-all duration-300 ${ step === 0 ? 'border-border1 text-tmuted bg-card' : step === 5 ? 'border-tgreen/20 text-tgreen bg-tgreen/5' : currentStep.actor === 'client' ? 'border-tcyan/20 text-tcyan bg-tcyan/5' : 'border-tpurple/20 text-tpurple bg-tpurple/5' }`}>
                    {step === 0 ? (url.trim() ? 'Siap — tekan "Kirim →"' : 'Masukkan URL...') : currentStep.desc}
                </div>
            </div>
        </div>
    )
}

function ActorNode({ type, active }) {
    const isClient = type === 'client'
    return (
        <div className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${ active ? 'scale-110' : 'opacity-60' }`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 transition-all duration-300 ${ active ? (isClient ? 'bg-tcyan/10 border-tcyan/50 shadow-glow-cyan' : 'bg-tpurple/10 border-tpurple/50 shadow-glow-purple') : 'bg-card border-border1' }`}>
                {isClient ? '🖥️' : '🗄️'}
            </div>
            <span className="font-mono text-[10px] text-tmuted2 uppercase tracking-wider">{type}</span>
        </div>
    )
}

function URLDissectorSim({ state, onFieldChange }) {
    const url = state.url || ''
    let parsed = { valid: false }
    try {
        const u = new URL(url.includes('://') ? url : 'https://' + url)
        parsed = { protocol: u.protocol.replace(':', ''), domain: u.hostname, path: u.pathname !== '/' ? u.pathname : '', query: u.search.replace('?', ''), valid: true }
    } catch { "" }
    const parts = [
        { key: 'protocol', label: 'Protocol', color: 'text-tblue bg-tblue/10 border-tblue/20', desc: 'Cara komunikasi (https/http)' },
        { key: 'domain', label: 'Domain', color: 'text-tcyan bg-tcyan/10 border-tcyan/20', desc: 'Alamat server tujuan' },
        { key: 'path', label: 'Path', color: 'text-tpurple bg-tpurple/10 border-tpurple/20', desc: 'Lokasi file di server' },
        { key: 'query', label: 'Query', color: 'text-torange bg-torange/10 border-torange/20', desc: 'Data ekstra (key=value)' },
    ]
    return (
        <div className="flex flex-col gap-4">
            <input type="text" value={url} onChange={e => onFieldChange('url', e.target.value)} placeholder="Ketik URL..." className="w-full bg-[#060910] border border-border2 rounded-xl px-4 py-2.5 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
            <div className="bg-[#060910] border border-border1 rounded-xl px-4 py-3 font-mono text-[13px] min-h-[48px] flex items-center break-all">
                {parsed.valid ? (<><span className="text-tblue">{parsed.protocol}://</span><span className="text-tcyan">{parsed.domain}</span><span className="text-tpurple">{parsed.path}</span>{parsed.query && <span className="text-torange">?{parsed.query}</span>}</>) : <span className="text-tmuted">Ketik URL...</span>}
            </div>
            {parsed.valid && (
                <div className="grid gap-2">
                    {parts.map(p => parsed[p.key] && (
                        <div key={p.key} className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${ p.color }`}>
                            <div className="flex-1">
                                <span className="font-mono text-[10px] uppercase opacity-70 block">{p.label}</span>
                                <span className="font-mono text-[12.5px] font-semibold">{p.key === 'query' ? '?' : ''}{parsed[p.key]}</span>
                                <p className="text-[11px] opacity-70 mt-0.5">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function FormSimPreview({ config, state, onFieldChange }) {
    const isGet = state.method === 'GET'
    const qs = config.fields.map(f => `${ f.name }=${ state[f.name] || '' }`).join('&')
    const url = `proses.php${ isGet ? `?${ qs }` : '' }`
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-3">
                {config.fields.map(f => (
                    <div key={f.name}>
                        <label className="block font-mono text-[10.5px] text-tmuted uppercase mb-1">{f.label}</label>
                        <input type={f.type} value={state[f.name] || ''} onChange={e => onFieldChange(f.name, e.target.value)} className="w-full bg-[#060910] border border-border2 rounded-lg px-3 py-2 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-3 font-mono">
                <div className={`p-4 rounded-xl border ${ isGet ? 'bg-tpink/5 border-tpink/20 text-tpink' : 'bg-tcyan/5 border-tcyan/20 text-tcyan' }`}>
                    <p className="text-[10px] uppercase mb-2">🌐 URL Browser</p>
                    <div className="text-[11.5px] break-all">{url}</div>
                </div>
                <div className="p-4 rounded-xl border bg-surface border-border1">
                    <p className="text-[10px] text-tmuted uppercase mb-2">🐘 PHP {isGet ? '$_GET' : '$_POST'}</p>
                    {config.fields.map(f => (
                        <div key={f.name} className="text-[11.5px]">
                            <span className="text-tpurple">{isGet ? '$_GET' : '$_POST'}</span>['<span className="text-tgreen">{f.name}</span>'] = '<span className="text-torange">{state[f.name] || ''}</span>'
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function ValidatorSimPreview({ config, state, onFieldChange }) {
    const results = config.fields.map(f => ({ ...f, isEmpty: (state[f.name] || '').trim() === '' }))
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-3">
                {config.fields.map(f => (
                    <div key={f.name}>
                        <label className="block font-mono text-[10.5px] text-tmuted uppercase mb-1">{f.label}</label>
                        <input type={f.type} value={state[f.name] || ''} onChange={e => { onFieldChange(f.name, e.target.value); onFieldChange('submitted', false) }} className="w-full bg-[#060910] border border-border2 rounded-lg px-3 py-2 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
                    </div>
                ))}
                <button onClick={() => onFieldChange('submitted', true)} className="mt-1 w-full font-outfit text-sm py-2 rounded-xl border border-tcyan/30 bg-tcyan/10 text-tcyan hover:bg-tcyan/20 transition-all">Submit →</button>
            </div>
            {state.submitted && (
                <div className="bg-[#060910] border border-border1 rounded-xl p-4 font-mono text-[12px]">
                    <p className="text-tmuted text-[10px] uppercase mb-3">🐘 PHP Logic</p>
                    <div className="mb-3"><span className="text-tpurple">isset</span>($_POST[<span className="text-tgreen">'submit'</span>]) → <span className="text-tgreen">true</span></div>
                    {results.map(r => (
                        <div key={r.name} className="mb-2 pl-3 border-l border-border2">
                            <span className="text-tpurple">empty</span>($_POST['<span className="text-tgreen">{r.name}</span>']) → <span className={r.isEmpty ? 'text-tred' : 'text-tgreen'}>{r.isEmpty ? 'true' : 'false'}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── SHARED UTILITIES ──────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
    }
    return (
        <button onClick={copy} className={`font-mono text-[10.5px] px-3 py-1 rounded-lg border transition-all ${ copied ? 'text-tgreen border-tgreen/30 bg-tgreen/5' : 'text-tmuted2 border-border2 hover:border-tcyan/30 hover:text-tcyan' }`}>
            {copied ? '✓ Tersalin' : 'Copy'}
        </button>
    )
}

function ToggleGroup({ label, options, value, onChange }) {
    return (
        <div>
            <p className="font-mono text-[11px] text-tmuted uppercase tracking-wider mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button key={opt} onClick={() => onChange(opt)} className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-all ${ value === opt ? 'bg-tcyan/10 text-tcyan border-tcyan/30' : 'bg-surface text-tmuted2 border-border2 hover:border-tcyan/20' }`}>
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── DEMO WRAPPER ──────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

function Demo({ config }) {
    const [state, setState] = useState(config.defaultState)
    const handleChange = (key, val) => setState(prev => ({ ...prev, [key]: val }))

    const PreviewComponent = PREVIEW_REGISTRY[config.preview]

    return (
        <CardWrapper glow="cyan">
            <h3 className="font-syne font-bold text-base text-ttext mb-1">{config.label}</h3>
            <p className="text-tmuted2 text-[12.5px] mb-5">{config.description}</p>

            {PreviewComponent ? (
                <PreviewComponent config={config} state={state} onFieldChange={handleChange} />
            ) : (
                    <div className="text-tred font-mono text-xs italic">
                        Preview component "{config.preview}" not found in PREVIEW_REGISTRY.
                    </div>
            )}

            {config.controls?.length > 0 && (
                <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-border1">
                    {config.controls.map(ctrl =>
                        ctrl.type === 'toggle-group' && (
                            <ToggleGroup
                                key={ctrl.stateKey}
                                label={ctrl.label}
                                options={ctrl.options}
                                value={state[ctrl.stateKey]}
                                onChange={val => handleChange(ctrl.stateKey, val)}
                            />
                        )
                    )}
                </div>
            )}
        </CardWrapper>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export default function Playground({ data }) {
    const [activeDemo, setActiveDemo] = useState(data.demos[0].id)
    const currentDemo = data.demos.find(d => d.id === activeDemo)

    return (
        <section id={data.id} className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={data.id} badge={data.badge} title={data.title} />
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {data.demos.map(demo => (
                            <button
                                key={demo.id}
                                onClick={() => setActiveDemo(demo.id)}
                                className={`font-outfit text-sm px-4 py-2 rounded-xl border transition-all ${ activeDemo === demo.id ? 'bg-tcyan/10 text-tcyan border-tcyan/30' : 'bg-surface text-tmuted2 border-border2 hover:border-tcyan/20' }`}
                            >
                                {demo.label}
                            </button>
                        ))}
                    </div>
                    {currentDemo && <Demo key={currentDemo.id} config={currentDemo} />}
                </div>
            </div>
        </section>
    )
}