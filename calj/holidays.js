
/***************************************
 *             holidays.js             *
 ***************************************
 * Jewish holidays and events          *
 ***************************************
 * History                             *
 *  11/04/2021: v1.4.1:                *
 *    - error on Yom HaShoah           *
 *  14/03/2005: v1.4: Holiday object,  *
 *		for Yom Tov support.           *
 *  13/12/2004: v1.31                  *
 ***************************************
 * April 11, 2021 - Nissan 29, 5781    *
 *  v1.4.1                             *
 *                                     *
 ***************************************
 * (c) Gabriel Zerbib,                 *
 *   gabriel@calj.net                  *
 *   https://calj.net                  *
 *                                     *
 * MIT License                         *
 ***************************************/

function Holiday(nType, hStart, hEnd, nLength, arrYomTov)
{
	this.Class = Holiday;
	
	this.type = nType;
	this.hStartDate = new HDate(hStart);
	this.hEndDate = new HDate(hEnd);
	this.nLength = nLength;
	this[0] = this.hStartDate;
	if(typeof(arrYomTov) != "undefined")
		this.arrYomTov = arrYomTov;
	else
		this.arrYomTov = [];
}


HOLIDAYS = {

	ISRAEL:		false,
	GALUT:		true,

	ROSH_HASHANA: 	0,
	GDALIA:		1,
	YOM_KIPPUR:	2,
	SUCCOT:		3,
	HOSHAANA_RABBA:	4,
	SHMINI_ATSERET:	5,
	SIMCHAT_TORAH:	6,
	CHANUKA:	7,
	TEVET_10:	8,
	SHVAT_15:	9,
	PURIM_FAST:		10,
	PURIM:		11,
	PESACH:		12,
	YOM_HASHOA:	13,
	YOM_HAATSMAUT:	14,
	OMER_33:	15,
	SHAVUOT:	16,
	TAMUZ_17:	17,
	AV_9:		18
};


HOLIDAYS.RoshHashana = function(HYear)
{
	return new Holiday(HOLIDAYS.ROSH_HASHANA, 
										 new HDate(1, HDate.TISHRI, HYear), 
										 new HDate(2, HDate.TISHRI, HYear), 
										 2, 
										 [1, 1]);
}

HOLIDAYS.Gdalia = function(HYear)
{
	var hdate = new HDate(3, HDate.TISHRI, HYear);
	if(hdate.getDayOfWeek() == HDate.SHABBAT)
		hdate.add(1);
	return new Holiday(HOLIDAYS.GDALIA,
										 hdate,
										 hdate,
										 1);
}

HOLIDAYS.YomKippur = function(HYear)
{
	return new Holiday(HOLIDAYS.YOM_KIPPUR,
										 new HDate(10, HDate.TISHRI, HYear),
										 new HDate(10, HDate.TISHRI, HYear),
										 1,
										 [1]);
}

HOLIDAYS.Succot = function(HYear, bGalut)
{
	if(typeof(bGalut) == "undefined") bGalut = false;
	
	var h = new HDate(15, HDate.TISHRI, HYear);
	var hEnd = new HDate(h);
	hEnd.add(6);
	return new Holiday(HOLIDAYS.SUCCOT,
										 h,
										 hEnd,
										 6,
										 [1, bGalut, 0, 0, 0, 0]);
}

HOLIDAYS.HoshaanaRabba = function(HYear)
{
	return new Holiday(HOLIDAYS.HOSHAANA_RABBA,
										 new HDate(21, HDate.TISHRI, HYear),
										 new HDate(21, HDate.TISHRI, HYear),
										 1);
}

HOLIDAYS.ShminiAtseret = function(HYear, bGalut)
{
	var h = new HDate(22, HDate.TISHRI, HYear);
	var hEnd = new HDate(h);
	if(bGalut)
		hEnd.add(1);

	return new Holiday(HOLIDAYS.SHMINI_ATSERET,
										 h,
										 hEnd,
										 (bGalut ? 2 : 1),
										 [1, 1]);
}

HOLIDAYS.SimchatTorah = function(HYear, bGalut)
{
	var h = new HDate(bGalut ? 23 : 22, HDate.TISHRI, HYear);
	
	return new Holiday(HOLIDAYS.SIMCHAT_TORAH,
		h,
		h,
		1);
}

HOLIDAYS.Chanuka = function(HYear)
{
	var h1 = new HDate(25, HDate.KISLEV, HYear);
	var h8 = (new HDate(h1)).add(7);
	return new Holiday(HOLIDAYS.CHANUKA, h1, h8, 8);
}

HOLIDAYS.Tevet10 = function(HYear)
{
	var h = new HDate(10, HDate.TEVET, HYear);
	if(h.getDayOfWeek() == HDate.SHABAT)
		h.add(1);
	return new Holiday(HOLIDAYS.TEVET_10, h, h, 1);
}

HOLIDAYS.Shvat15 = function(HYear)
{
	var h = new HDate(15, HDate.SHVAT, HYear);
	return new Holiday(HOLIDAYS.SHVAT_15, h, h, 1);
}

HOLIDAYS.PurimFast = function(HYear)
{
	var h = new HDate(13, HDate.ADAR2, HYear);
	if(h.getDayOfWeek() == HDate.SHABBAT)
		h.sub(2);
	return new Holiday(HOLIDAYS.PURIM_FAST, h, h, 1);
}
HOLIDAYS.Purim = function(HYear)
{
	var h = new HDate(14, HDate.ADAR2, HYear);
	return new Holiday(HOLIDAYS.PURIM, h, h, 1);
}

HOLIDAYS.Pesach = function(HYear, bGalut)
{
	var h = new HDate(15, HDate.NISSAN, HYear);
	var hEnd = new HDate(bGalut ? 22: 21, HDate.NISSAN, HYear);
	return new Holiday(HOLIDAYS.PESACH, h, hEnd, bGalut ? 7 : 8, [1,bGalut,0,0,0,0,1,1]);
}

HOLIDAYS.YomHashoa = function(HYear)
{
	var h = new HDate(27, HDate.NISSAN, HYear);
	if(h.getDayOfWeek() == HDate.SHISHI)
		h.add(-1);
    else if(h.getDayOfWeek() == HDate.RISHON)
		h.add(1);
	return new Holiday(HOLIDAYS.YOM_HASHOA, h, h, 1);
}

HOLIDAYS.YomHaatsmaut = function(HYear)
{
	var h = new HDate(5, HDate.IYAR, HYear);
	if(h.getDayOfWeek() == HDate.SHABAT)
		h.sub(1);
	if(h.getDayOfWeek() == HDate.SHISHI)
		h.sub(1);
	return new Holiday(HOLIDAYS.YOM_HAATSMAUT, h, h, 1);
}

HOLIDAYS.Omer33 = function(HYear)
{
	var h = new HDate(18, HDate.IYAR, HYear);
	return new Holiday(HOLIDAYS.OMER_33, h, h, 1);
}

HOLIDAYS.Shavuot = function(HYear, bGalut)
{
	var h = new HDate(6, HDate.SIVAN, HYear);
	var hEnd = new HDate(h);
	if(bGalut)
		hEnd.add(1);
	return new Holiday(HOLIDAYS.SHAVUOT, h, hEnd, bGalut ? 2 : 1, [1,1]);
}

HOLIDAYS.Tamuz17 = function(HYear)
{
	var h = new HDate(17, HDate.TAMUZ, HYear);
	if(h.getDayOfWeek() == HDate.SHABAT)
		h.add(1);
	return new Holiday(HOLIDAYS.TAMUZ_17, h, h, 1);
}

HOLIDAYS.Av9 = function(HYear)
{
	var h = new HDate(9, HDate.AV, HYear);
	if(h.getDayOfWeek() == HDate.SHABAT)
		h.add(1);
	return new Holiday(HOLIDAYS.AV_9, h, h, 1);
}

HOLIDAYS.events = [
	HOLIDAYS.RoshHashana,
	HOLIDAYS.Gdalia,
	HOLIDAYS.YomKippur,
	HOLIDAYS.Succot,
	HOLIDAYS.HoshaanaRabba,
	HOLIDAYS.ShminiAtseret,
	HOLIDAYS.SimchatTorah,
	HOLIDAYS.Chanuka,
	HOLIDAYS.Tevet10,
	HOLIDAYS.Shvat15,
	HOLIDAYS.PurimFast,
	HOLIDAYS.Purim,
	HOLIDAYS.Pesach,
	HOLIDAYS.YomHashoa,
	HOLIDAYS.YomHaatsmaut,
	HOLIDAYS.Omer33,
	HOLIDAYS.Shavuot,
	HOLIDAYS.Tamuz17,
	HOLIDAYS.Av9
];


HOLIDAYS.nextHoliday = function(hdate)
{
	var i;
	var y = hdate.getYear();
	var fn;
	var holiday = null;
	
	while(true)
	{
		for(i = 0; i < HOLIDAYS.events.length; i ++)
		{
			fn = HOLIDAYS.events[i];
			
			holiday = fn(y, true);

			if(holiday.hStartDate.gt(hdate))
				return new JEvent(i, new GDate(holiday.hStartDate), new GDate(holiday.hEndDate));
		}
		y ++;
	}
}


/*
 * Parameters: in JDate jdate, in optional int nFromType
 * Return: a Holiday object representing the holiday of the passed JDate,
 *				 or null if no holiday occurs on this date.
 */
HOLIDAYS.currentHoliday = function(/*in JDate*/ jdate, /*in optional int */ nFromType) /*returns Holiday*/
{
	if( (typeof(nFromType) == "undefined") || (nFromType == null) )
		nFromType = 0

	var hdate = null;
	var holiday = null;
	
	if(jdate.Class == HDate)
		hdate = jdate;
	else if(jdate.Class == GDate)
		hdate = new HDate(jdate);
	else
		throw "Type mismatch error in HOLIDAYS.currentHolidays: expected subclass of JDate.";


	var i;
	var y = hdate.getYear();
	var n;
	for(n = 2; n; --n, ++y)
	{
		for(i = nFromType; i < HOLIDAYS.events.length; ++i)
		{
			fn = HOLIDAYS.events[i];
			holiday = fn(y, true);

			if(holiday.hStartDate.gt(hdate))
				return null;

			if( holiday.hEndDate.gte(hdate) )
				return holiday;
			
		}
	}

}
