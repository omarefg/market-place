# Market Place

## Description

Market place is a project to test a DDD and Hex based architecture focused on Single Responsibility Principle and Dependendy Inversion in frontend apps. The main goal is to guarantee testability in the code and the functions dispatched on each events in a individual way. This will help to improve reliability and pretend to empower the developer with the control on the data of every flow of the application.

## Branches

- main: Include a not so testable app with a complete coupling of it modules.
- refactor: It's a factored version of the same app, same behavior but using the proposed architectonic design.

## How to run the project

```bash
npm i
yarn install
```
```bash
npm start
yarn start
```

## Benefits

- Easily testable
- Enforce some reliability
- Empower the developer controlling how the data is defined in any environment
- Makes its easy to work with a frontend app and review it code without great frontend knowledge
- Make its easy to replace third party dependencies
- Makes the coding process quicker by giving the developer a defined structure of how data is orchestrated 