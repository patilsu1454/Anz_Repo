# CYPRESS
 End to End Javascript Automation Framework
 
# Steps to set up and run the test cases in local 
1. At first make sure you have node.js and visual studio code for source code editor 
2. Delete the package-lock.json and run the npm install to download the dependencies
3. Package.json has the set up to run the tests under script tag
4. To run dev environment tests use below command from the terminal
  npm run devtests
5. To run qa/test environent tests use below command from the terminal
  npm run qatests
6. You can find the combined test report of execution at below path
  CypressSP\cypress\reports\mochareports
7. You can find the indivisual test cases execution at below path
  CypressSP\cypress\reports\mocha
8. Also install all the dev dependcies mentioned in package.json file using below npm command
  Ex:	npm install cypress --save-dev
9.	Run command ‘Npx cypress open’ from terminal.Cypress when runs spec files through command line, it runs in headless mode (Default browser is electron)
10.	To run on any specific browser ex: Chorme, the command is : npx cypress run –spec /users/Sushant/pathofSpecFile/ea.spec.js –browser chrome
 
# Features 
1) POM design pattern 
2)Running tests on multiple environments 
3)Data provider-Multiple data set on single test 
4)Combined and individual test case execution report 
5) Mocha unit framework 
6) Utilities 
7)UI runner/command line 
8) CI with Jenkins  Dashboard+Github  
9) Screenshots/videos of test execution  
10) Chai assertions type  
