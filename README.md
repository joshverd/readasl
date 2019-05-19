# ReadASL.com Source Code

To start the Front End, navigate to the cloned directory run the following commands:
```
npm i
npm start
```
then navigate to `localhost:3000`.

### Directory Map
**./src** contains all the source JSX/SCSS
  - **./actions** && **./reducers** are for Redux
  - **./containers** has all the React containers used.
    - In the future if multiple routes are needed, this is where they should go.
  - **./components** contains all React components used by the app
  - **./utils** contains all the utility functions the app uses to perform actions.
    - Should be small and specific pieces of code
