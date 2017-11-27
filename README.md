# First React app - follow along lesson

## ORIGINAL REACT README IS AVAILABLE IN THE FILE originalREADME.md
The original React readme file is full of content I haven't seen before since this is my first react app so keeping it for future reference just in case.

## Steps taken in class

1. Because we hadn't used React before, installed it with the terminal command:
    ```
    yarn global add create-react-app
    ```
1. Make a new folder for your project, in this case called *react-flight-booking* by doing in the terminal:
    ```
    yarn create react-app react-flight-booking
    ```
1. A new directory will be created called **react-flight-booking** and be prepopulated with numerous files. Opened it in VSCode and ran its server with the terminal command: 
    ```
    yarn start
    ```
1. Removed all the code in src/App.css and add the following:
    ```css
    h1 {
      color: rebeccapurple;
    }
    ```
1. Removed the code in src/App.js from line 9 till just before the closing `</div>`
1. Add to src/App.js (in the `return` block):
    ```javascript
    <div className=“App”>
      <h1> This is a heading </h1>
    
      deleted all content

    </div>
    ```
1. Create a **folder** called **components** within the **src** folder.
1. Create a file within the **components** folder called **Buttons.js** with the following initial code:
    ```javascript
    import React from 'react'

    function Button() {
      return (
        <button>
          Click me 
        </button>
      )
    }

    export default Button
    // modern way of writing modeul.exports = Button
    ```
1. You can pull it into your App.js file with this code:
    ```javascript
    import Button from './components/Button'
    ```
1. Add to your index.css file:
    ```css
    .btn {
      color: #111;
      background-color: white;
      border: 1px, solid #aaa;
      border-radius: 3px;
    }
    ```

...

1. Added react developer tools for your browser(I'm using firefox) so you can view source in your browser https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

1. create a new file in your components folder called **Emoji.js**
    ```javascript
    import React from 'react'

    function Emoji ( {
      sad = false,
      cat = false
    }) {
        let text = '🐱'
        if (cat) {
          if (sad){
            text = '😿'
          }
          else{
            text = '😺'
          }
        }
        else{
          if (sad){
            text = '😢'
          }
          else{
            text = '🙂'
          }
        }
      
        return(
          <span>
            { text }
          </span>
        )
      } 

    export default Emoji
    ```
1. 




