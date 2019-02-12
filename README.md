# GoldGate

This is a performance testing project aiming to compare 3 equivalent lambda functions. Each lambda function has been developped or deployed differently from the others

- expressDeployedWithServerless : Is a NodeJs & Express app deployed to lambda using Serverless Framework
- nodeClaudia : Is a NodeJs & Express app deployed to lambda using ClaudiaJs
- singleServerlessEndpoint : Is an endpoint developed and deployed using Serverless Framework.

- init.sh file contains the command to run in order to install your testing environment.
- benchmark.sh contains the command to run in order to test the apps performances.

# Run the apps

## AWS Credentials

In all three cases, you will need to have your aws credentials configured.

Please see [AWS Credentials configuration](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html)

## Express Deployed With Serverless

```
npm install --save
```

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

## Single Serverless Endpoint

```
serverless deploy 
```