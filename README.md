# GoldGate

This is a performance testing project aiming to compare 3 equivalent lambda functions. Each lambda function has been developped or deployed differently from the others

- expressDeployedWithServerless : Is a NodeJs & Express app deployed to lambda using Serverless Framework
- nodeClaudia : Is a NodeJs & Express app deployed to lambda using ClaudiaJs
- singleServerlessEndpoint : Is an endpoint developped and deployed using Serverless Framework

# Run the apps

## Express Deployed With Serverless

```
serverless deploy
```

## node Claudia

### To run it locally
```
npm install
npm start
```

### To deploy it
```
claudia create {OPTIONS}
```

Please see [Claudia](https://claudiajs.com/documentation.html)
