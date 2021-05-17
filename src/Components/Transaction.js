import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? "-" : "+";
	const classname = transaction.amount < 0 ? "minus" : "plus";
	return (
		//minus -> red , plus -> green
		<li className={classname}>
			{transaction.text}
			<span>
				{sign}₹{Math.abs(transaction.amount)}
			</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn"
			>
				x
			</button>
		</li>
	);
};

export default Transaction;
