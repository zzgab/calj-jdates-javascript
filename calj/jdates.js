/***************************************
 *             jdates.js               *
 ***************************************
 * Hebrew / Gregorian date conversion  *
 ***************************************
 * December 13, 2004 - Tevet 1st, 5765 *
 *  v4.67                              *
 *                                     *
 * (c) Gabriel Zerbib,                 *
 *   gabriel@bumpt.net                 *
 *   http://www.bumpt.net              *
 *                                     *
 * It is strictly forbidden to use or  *
 * reproduce all or parts of this      *
 * program without author's explicit   *
 * permission.                         *
 * Commercial use of this program is   *
 * subject to purchase. Please contact *
 * the author.                         *
 ***************************************/


/********
 * abstract class JDate
 *
 * JDate is the base class
 * for GDate and HDate.
 * Do not instanciate JDate.
 *               			********/
function JDate()
{
	/* runtime class info. Subclasses must implement
		 (ptr to subclass construction function) */
	this.Class = null;

	/*
	 * public methods
	 */
	this.getDay = getDay;			/* () */
	this.getMonth = getMonth;		/* () */
	this.getYear = getYear;				/* () */
	this.getDayOfWeek = getDayOfWeek;	/* () */
	this.setDay = setDay;				/* (int) */
	this.setMonth = setMonth;			/* (int) */
	this.setYear = setYear;				/* (int) */
	this.eq = eq;				/* (JDate) */
	this.neq = neq;				/* (JDate) */
	this.lt = lt;				/* (JDate) */
	this.lte = lte;				/* (JDate) */
	this.gt = gt;				/* (JDate) */
	this.gte = gte;				/* (JDate) */
	this.add = add;				/* (int) */
	this.sub = sub;				/* (int) */
	this.minus = minus;			/* (JDate) */
	this.nextMonth = nextMonth;	/* () */
	this.prevMonth = prevMonth;	/* () */
	this.nextDay = nextDay;		/* () */
	this.setDate = setDate;		/* (), (int), (JDate), (int, int, int) */


	/*
	 * public pure virtual methods
	 * Subclasses must implement
	 */
	this.today = null;
	this.getMonthLength = null;
	this.getYearLength = null;
	this.nbMonth = null;

	/*
	 * protected pure virtual methods
	 * Subclasses must implement.
	 * Do not call these methods outside the class hierarchy.
	 */
	this.calculate = null;
	this.setDate_int_int_int = null;


	/*
	 * protected attributes
	 * Do not access (read/write) these attributes outside the class hierarchy.
	 */
	this.m_hdn = 0;
	this.m_day = 0;
	this.m_month = 0;
	this.m_year = 0;

	/*
	 * protected methods
	 * Do not call these methods outside the class hierarchy.
	 */
	this.setHdn = setHdn;
	this.setDate_int = setDate_int;
	this.setDate_JDate = setDate_JDate;


	/*****
	 * Implementation *
	 *						*****/

	/* private methods */
	function setHdn(hdn)
	{
		hdn = parseInt(hdn);
		if(hdn < 1) hdn = 1;
		this.m_hdn = hdn;
		this.calculate();
		return this;
	}
	function setDate_int(hdn)
	{
		this.setHdn(hdn);
		return this;
	}
	function setDate_JDate(jdate)
	{
		return this.setDate_int(jdate.m_hdn);
	}

	/* public attribute accessors */
	function getDay() 				{ return this.m_day; }
	function getMonth()				{ return this.m_month; }
	function getYear()				{ return this.m_year; }
	function setDay(day)			{ return this.setDate_int_int_int(day, this.m_month, this.m_year); }
	function setMonth(month)	{ return this.setDate_int_int_int(this.m_day, month, this.m_year); }
	function setYear(year)		{ return this.setDate_int_int_int(this.m_day, this.m_month, year); }
	function getDayOfWeek()		{ return this.m_hdn % 7; }

	function setDate()
	{
		var args = arguments;
		if(args.length == 1)
			if(typeof(args[0].length) != 'undefined')
				args = args[0];

		switch(args.length)
		{
			case 1:
				if(args[0].constructor == JDate)	//setDate(JDate)
					this.setDate_JDate(args[0]);
				else
					this.setDate_int(args[0]);			//setDate(int)
				break;
			case 3:
				this.setDate_int_int_int(args[0], args[1], args[2]);	//setDate(int, int, int)
				break;
			default:	//setDate()
				this.today();
		}
	}

	/* public comparison functions */
	function eq(jdate)	{ return this.m_hdn == jdate.m_hdn; }
	function neq(jdate) { return ! this.eq(jdate); }
	function lt(jdate)	{ return this.m_hdn < jdate.m_hdn; }
	function lte(jdate) { return ( this.eq(jdate) || this.lt(jdate) ); }
	function gt(jdate)	{ return this.m_hdn > jdate.m_hdn; }
	function gte(jdate) { return ( this.eq(jdate) || this.gt(jdate) ); }

	/* public operations */
	function add(days) 		{ return this.setHdn(this.m_hdn + parseInt(days)); }
	function sub(days) 		{ return this.add( - parseInt(days) ); }
	function minus(jdate)	{ return (this.m_hdn - jdate.m_hdn); }
	function nextMonth()
	{
		var d = this.getDay();
		this.add(this.getMonthLength() - d + 1);
		if(this.getMonthLength() >= d)
			this.setDay(d);
		else
			this.setDay(this.getMonthLength());
		return this;
	}
	function prevMonth()
	{
		var d = this.getDay();
		this.sub(d);
		if(this.getMonthLength() >= d)
			this.setDay(d);
		else
			this.setDay(this.getMonthLength());
		return this;
	}
	function nextDay()
		/* Add 1 day : method optimized within same month. */
	{
		if( this.getDay() < this.getMonthLength() )
		{
			this.m_day ++;
			this.m_hdn ++;
		}
		else
			this.add(1);
		return this;
	}


}


/********
 * class GDate *
 *      ********/
GDate.prototype = new JDate; /* extends JDate */

GDate.isLeapYear = function (year)
{
	return (year % 400 == 0) || ( (year % 4 == 0) && (year % 100 != 0) );
};

function GDate()
{
	/* runtime class info */
	this.Class = GDate;

	/* public methods */
	this.today = today;										/* () */
	this.getMonthLength = getMonthLength;	/* () */
	this.getYearLength = getYearLength;		/* () */
	this.isLeap = isLeap;									/* () */
	this.nbMonths = nbMonths							/* () */

	/*
	 * public overrides
	 */
	this.setDate_int_int_int = setDate_int_int_int;

	/*
	 * protected overrides
	 * Do not call outside the class hierarchy.
	 */
	this.calculate = calculate;	/* () */


	/*
	 * constructor
	 */
	this.setDate(arguments);


	/*****
	 * Implementation *
	 *						*****/

	/*
	 * private class methods.
	 */
	function st_monthLength(month, year)
	{
		switch(month)
		{
		case 2: return (GDate.isLeapYear(year) ? 29 : 28);
		case 4: case 6: case 9: case 11: return 30;
		case 1: case 3: case 5: case 7: case 8: case 10: case 12: return 31;
		default: return null;
		}
	}

	/*
	 * private methods
	 */
	function calculate()
	{
		var a = this.m_hdn + 380041;
		var b = Math.floor((4 * a + 3 ) / 146097);
		var c = a - Math.floor((146097 * b) / 4);
		var d = Math.floor((4 * c + 3) / 1461);
		var e = c - Math.floor((1461 * d / 4));
		var m = Math.floor((5 * e + 2) / 153);

		this.m_day = e - Math.floor((153 * m + 2) / 5) + 1;
		this.m_month = m + 3 - 12 * Math.floor(m / 10);
		this.m_year = 100 * b + d - 4800 + Math.floor(m / 10);
	}

	/*
	 * public methods
	 */
	function isLeap()
	{
		return GDate.isLeapYear(this.m_year);
	}
	function getMonthLength()
	{
		return st_monthLength(this.m_month, this.m_year);
	}
	function getYearLength()
	{
		return this.isLeap() ? 366 : 365;
	}
	function today()
	{
		var d = new Date();
		this.setDate_int_int_int(d.getDate(), d.getMonth() + 1, d.getFullYear());
	}
	function nbMonths()
	{
		return 12;
	}

	/*
	 * protected overrides
	 */
	function setDate_int_int_int(day, month, year)
	{
		day = parseInt(day); month = parseInt(month); year = parseInt(year);
		if(month > 12) month = 12;

		var ml = st_monthLength(month, year);
		if(day > ml )
			day = ml;

		var a = Math.floor((14 - month) / 12);
		var y = year + 4800 - a;
		var m = month + 12 * a - 3;

		this.m_day = day;
		this.m_month = month;
		this.m_year = year;

		this.setHdn(day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 380042);
		return this;
	}
}



/********
 * class HDate *
 *      ********/
HDate.prototype = new JDate; /* extends JDate */
/* public static constants */
HDate.NISSAN = 1;
HDate.IYAR = 2;
HDate.SIVAN = 3;
HDate.TAMUZ = 4;
HDate.AV = 5;
HDate.ELUL = 6;
HDate.TISHRI = 7;
HDate.CHESHVAN = 8;
HDate.KISLEV = 9;
HDate.TEVET = 10;
HDate.SHVAT = 11;
HDate.ADAR = 12;
HDate.ADAR1 = 12;
HDate.ADAR2 = 13;

HDate.RISHON = 0;
HDate.CHAMISHI = 4;
HDate.SHISHI = 5;
HDate.SHABAT = 6;
HDate.SHABBAT = 6;

HDate.CHASERA = 1;
HDate.SDURA = 2;
HDate.SHLEMA = 3;


/* public static methods */
HDate.isEmbolismic = function(year)
{
	return (((12 * parseInt(year) + 17) % 19) >= 12);
};


function HDate()
{
	/* runtime class info */
	this.Class = HDate;

	/*
	 * public methods
	 */
	this.today = today;										/* () */
	this.getMonthLength = getMonthLength;	/* () */
	this.getYearLength = getYearLength;		/* () */
	this.isLeap = isLeap;									/* () */
	this.getYearType = getYearType;		/* () */
	this.nbMonths = nbMonths;		/* () */


	/* protected overrides */
	this.calculate = calculate;

	/* protected methods */
	this.setDate_int_int_int = setDate_int_int_int;

	/* private attributes */
	this.m_type = 0;


	/*
	 * constructor
	 */
	this.setDate(arguments);


	/*****
	 * Implementation *
	 *						*****/


	/*
	 * private class methods.
	 */
	function st_embolismicYear(year)
	{
		return (((12 * parseInt(year) + 17) % 19) >= 12);
	}
	function st_roshHashanaDay(hyear)
	{
		hyear = parseInt(hyear);

		var /*const*/ uday	= (24 * 1080);
		var /*const*/ Tsyn = 29 * uday + 12 * 1080 + 793;
		var /*const*/ Ttohu = 5 * 1080 + 204;
		var /*const*/ Tgatarad = 9 * 1080 + 204;
		var /*const*/ Tzaken = 18 * 1080;
		var /*const*/ Tbetutkafot = 15 * 1080 + 589;

		var Nmonths = Math.floor((235 * hyear - 234) / 19);
		var Tmolad = Nmonths * Tsyn + Ttohu;

		var days = Math.floor(Tmolad / uday);
		var parts = Tmolad - days * uday;
		var weekday = (1 + days) % 7;

		var adu = ( (weekday == 0) || (weekday == 3) || (weekday == 5) );
		var gatarad = ( !st_embolismicYear(hyear) && ((weekday == 2) && (parts >= Tgatarad)) );
		var betutkafot = ( (hyear == 1 ? false : (st_embolismicYear(hyear - 1))) && ((weekday == 1) && (parts >= Tbetutkafot)));

		var zaken = false;
		if(!adu && !gatarad && !betutkafot)
		{
			zaken = (parts >= Tzaken);
			if(zaken) adu = ( (weekday == 2) || (weekday == 4) || (weekday == 6) );
		}

		return 1 + days + (adu?1:0) + (gatarad?2:0) + (betutkafot?1:0) + (zaken?1:0);
	}

	/*
	 * private methods
	 */
	function calculate()
	{
		var jdn;
		var days;
		var ml;

		var /*const*/ uday	= (24 * 1080);
		var /*const*/ Tsyn = 29 * uday + 12 * 1080 + 793;

		var hyear = 1 + Math.floor((234 + 19 * (this.m_hdn + 1) * uday / Tsyn) / 235);
		var rhnext = 0;
		var rh = st_roshHashanaDay(hyear);
		while(rh > this.m_hdn)
		{
			rhnext = rh;
			hyear--;
			rh = st_roshHashanaDay(hyear);
		}

		if(rhnext == 0) rhnext = st_roshHashanaDay(hyear + 1);
		this.m_type = ((rhnext - rh) % 10) - 2;
		this.m_day = 1;
		this.m_month = HDate.TISHRI;
		this.m_year = hyear;

		days = this.m_hdn - rh;
		ml = this.getMonthLength();
		while(days >= ml)
		{
			this.m_month = ( (this.m_month + 1 > this.nbMonths()) ? 1 : this.m_month + 1);
			days -= ml;
			ml = this.getMonthLength();
		}
		this.m_day += days;
	}

	/*
	 * public methods
	 */
	function getYearType() { return this.m_type; }
	function isLeap() { return st_embolismicYear(this.m_year); }
	function nbMonths() { return (this.isLeap() ? 13 : 12); }

	function getMonthLength()
	{
		var m = this.m_month;

		if(m == HDate.TISHRI) return 30;
		if(m == HDate.CHESHVAN) return (this.m_type == HDate.SHLEMA ? 30 : 29);
		if(m == HDate.KISLEV) return (this.m_type == HDate.CHASERA ? 29 : 30);
		if(m == HDate.TEVET) return 29;
		if(m == HDate.SHVAT) return 30;
		if(m == HDate.ADAR1) return (this.isLeap() ? 30 : 29);
		if(m == HDate.ADAR2) return (this.isLeap() ? 29 : null);
		if(m == HDate.NISSAN) return 30;
		if(m == HDate.IYAR) return 29;
		if(m == HDate.SIVAN) return 30;
		if(m == HDate.TAMUZ) return 29;
		if(m == HDate.AV) return 30;
		if(m == HDate.ELUL) return 29;

		return null;
	}

	function getYearLength()
	{
		switch(this.m_type)
		{
			case HDate.SHLEMA: return (this.isLeap() ? 385 : 355);
			case HDate.SDURA: return (this.isLeap() ? 384 : 354);
			case HDate.CHASERA: return (this.isLeap() ? 383 : 353);
		}
	}

	function today() { this.setDate_JDate(new GDate()); }

	/* protected overrides */
	function setDate_int_int_int(day, month, year)
	{
		day = parseInt(day); month = parseInt(month); year = parseInt(year);
	
		var nextRH;
		this.m_hdn = st_roshHashanaDay(year);
		nextRH = st_roshHashanaDay(year + 1);
		this.m_type = ((nextRH - this.m_hdn) % 10) - 2;
		this.m_day = 1;
		this.m_month = HDate.TISHRI;
		this.m_year = year;
		if(month > this.nbMonths()) month = this.nbMonths();
		while(this.m_month != month)
		{
			this.m_hdn += this.getMonthLength();
			this.m_month = ( (this.m_month + 1 > (this.isLeap() ? 13 : 12)) ? 1 : this.m_month + 1);
		}
		if(day > this.getMonthLength()) day = this.getMonthLength();
		this.m_day = day;
		this.m_hdn += day - 1;
		if(this.m_hdn < 1) this.setHdn(this.m_hdn);
		return this;
	}
}
