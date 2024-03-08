# 🎨 Temavelgeren

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

### Design Menu
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

### Generate Output (CSS)
When you are happy with the design, click on the _Generate ouput_-button. This will generate a CSS-file with all the adjusted design-tokens. Copy and paste the output into your appicatin CSS file. Your custom design is now applied! 

