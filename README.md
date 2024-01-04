# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

Prerequisites:
Node.js installed (can be checked in cmd by typing: node -v)

To clone a project, navigate to location  with gitbash(or cmd) and copy paste one of the following:
 1. <SSH method:> git clone git@gitlab.com:/qa/parallel-qa.git

 or

 2. <HTTPS method:> git clone https://gitlab.com/qa/parallel-qa.git

 (initilize repository if you want to pull or push: git init)
 
 To install dependencies, run:
 npm install
 
 To install playwright browsers:
 npm playwright install
 
 For pure playwright instalation:
 npm init playwright@latest -save-dev
 
 To run the script from CLI:
 npm run tct  

 or 
 
 npm run stg
 
 to run specific script using tag:
 npm run stg -- --tags "@login"
 
 Script running by default in desktop/web view. If you want run as a mobile:
 npm run stg --PLATFORM=mobile -- --tags "@sports"
 
 Other configurations can be found under a file: .env.<env>
 
**** List of available tags:****



 @desktop 

 @mobile  

 @registration 

 @forgotpassword 




 
**** Project structure:****

features/ - Cucumber feature files 

support/ - Cucumber support files

config/ - Cucumber configuration files

steps/ - Cucumber step definitions

pages/ - Playwright Page Object Models (POM)

cucumber.js - Cucumber configuration

**Official documentation**

Cucumber: https://cucumber.io/

Playwright: https://playwright.dev/docs/intro
