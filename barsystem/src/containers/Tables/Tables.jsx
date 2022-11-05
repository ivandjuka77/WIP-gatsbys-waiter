import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { PopupMain } from '../../components';

import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';

import './Tables.scss';

const Tables = () => {
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	// Check if user is logged in
	useEffect(() => {
		if (!user) {
			navigate('/login');
			toast.error('Please Log In', {
				toastId: 'tables',
			});
		}
	}, [user, navigate]);

	const [togglePopup, setTogglePopup] = useState(false);

	return (
		<div>
			<PopupMain
				trigger={togglePopup}
				setTrigger={setTogglePopup}
			>
				{' '}
				My popup
			</PopupMain>
			<div className='tables'>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #1
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #2
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #3
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #4
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #5
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #6
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #7
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #8
				</button>
				<button
					className='button-27'
					onClick={() => setTogglePopup(true)}
				>
					Table #9
				</button>
			</div>
		</div>
	);
};

export default Tables;
