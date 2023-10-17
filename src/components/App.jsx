import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory} from "./Transactions/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
// console.log("user",user);
// console.log("friends",friends);
console.log("transactions",transactions);
export const App = () => {
  return (
    <div>
                <Profile
            key={user.username}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics stats={data} title="Upload stats"/>
          <Statistics stats={data} />
          <FriendList friends={friends}/>
          <TransactionHistory items={transactions}/>;
          
    </div>

          
  );

};
