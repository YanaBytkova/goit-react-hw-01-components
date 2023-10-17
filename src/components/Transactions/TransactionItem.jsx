export const TransactionItem = ({ items }) => {
    return (
        <div>

            {items.map(item => {
            return (
                
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                
            
            );
          })}
        </div>
    )
    };