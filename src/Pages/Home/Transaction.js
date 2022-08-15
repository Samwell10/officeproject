import { TransactionData } from "./TransactionData";
import user from '../../images/usertransaction.svg'
const Transaction = () => {
    return ( 
        <div className="transaction">
             <div className="content-title">
                <p>Orders</p>
            </div>
            <div className="transaction-nav">
                <nav>
                    <li><a href="#" className='active-transaction'>Ongoing</a></li>
                    <li><a href="#" className='nonactive-transaction'>Other Orders</a></li>
                </nav>
            </div>
            {TransactionData.map((transaction,key)=>{
                return(
                    <div 
                       className= "transaction-user-outer"
                       key={key}
                    >
                        <div className="transaction-user">
                            <div className="transaction-center">
                                <img src={user} className="transaction-image"/>
                            </div>
                            
                            <div className="transaction-info">
                                <div>
                                    <p className='customer'>{transaction.customer}</p>
                                    <p className='time'>{transaction.timeoforder} hours ago</p>
                                </div>
                                
                            </div>
                            <div className="address">
                                <p>{transaction.address}</p>
                            </div>
                            <div className="items-ordered">
                                <nav>
                                    <li>{transaction.itemorderd[0]}</li>
                                    <li>{transaction.itemorderd[1]}</li>
                                </nav>
                            </div>
                            <div className="transaction-remark">
                                <div>
                                    <button>Completed</button>
                                    <p className="order-no">Order {transaction.id}</p>
                                </div>
                            
                            </div>
                            <div className="bill">
                            <p>#{transaction.price}</p> 
                            </div>
                    </div>
                    </div>
                )})}
        </div>
     );
}
 
export default Transaction;