#!/bin/bash
echo "testing Claudia deployement"
artillery quick --duration 60 --rate 10 https://myClaudiaEndpoint/license > claudia.txt
echo "testing Serverless Framework endpoint deployement"
artillery quick --duration 60 --rate 10 https://myServerlessEndpoint/licenses > serverlessEndpoint.txt
echo "testing Express app deployed with Serverless Framework"
artillery quick --duration 60 --rate 10  https://myExpressServerlessEndpoint/dev/license > ExpressServerless.txt