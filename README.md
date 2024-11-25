# The React Bootcamp from udemy.com

## Props, Hooks, Context, NextJs, Router

### Lectures:

03 - Conditional rendering. Props.\
04 - Loops in React - .map() method.\
04 - Events. onClick + useState.\
04 - React Events. |Section 10 #69|. Example: onKeyUp, onCopy, onMouseEnter\
04 - 04_React_Events_Buttons_Demo. React Events + useState. |Section 10 #73|\
05 - .defaultProps\
05 - Fruit_Modules -> Arrays[] + logic.\
05 - Pokemon Game |Section 5|-> Props, arrays, conditional statement, logic, components hierarchy, styling.\
06 - Hooks & useState() |Section 32 #248|\
06 - Custom Hook |Section 32 #249| - useToggle on useState\
07 - Custom Hook |Section 32 #250| - useInputState on useState to manage input behaviour\
08 - useEffect hook |Section 32 #251|\
08 - useEffect hook for API-calls or HTTP requests.|Section 32 #252|\
AXIOUS packages are used -> Promise based HTTP client for the browser and node.js\
08 - useEffect_recup - recup of useEffect.

09 - 🎲 🎲 Practice -> Roll_Dice_React-state-exercise.|Section 7|\
useState and props. \

Icons used from fontawesome.com. -> script embedded inside index.html. \
Icon is: fa-solid fa-dice- inside <i> tag in Die.jsx || <i class="fas fa-dice-one"></i> fas fa-dice-one through fas fa-dice-six represent dice with different faces, 1-6. \

10 - React State Patterns |Section 8|:

- Update state based off of existing state |Section 8 #58| -> example ScoreKeeper.jsx
- State updates for mutable data structure |Section 8 #59| -> example IconList.jsx
- Best practices to modeling state and designing components |Section 8 #60 | /1.Minimaze your state. 2.State should live on the parent/ -> example ./lottery\

11 - Coin_Flipper - React state exercises |Section 8 #65|\
🪙 The exercies to practice working with props, default values, state, and simple click events in React.

11 - Color_Boxes - React state exercises |Section 8 #68|\
The exercies to practice working with props, default values, state, and simple click events in React.
🟪 For this part, you should show a series of 16 boxes (a box is just square div with a background color).
Initially, each box should have a background color chosen from a random list of colors.
When you click any box: it should change its color to a different random color.

#### 20 - React Router:

20_Route_as_useState - to show a kind-of navigation, but we don't get:\
❌ a different URL as we move around pages\
❌ the ability to use the back/forward browser buttons\
❌ any way to bookmark a "page" on the site\
❌ more complex route/pattern matching\

20_2_Route_as_Rout - <Link> vs <a href="">; <NavLink> when active for easier styling.

#### 21 - Vending Machine Exercise:

- React Router and Routs basics;\
- <Link> and <NavLink> navigation;\
- props.children.\

#### 22 - React_Router_Patterns:

- Patterns to built routes in React;\
- useParams() - hook to retrive url parameters from the current route;\
- adding 404 page;\
- search form - to take a user to another place on your webpage using <Link> and path inside it to show up in the url;\
- Redirects in React Router - mimic the behaviour of SSR. Using <Navigate > from react-router-dom /under version #6 of react-router used <Redirect>, it is <Naigate> now/;\
- <useNavigate>. The .push method on the history object is no longer available in React Router v6. React Router v6 introduced a new API that simplifies navigation and eliminates the history prop. Instead of history.push and <withRouter>, you now use the useNavigate hook to programmatically navigate between routes.
- history.goBack() method has been replaced with the navigate(-1) method, which is provided by the useNavigate hook. This allows you to navigate back to the previous page in the browser's history stack.
