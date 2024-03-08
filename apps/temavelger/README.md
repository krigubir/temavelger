# Temavelgeren

Uncertain about how **Designsystemet** can adapt to your needs? **Temavelgeren** is a tool for those who want to utilize Designsystemet with their own brand. This tool will allow you to explore various adjustments such as brand-color, action-color, border-radius settings, and more. Temavelgeren enables you to see how your choices will affect Designsystemets components in real-time. Subsequently, a CSS file is generated which you can easily incorporate into your own project.

## 🚀 Get started
Follow these steps to try out **temavelgeren**

### 1. Clone the repo
Clone this repo to your local machine:
```
git clone https://github.com/krigubir/temavelger.git
```

### 2. Install dependencies and build
Install dependencies
```
yarn install && yarn build
```

### 3. Run application in devmode
```
yarn dev
```

## 📖 Guidelines
**Temavelgeren** is designed to work with Designsystemets components and design-tokens. Make adjustments and copy the output into your own project!

### 🎨 The Design Menu  
#### Color Picker
The color picker tool allows you to choose brand-colors for your design and will affect the overall appereance.

#### Action Color Picker
This tool allows you customize specific action-components. The available colors are defined by your colors of choice in the color picker. Currently, the action color picker will allow you separately customize _button-first, button-second and form-elements_. 
- Button-first will adjust the color of all button components and their connected states.
- Button-second components are meant to be used in situations that require a denser UI (for example an admin-view).
- Form-elements will affect the following components: radio, checkbox, textfield.

#### Border Radius Select
Customize the border radius

#### Font Family Select
When choosing a font-family, make sure you have it installed locally on your computer in order to see the changes. 

### 🖥 Preview Area
The preview area is a composition of a selection of customizable components from Designsystemet. You have the option to switch between different previews in order to get a better sense of how your design is going to look. Use the toggle-group to select between previews.

### 💾 Generate Output (CSS)
When you are happy with the design, click on the _Generate ouput_ button. This will generate a CSS-file with all the custom design-tokens necessary to represent your design choices. Copy and paste the output into your CSS file. Your custom design is now applied! 

## 🔏 Documentation
### Purpose
**Temavelgeren** is a tool that allows you to explore and customize components from Designsystemet. It's purpose is to make it easy for users to adopt the design system and tailor it to their own brand. The tool presents the user with a range of adjustment options that will affect a selection of components in real-time. Subsequently, the decisions will be available as an automatically generated CSS file, which the user can easily incorporate into their own project. Temavelgeren functions as a creative tool that helps maintain identity while showcasing all customizable components of the design system.

### Technology and Tools
The Theme Selector is developed using the Designsystemets own components. Similar to Designsystemet, the tool is written in TypeScript with React as framework. The application utilizes CSS modules for styling components.

### Folder structure
- components
- contexts
- data
- layouts
- reducer
- utils
#### components
This folder contains reusable components that build the user-interface of the application. The structure is as follows:
  - ComponentName.tsx:
  - ComponentName.module.css:

#### contexts
The application utilizes **useReducer** and **ContextAPI** to manage the application's state. The _reducerContext.tsx_ is responsible for defining the State's interface and distribute both the state and the reducer to child components. Every tool in the **Design Menu** is responsible for manipulating the DOM as well as update the State with the corresponding data. All tools have their own corresponding property in the State where data is added/updated/deleted to/from. In the **reducerContext** you will find all you need to add or modify the state's interfaces and types.

#### data
This folder holds static data. The data-folder includes three files:
  - **colorPickerData**: Used to generate the initial three colorPicker-tools
  - **designTokens**: In here you will find all design-tokens that are being updated by the design-tools. This file also maps semantic-tokens to a corresponding number-value. The number-value represents which color in a selected color-scale that should be used. For example, if the alt1-300 color is chosen as the button-first color, then relevant states will be used based on this choice.
  - **fontFamilyData**: A static file containing data used generate font-family options.

#### layouts 
The layouts folder contains files that define the overall structure and design of the application. The files in this folder needs to be updateed, and are not currently matching their appropiate purpose. The layout folder currently consists of:
  - DesignMenuLayout
  - FrontpageLayout
  - PreviewAreaLayout

#### reducer
The reducer folder contains _reducer.ts_, _actions.ts_ and _reducerFunctions_. The _reducer_ is responsible for handling dispatched actions from various components. _actions_ defines all possible dispatch-messages, known as types. The _reducer_ utilizes a function based on the corresponding dispatch-message (type). The functions in the _reducerFunctions_ folder is responsible for actually updating and maintaining the State. 

#### utils
The utils folder contains reusable helper-functions.
- checkColorContrast
- generateColorScaleHSL

The functions responsible for updating the DOM (design-tokens) lives here. There is one helper-function for each tool in the **Design Menu**. These functions use the _designTokens.ts_ file in the **data**-folder to retrieve relevant design-tokens. The design-tokens gets updated based on the users choices. These choices are served as paramters to these functions in the utils-folder:
- updateColorTokens
- updateActionColorTokens

### Architecture


