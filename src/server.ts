import * as express from 'express';


const app=express();


app.get('/',(req,res)=>{
    res.json({hello:"World"});
});

export const Server =(async()=>{
    app.listen(8080);
    console.log('app started at http://localhost/${8080}');
    console.log('Press Ctrl+C to quit.');
})


