import React from "react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const data = useSelector((state) => state.cartreducer.orderHistory);
  return (
    <div>
      <h3>My Orders</h3>
      {data.map((item) => {
        let flag = false;
        return Object.keys(item).map((it) => {
          if (typeof item[it] === "object") {
            return (
              <div>
                <span>{item[it].rname}</span>
                <br></br>
                <img
                  className="img-order"
                  src={item[it].imgdata}
                  aria-hidden
                  alt="image"
                />
                <span>Quantity: {item[it].qnty}</span>
                <span>*</span>
                <span>Price: Rs.{item[it].price}</span>
                <br></br>
              </div>
            );
          } else if (typeof item[it] !== "object" && flag === false) {
            flag = true;
            return (
              <div className="order-details">
                <div>
                  <span>OrderID: {item.orderID}</span>
                </div>
                <span>OrderDate: {item.orderDate}</span>
                <br />
                <span>Total Amount To be Paid:{item.TotalAmount}</span>

                <hr />
              </div>
            );
          }
        });
      })}
    </div>
  );
};
export default OrderPage;
