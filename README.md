```
npm i
./node_modules/.bin/mocha
```

Removing the proxyquired test which stubs `readFileSync` allows the previous test to run successfully.