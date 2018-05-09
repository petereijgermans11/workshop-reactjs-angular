
# Workshop ReactJS and Angular
Hey guys, tonight you'll have to build this app:

![Bookstore gif](https://i.imgur.com/iD69CC9.gif)

Using either react or angular, choose your weapon ⚔
## Getting started
```bash
git clone https://github.com/petereijgermans11/workshop-reactjs-angular.git

# If you want to use React
cd ./react-app
yarn start

# Happy hacking ! ;-)
```

## Todo:
- Fix all the bugs before building new features

# ERROR 1:

Failed to compile.

Error in ./src/Components/Bookdetail.jsx
Syntax error: Unexpected token, expected , (54:36)

                  </div>
                    <button onClick="this.goBack">Back</button>
                    <button onClick=this.save>Save</button>
                                     ^
                  </div>
                


  **Solution:**

                    <button onClick={this.goBack}>Back</button>
                    <button onClick={this.save}>Save</button>

# ERROR 2:   

All JavaScript expressions in the render()-functions in all JSX-files has NO curly braces, example:

    render(){
           return <h1>Hello, this.props.name </h1>;
    }

**Solution:**

You have to embed any JavaScript expression in all JSX-files by wrapping it in curly braces:

    render(){
            return <h1>Hello, { this.props.name }</h1>;
    }


# ERROR 3:
webpackHotDevClient.js:198 ./src/Components/Dashboard.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Dashboard.jsx
  3:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Dashboard.jsx (see example on the slides)

# ERROR 4:
webpackHotDevClient.js:198 ./src/Components/BookSearch.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/BookSearch.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the BookSearch.jsx (see example on the slides)

# ERROR 5:

webpackHotDevClient.js:198 ./src/Components/Books.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Books.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Books.jsx

# ERROR 6:
webpackHotDevClient.js:198 ./src/Components/Bookdetail.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Bookdetail.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Bookdetail.jsx
 