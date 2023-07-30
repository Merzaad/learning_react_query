import { Outlet, NavLink } from 'react-router-dom'
export default function Layout() {
  const activeNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-teal-500' : 'text-zinc-500'
  return (
    <div className='h-full flex flex-col'>
      <nav className='flex items-center justify-center gap-2 p-4'>
        <NavLink className={activeNavClass} to=''>
          HOME
        </NavLink>
        <NavLink className={activeNavClass} to='page1'>
          PAGE1
        </NavLink>
      </nav>
      <div className='grow'>
        <Outlet />
      </div>
    </div>
  )
}
