import Table from '../Table/Table';
import PopupDrink from '../PopupDrink/PopupDrink';

import './PopupMain.scss';

const PopupMain = (props) => {
	return props.trigger ? (
		<div className='popup'>
			<div className='popup-inner'>
				<PopupDrink />
				<Table />
				<button
					className='btn-close'
					onClick={() => props.setTrigger(false)}
				>
					Close
				</button>
			</div>
		</div>
	) : (
		''
	);
};

export default PopupMain;
