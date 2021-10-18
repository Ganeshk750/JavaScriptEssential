const fs = require("fs");
function loadingDataFromCSV(path) {
  let readFile = fs.readFileSync(path, { encoding: "utf-8" });
  readFile = readFile.split("\n");
  let attribute = readFile.shift().split(",");
  let attributeArray = [];
  readFile.forEach((data) => {
    let temp = {};
    let newData = data.split(",");
    for (let i = 0; i < attribute.length; i++) {
      temp[attribute[i]] = newData[i];
    }
    attributeArray.push(temp);
  });
  return attributeArray;
}

function gettingRequiredData() {
  let dataObject = loadingDataFromCSV("./main.csv");

  /* First Sorting for Red Cards */
  let sortedData = dataObject.sort((a, b) => {
    return b["Red Cards"] - a["Red Cards"];
  });

  let first = sortedData.splice(0, 3);

  /* Second Sorting  for Yellow Cards */
  //let newData = sortedData.slice(3);
  let SecondDataSort = dataObject.sort((a, b) => {
    return b["Yellow Cards"] - a["Yellow Cards"];
  });

  let finalOutPut = [...first, ...SecondDataSort];
  finalOutPut.forEach((data, j) => {
    console.log(
        j +
        " Team - " +
        data.Team +
        " -Y- " +
        data["Yellow Cards"] +
        " -R- " +
        data["Red Cards"]
    );
  });
}

gettingRequiredData();
