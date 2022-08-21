import '../Transactions/TransactionPage.css';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import SortIcon from '@mui/icons-material/Sort';
import discountuser from "../../images/discount.svg";
import refunduser from "../../images/refund.svg"
import { Link } from 'react-router-dom';
import { DiscountData } from './DiscountData';
import { Refund } from './DiscountData';
const Transactionpage = () => {
    return (  
        <div className="transactionpage">
            <div className="transaction-header">
            <div className="transaction-header-outer">
                <div className='transaction-header-inner'>
                  <div className="transactionicon">
                    <Link to="/officeproject">
                       <span><ChevronLeftOutlinedIcon/></span>
                    </Link>
                  </div>
                  <div className="transactionTitle">
                      <span><TuneIcon/></span>
                      <p>Transaction</p>
                  </div>
                  
               
              
                <div className="transactionsort">
                  <span>
                    <SortIcon/>
                  </span>
                  <p>Sort by</p>
                </div> 
                </div>
            </div>
            </div>
            <div className="transaction-top">
                <p>Transaction</p>
                <p>Staff</p>
                <p>For Order</p>
                <p>Amount</p>
            </div>
            <div className="transaction-date">
                <p>THURSDAY, 18 OCT</p>
            </div>
            <div className="transactioncontent">
                {DiscountData.map((discount,key)=>{
                return(
                    <div 
                       className= "transaction-table"
                       key={key}
                    >
                        <div className="transaction-user-details">
                            <div className="transaction-center-image">
                                <img src={discountuser} className="transaction-image"/>
                            </div>
                            
                            <div className="transaction-title">
                                <div>
                                    <p className='discount'>{discount.transanctiontitle}</p>
                                    <p className='time'>{discount.time}</p>
                                </div>
                                
                            </div>
                            <div className="staff-details">
                                <div>
                                    <p className='staff'>{discount.Name}</p>
                                    <p className='occupation'>{discount.occupation}</p>
                                </div>
                                
                            </div>
                            <div className="food-order">
                                <nav>
                                    <p className='order-number'>Order {discount.orderno}</p>
                                    <p className='food'>{discount.food}</p>
                                </nav>
                            </div>
                            <div className="amount">
                                <p>#{discount.Amount}</p> 
                            </div>
                    </div>
                    </div>
                )})}
                <div className="transaction-date">
                    <p>WEDNESDAY, 17 OCT</p>
                </div>
                {Refund.map((discount,key)=>{
                return(
                    <div 
                       className= "transaction-table"
                       key={key}
                    >
                        <div className="transaction-user-details">
                            <div className="transaction-center-image">
                                <img src={refunduser} className="transaction-image"/>
                            </div>
                            
                            <div className="transaction-title">
                                <div>
                                    <p className='discount'>{discount.transanctiontitle}</p>
                                    <p className='time'>{discount.time}</p>
                                </div>
                                
                            </div>
                            <div className="staff-details">
                                <div>
                                    <p className='staff'>{discount.Name}</p>
                                    <p className='occupation'>{discount.occupation}</p>
                                </div>
                                
                            </div>
                            <div className="food-order">
                                <nav>
                                    <p className='order-number'>Order {discount.orderno}</p>
                                    <p className='food'>{discount.food}</p>
                                </nav>
                            </div>
                            <div className="amount">
                                <p>#{discount.Amount}</p> 
                            </div>
                    </div>
                    </div>
                )})}
                    {/* <table>
                        <thead>
                             <tr>
                                <th>Transaction</th>
                                <th>Staff</th>
                                <th>For Order</th>
                                <th>Amount</th>
                             </tr>
                        </thead>
                       
                        <div className="transaction-date">
                            <p>Thursday, 18 OCT</p>
                        </div>
                        {DiscountData.map((discount, key)=>{
                            return(
                                    <tbody
                                    className="transaction-table" 
                                    key={key}>
                                        <tr>
                                            <td><img src={discount}/></td>
                                            <td>{discount.transanctiontitle}</td>
                                            <td>{discount.time}</td>
                                            <td>{discount.Name}</td>
                                            <td>{discount.occupation}</td>
                                            <td>order{discount.orderno}</td>
                                            <td>{discount.food}</td>
                                            <td>{discount.Amount}</td>
                                        </tr>
                                    </tbody>
                            )
                    })}
                    </table> */}
                    
            </div>
        </div>
    );
}
 
export default Transactionpage;