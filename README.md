# calj-jdates-javascript
The old algorithm that CalJ.net used when it was full Javascript (but it still works)

## How

~~~~html
<script src="calj/jdates.js"></script>
<script src="calj/parasha.js"></script>

<script>
  const jewish = new HDate(10, HDate.TISHRI, 5779);
  const greg = new GDate(jewish);

  const date = new Date(greg.getYear(), greg.getMonth() - 1, greg.getDay());
  console.log(date);    // prints: "Wed Sep 19 2018 00:00:00"

  const israel = true;
  const parasha = new GDate(23, 5, 2020).getParasha(israel);
  console.log(parasha); // [33]
</script>
~~~~

## Formulas
https://www.calj.net/algorithme
