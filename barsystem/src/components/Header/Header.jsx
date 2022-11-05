import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import './Header.scss';

export default function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Get user from state
	const { user } = useSelector((state) => state.auth);

	// Logout user
	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/login');
	};

	return (
		<div className='header'>
			<nav className='navbar'>
				<Link to='/'>
					<img
						src='https://cdn.shopify.com/s/files/1/0637/5611/products/Gatsby-monogram-art-deco-border-wax-seal.jpg?v=1610359565'
						alt='logo'
						className='nav-logo'
					/>
				</Link>
				<ul className='nav-links'>
					{user ? (
						<Link
							to='/login'
							className='nav-link-item'
							onClick={onLogout}
						>
							<li className='nav-login'>Log Out</li>
							<FaSignOutAlt className='login-icon' />
						</Link>
					) : (
						<>
							<Link
								to='/login'
								className='nav-link-item'
							>
								<li className='nav-login'>Log In</li>
								<FaSignInAlt className='login-icon' />
							</Link>
							<Link
								to='/register'
								className='nav-link-item'
							>
								<li className='nav-register'>Register</li>
								<FaUser className='register-icon' />
							</Link>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
}
