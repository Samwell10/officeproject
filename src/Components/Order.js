import { OrderData } from "./OrderData";
const Order = () => {
    return ( 
        <div className="order">
             <div className="content-title">
                <p>Orders</p>
            </div>
            <div className="order-container">
                {OrderData.map((order, key)=>{
                    return(
                        <div 
                            className="order-preview" 
                            key={key}>
                            <div className="order-inner">
                                <div className="order-icon">{order.icon}</div>
                                <div className="order-content">
                                    <p className="order-name">{order.title}</p>
                                    <p className="order-price">{order.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Order;
