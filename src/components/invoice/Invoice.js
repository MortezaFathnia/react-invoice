import React from 'react'
import classes from './Invoice.module.scss';

const Invoice = () => {
    return (
        <div>
            <div className={`${classes.headerList}`}>
                <p>Description</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Amount</p>
            </div>
            <div className={`${classes.InvoiceList}`}>
                <div className={`${classes.InvoiceItem}`}><p><span>Product A</span><span>Item Description</span></p><p>$20.00</p><p>10</p><p>$200.00</p></div>
                <div className={`${classes.InvoiceItem}`}><p><span>Item Fee</span><span>Item Description</span></p><p>$9.99</p><p>1</p><p>$9.99</p></div>
            </div>
        </div>
    )
}

export default Invoice;
