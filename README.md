
# 1. Clone the assignment file from github repository, link: https://github.com/nipamonalisa14/Final-Assignment.git

### Environment Setup
Clone the repository to your local computer
```
git clone https://github.com/nipamonalisa14/Final-Assignment.git
```
Use the package manager `npm` to install dependencies:
```
npm install
```

## 2. Open it to VS Code
3. Go to the VS Code terminal, then execute the following commands,
To initialize the node module: 
 ```npm init -y```
To add the CLI package: 
```npm i --save-dev @wdio/cli``
To add a full WebdriverIO setup:
 ```npm init wdio@latest```
4. Run Code
To run specs, execute: 
```npm run test``
To run suites, execute: 
```npm run runspecFiles```
5. Allure Report Setup
1. ```npm install @wdio/allure-reporter --save-dev```
2. reporter ===>in wdio.config.js then
    <blockquote> 
            reporters: [['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
         }]],
    </blockquote>
3. ```npm i allure-commandline```
4. ```npm run test```

6.  To get report, execute following command: 
    ```npm run getReport```

7. Screenshot
![Allure Report](allure-report.png)