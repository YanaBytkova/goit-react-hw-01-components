import css from './Transactions.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
    return (
        <div className={css.container}>

                <table className={css.transactionHistory}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                  </tr>
                </thead>
              
                <tbody>
               
                    <TransactionItem 
                   
                    items={items}
                    />
                </tbody>
              </table>
        </div>
    )
    };

        