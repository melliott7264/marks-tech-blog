# Mark's Tech Blog

## Description

Mark's Tech Blog is a WordPress style tech block written from scratch using Node.js and Express with Handlebars and a number of other packages on top of a MySQL database using Sequelize as an interface. This project is an opportunity to put together all my front-end and back-end development skills to produce a professional full stack application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This project will be running on Heroku. So, no real installation will be required. You just have to execute the URL: https://warm-chamber-02188.herokuapp.com/. All the application source code can be found at https://github.com/melliott7264/marks-tech-blog. If you want to run the application locally, you will have to install the following npm packages in the folder holding the clone of the above repository: mysql2(npm i --save mysql2), sequelize(npm i sequelize), express(npm i express), express-handlebars(npm i express-handlebars), express-session(npm i express-session), connect-session-sequelize(npm i connect-session-sequelize), dotenv(npm i dotenv --save), and bcrypt(npm i bcrypt ). A MySQL database will have to be available and you will need root access to create the database. It is suggested that you grant privileges to another user with access only to that one database. Then, store that username and password in the .env file in the root of the application folder.

## Usage

This application will be run from Heroku at the following URL: https://warm-chamber-02188.herokuapp.com/.

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Mark Elliott https://github.com/melliott7264

## License

Copyright (c) 2022 Mark Elliott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
