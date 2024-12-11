import logo from '@/assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
    return (
        <section className='container mx-auto'>
            <header className='flex flex-cols rtl'>
                <div className="flex items-center justify-start w-full">
                    <section className="flex items-center">
                        <img src={logo} alt="Logo" className='w-14' />
                        <h1 className="text-2xl p-5">Convoys</h1>
                    </section>
                </div>

                <nav className='flex items-center justify-end w-full h-16'>
                    <ul className='flex'>
                        <li className='mx-4'>
                            <NavLink to='/'>الرئسية</NavLink>
                        </li>
                        <li className='mx-4'>
                            <a href='#'>عن الموقع</a>
                        </li>
                        <li className='mx-4'>
                            <a href='#'>اتصل بنا</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    )

}