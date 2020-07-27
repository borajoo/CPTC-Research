# Getting Started
 

# ReactJS


- ReactJS is the framework the CPTC Project is built with. I suggest you read the articles under the Main Concepts tab of the REACTJS documentation website. [This link](https://reactjs.org/docs/hello-world.html) is to the first article explain how to write a hello world program in ReactJS.
- After reading about the Main Concepts of ReactJS, I would take another look at the [src](https://github.com/ThomKaar/CPTC-Research/tree/master/thermalComfortApp/src) folder of the app and things should make more sense to you. There are still a few loose ends from the React documentation about React Hooks that can be tied up [here](https://reactjs.org/docs/hooks-intro.html)

# Ionic 

- Ionic is the technology we use to convert our Web based code into code that can creates an app. It is pretty cool concept, we just build a website and then run a few commands on our command line and then our website can also be posted to the app store!

### Ionic Documentation

- The general documentation for Ionic is found [here](https://ionicframework.com/docs/) 
- The documentation I use the most is the UI Components documentation which is found [here](https://ionicframework.com/docs/components). Ionic gives us out of the box components thats are ready to be inserted into our React Pages Examples of importing an Ionic Component can be found [here](https://github.com/ThomKaar/CPTC-Research/blob/bda882f605f4a244503e17f83ee868556b9b5fa0/thermalComfortApp/src/pages/Survey.tsx#L1) and using that component inside of the JSX return is [here](https://github.com/ThomKaar/CPTC-Research/blob/bda882f605f4a244503e17f83ee868556b9b5fa0/thermalComfortApp/src/pages/Survey.tsx#L308).


### Ionic Command Line Tools

- To convert your web code in ReactJS to code for iOS go to the [iOS docs here](https://ionicframework.com/docs/deployment/app-store) and for Android go to the [Android docs here](https://ionicframework.com/docs/deployment/play-store).


### Update as of 07/24
To get the Android studio working this is what I ran on my terminal.
```
rm -rf /Users/restvo/Desktop/Winter20/sp/zoom/CPTC-Research/thermalComfortApp/android
npx cap add android
ionic build
ionic cap copy
ionic cap open android
```
After running those the project in Android Studio should work. 
