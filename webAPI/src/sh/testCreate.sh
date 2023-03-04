#!/bin/bash
 
# Change working folder
cd "$(dirname "$0")"
 
# Add: (local:remote)
curl -s -X POST -H "Content-Type: application/json" -d "@json/testAcc.json" http://192.168.50.69:3000/account/create | jq .
