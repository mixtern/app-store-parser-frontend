let search = "./../../assets/",
    replacement = "/app-store-parser-frontend/assets/";

var fs = require('fs'),
    path = require('path'),    
    distRoot = path.join(__dirname, "dist", "app-store-parser-frontend");

fs.readdir(distRoot, (err, files) => {
    files.forEach(file => {
        if (file.endsWith(".js") || file.endsWith(".js.map")) {
            let jsFile = path.join(distRoot, file)
            fs.readFile(jsFile, "utf-8", function(err,data) {
                if (err) {
                  return console.log(err);
                }
                let result = data.split(search).join(replacement);
                fs.writeFile(jsFile, result, 'utf8', function (err) {
                   if (err) return console.log(err);
                });
              });
        }
    });
  });
/*
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    } else {
        console.log(err);
    }
});
*/