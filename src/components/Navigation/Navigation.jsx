import {
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./Navigation.styled";

const Navigation = () => (
  <nav>
    <NavigationList>
      <NavigationItem>
        <NavigationLink
          end
          to="/"
        >
          Home
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink
          to={{
            pathname: "movies",
            state: 5,
          }}
        >
          Movies
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </nav>
);

export default Navigation;
