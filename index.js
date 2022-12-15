const express = require('express');

const app = express()

// MIDDLEWARE
// ANY request that comes in, checks if theres a "body" and attaches it to the request
app.use(express.json())

// FIRST EXAMPLE USING NEXT

app.get('/', (req, res, next)=>{
    next()
    res.send("Hello there!")
})

app.get('/', (req, res, next)=>{
    console.log("Ok bye now!")
})


// EXAMPLE NUMERO DOS 

// const getOnlyMiddleware = (request, response, next) => {
    //     if(request.method === 'GET') { // processes the 
    //         console.log("Inside of if statemente")
    //         next();	// request and calls next if method is GET
    //     } else {
        //         console.log("Inside of else statemente")
        //      return response.sendStatus(403); // wrong method used, ends req/res cycle with an error message
        //     }
        // };
        
        // app.use('/path', getOnlyMiddleware);
        
app.post('/body', (req, res, next)=>{
    res.send(req.body)
})
        
        
        app.listen(4500, ()=>{console.log("Connected")})