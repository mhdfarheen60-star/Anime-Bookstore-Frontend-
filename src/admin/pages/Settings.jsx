import { useAuth } from '../../context/useAuth'
import { Alert } from '../components/Ui'

// Read-only settings summary. Editing these values is not exposed yet, so we
// show the live session state instead of a form that cannot be saved.
function Settings() {
  const { user } = useAuth()

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-2 text-sm text-slate-500">
        Store-wide configuration is not editable from the panel yet. This page
        summarises the account you are signed in with.
      </p>

      <Alert
        tone="info"
        message="Environment values (API URL, MongoDB URI, JWT secret) live in backend/.env and cannot be changed from here."
      />

      <dl className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {[
          ['Signed in as', user?.name || '—'],
          ['Email', user?.email || '—'],
          ['Role', user?.role || '—'],
          ['Account status', user?.isActive === false ? 'Deactivated' : 'Active'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 px-5 py-4">
            <dt className="text-sm text-slate-500">{label}</dt>
            <dd className="text-sm font-semibold text-slate-700">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Settings
