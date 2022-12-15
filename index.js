const express = require('express');

const app = express()

// MIDDLEWARE
// ANY request that comes in, checks if theres a "body" and attaches it to the request
app.use(express.json())

// FIRST EXAMPLE USING NEXT

// app.get('/', (req, res, next)=>{
//     next()
//     res.send("Hello there!")
// })

// app.get('/', (req, res, next)=>{
//     console.log("Ok bye now!")
// })


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

// THIRD EXAMPLE
app.post('/body', (req, res, next)=>{
    res.send(req.body)
})

// FORTH EXAMPLE: Application-level middlewares / app[METHOD]()

const loggerMiddleware = (request, response, next) => {
    console.log('Console logging from the middleware!'); // Logs the string and goes to the next 							  function in the pipeline
    console.log(request.body.name)
    if(request.body.name === "Eca"){
        console.log("Come right in")
        next()
    }else{
        console.log("You are not in this class Thomas Muller")
        res.status(404).send("Get out!")
    }
};

const myHandlerFunction = (request, response) => response.send(request.method); // Ends the req/res cycle

app.get('/', loggerMiddleware, myHandlerFunction);     // The client will see 'get' in the browser
app.post('/', loggerMiddleware, myHandlerFunction);    // The client will see 'post' in the browser
app.put('/', loggerMiddleware, myHandlerFunction);     // The client will see 'put' in the browser
app.delete('/', loggerMiddleware, myHandlerFunction);  // The client will see 'delete' in the browser


app.use((error, req, res, next) => {
    console.error(error.stack)
    console.log("ERROR")
    res.status(500).send('Something broke!')
});
        
app.listen(4500, ()=>{console.log("Connected")})