import { useState } from 'react'
import { DROPDOWN_RELATIVE, DROPDOWN_ABSOLUTE } from '../../../../libs/const';

const TimeRange = ({ startDate, endDate, dropdownState, onDateChanged, relativeValue, onRelativeChanged}) => {
	if (dropdownState === DROPDOWN_ABSOLUTE) {
		return <AbsoluteTimeRange startDate={startDate} endDate={endDate} onDateChanged={onDateChanged} />
	}

	if (dropdownState === DROPDOWN_RELATIVE) {
		return <RelativeTimeRange relativeValue={relativeValue} onRelativeChanged={onRelativeChanged}/>
	}

	return <p>Something went wrong</p>;
}

const AbsoluteTimeRange = ({startDate, endDate, onDateChanged}) => {
	// TODO: add a button to execute update
	const [state, setState] = useState({
		startDate: startDate.toFormat("yyyy-MM-dd"),
		endDate: endDate.toFormat("yyyy-MM-dd")
	});


	return (
		<div className="col-11">
			<div className="row p-0 ml-2 level">
				<div className='col-md-5 col-xs-12'>
					<input
							type="date"
							style={{ "paddingTop": "0.5rem", "paddingBottom": "0.5rem" }}
							value={state.startDate}
							onChange={(e) => setState({...state, startDate: e.target.value})}
							onBlur={(e) => onDateChanged("start", state.startDate)}
					/>
				</div>
				<div className='col-md-1 col-xs-12' style={{width: '4%'}}>
					<span class="icon subtitle" style={{ "fontSize": "28px", "color": "black" }}>
							<i class="fa-wrapper fa fa-long-arrow-alt-right"></i>
					</span>
				</div>
				<div className='col-md-5 col-xs-12'>
					<input
							type="date"
							style={{ "paddingTop": "0.5rem", "paddingBottom": "0.5rem" }}
							value={state.endDate}
							onChange={(e) => setState({ ...state, endDate: e.target.value })}
							onBlur={(e) => onDateChanged("end", state.endDate)}
					/>
				</div>
			</div>
		</div>
	)
};

const RelativeTimeRange = ({relativeValue, onRelativeChanged}) => (
	<div className="col-11">
		<div className="row p-0 ml-2 level">
			<div className="col-5 ignore-screen level-item input-control">
				<select 
					style={{ "paddingTop": "0.5rem", "paddingBottom": "0.5rem", "marginTop": "-0.3rem"}} 
					onChange={(e) => onRelativeChanged(e.target.value)}
					value={relativeValue}
				>
					<option value="7">Last 7 days</option>
					<option value="14">Last 14 days</option>
					<option value="30">Last 30 days</option>
					<option value="60">Last 60 days</option>
					<option value="90">Last 90 days</option>
					<option value="365">Last 365 days</option>
				</select>
			</div>
		</div>
	</div>
);

export default TimeRange;