function findAnswer(){
    console.log("test");

    results = Papa.parse("http://davidmelvinjr.com/answers.csv", {download: true,});
    console.log(results);

}

findAnswer();
console.log("test1");