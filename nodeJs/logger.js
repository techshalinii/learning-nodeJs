var url ='https://logger/log';
function log(message) {
    //send an HTTP request
    console.log(message);
}
module.exports.log = log;


//wrapper function
console.log(__filename);
console.log(__dirname);