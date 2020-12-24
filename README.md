# calj-jdates-javascript
The old algorithm that CalJ.net used when it was full Javascript (but it still works)

## How
~~~~javascript
const jewish = new HDate(10, HDate.TISHRI, 5779);
const greg = new GDate(jewish);

const date = new Date(`${greg.getYear()}-${greg.getMonth()}-${greg.getDay()}T00:00:00Z`);
console.log(date);    // prints: "2018-09-19T00:00:00.000Z"

const israel = true;
const parasha = new GDate(23, 5, 2020).getParasha(true);
console.log(parasha); // [33]
~~~~
