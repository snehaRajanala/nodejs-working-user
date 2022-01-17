const fs= require("fs")
const http= require("http")
const svr =http.createServer((req,res)=>{
    const file=fs.readFileSync("index.html", "utf8");
    res.end((file))
});
svr.listen(3000,"localhost")