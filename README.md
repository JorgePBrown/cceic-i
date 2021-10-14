# Active listening modules

All the modules are in the [modules.json](src/modules.json) file.

Listening and practice modules are together in the same object. The info property will be displayed when in learning mode and the questions property will be used in practice mode.

## Learning Modules

The learning module corresponds to the `info` property of each module.

The value of this property is an array of info objects. There are 3 types of info objects: text, list and video. All info objects have a property `type` that denotes their type.

```json
"info": [{
        "type": "video/youtube",
        "link": "https://www.youtube.com/embed/rzsVh8YwZEQ"
    },{
        "type": "text",
        "text": "Active listening requires us as listeners to capture what the sender is communicating from the sender's point of view through verbal and non-verbal cues.​ More than that, we must convey to the sender that we are seeing things from the sender's point of view.​ We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."
}]
```

### Text

Info objects of the type text should have a `string` they want to show in the property `text`.

```json
{
    "type": "text",
    "text": "Active listening requires us as listeners to capture what the sender is communicating from the sender's point of view through verbal and non-verbal cues.​ More than that, we must convey to the sender that we are seeing things from the sender's point of view.​ We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."
}
```

### List

Info objects of the type `text/list` should have the list they want to show in the property `items` as a `string` `array`.

```json
{
    "type": "text/list",
    "items": [
        "Paraphrasing - It shows interest and encourage others to keep talking. It consists in restating the information spoken with the listern's own words.",
        "Verbalizing Emotions - It shows the speaker that the listener understands his or her feelings and helps build empathy.",
        "Asking - Asking is done with the intention of acquiring more information, which will make the speaker think the listener is invested in the conversation."
    ]
}
```

### Video

Info objects of the type `video/youtube` should have the video they want to show in the property `link` as an `url`. This URL can be obtained from a youtube video by clicking the **share** option and then **embed**.

```json
{
    "type": "video/youtube",
    "link": "https://www.youtube.com/embed/rzsVh8YwZEQ"
}
```

## Practice Modules

The practice modules consist of the `questions` property on each module.

The value of this property should be an array of question objects.

These objects have 3 properties: 
- question: `string`
  - The question to be asked
- answer: `bool`
  - The yes(true) or no(false) to the question
- help: `string`
  - A message that is shown when the user answer the question wrong 

```json
"questions": [
    {
        "question": "Is active listening all about what the other person is saying?",
        "answer": false,
        "help": "No, it's about what they are saying and what their body language is showing."
    },
    {
        "question": "Does the listener only have to attentively listen and read the speaker's body language?",
        "answer": false,
        "help": "No, it's important that the listener reinforces that they are listening, for example, through paraphrasing.​"
    },
    {
        "question": "Should the listener ask questions?",
        "answer": true,
        "help": "Asking can help the listener clarify something he might have misunderstood and it also shows the speaker that the listener is interested in and understanding what he is saying."
    }
]
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

This script creates a gh-pages branch where there will be a built version of the website ready to be deployed to GitHub pages.