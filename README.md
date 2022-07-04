
# Demo Project

This repository contains a sample WebdriverIO-v7 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the Cucumber (v6.x) BDD framework. It uses the chromedriver NPM package that wraps the ChromeDriver.




## Requirements

You should have Node.js and Node Package Manager (npm) installed on your machine. When you install Node.js, npm automatically gets installed.

Visit Node JS website and download the latest LTS version
https://nodejs.org/en/download/
## Installation

* Install all the dependencies by executing the following command on project directory

```bash
  npm install
```
    
## Running Tests

To run tests, run the following command

```bash
  npx wdio run ./wdio.conf.js

```

Npx command it comes pre-installed on npm after 5.2.0 version. In case error occurs install it executing:

```bash
  npm install -g npx

```

## View Report

Report is generated with HTML-Reporter plugin. After test execution ends, the report should open automatically on browser.
If it fails due to time creating the files, open the html report from directory:

```bash
  ./reports/html-reports/master-report.html

```