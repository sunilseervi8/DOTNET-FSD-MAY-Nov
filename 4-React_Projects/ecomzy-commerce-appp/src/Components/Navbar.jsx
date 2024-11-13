import react from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

    const cart = useSelector((state) => state.cart)
    return (
        <>
            <div className='flex flex-row justify-between bg-gray-200 p-4'>

                <NavLink to="/">
                    <div>
                        <img src='https://image.similarpng.com/very-thumbnail/2021/09/Online-shopping-logo-design-template-on-transparent-background-PNG.png' alt='logo' height={40} width={40} />
                    </div>
                </NavLink>
                <NavLink to='/'><p>Home</p></NavLink>
                <NavLink to="/cart">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <i className="bi bi-cart-fill text-3xl text-gray-700"></i>
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full transform translate-x-2 -translate-y-2">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </div>

                </NavLink>
            </div>
        </>
    )
}


export default Navbar
