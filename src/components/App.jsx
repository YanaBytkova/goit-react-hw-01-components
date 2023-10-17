import { Profile } from "./Profile/Profile";
import user from "./user.json";
// console.log("user",user);

export const App = () => {
  return (

          <Profile
            key={user.username}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
 
  );
};
