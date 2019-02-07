 echo "testing Claudia deployement"
    artillery quick --duration 60 --rate 10 --num 1 $0 & > claudia.txt

 echo "testing Serverless Framework endpoint deployement"
    artillery quick --duration 60 --rate 10 --num 1 $1 & > serverlessEndpoint.txt

 echo "testing Express app deployed with Serverless Framework"
    artillery quick --duration 60 --rate 10 --num 1 $2 & > ExpressServerless.txt