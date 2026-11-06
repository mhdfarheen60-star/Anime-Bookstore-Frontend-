import { Link } from 'react-router-dom'
import { Button } from '../components/Ui'

// Placeholder module — the Books and Categories modules are the real catalogue
// management surfaces. Kept so the route in App.jsx stays valid.
function Resource() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Resources</h1>
      <p className="mt-2 max-w-prose text-sm text-slate-500">
        This module is not implemented yet. Use Books and Categories to manage the
        catalogue that shoppers see.
      </p>
      <div className="mt-6 flex gap-3">
        <Link to="/admin/books"><Button>Go to Books</Button></Link>
        <Link to="/admin/categories"><Button variant="ghost">Go to Categories</Button></Link>
      </div>
    </div>
  )
}

export default Resource
