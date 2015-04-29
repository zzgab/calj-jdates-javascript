/***************************************
 *            parasha.js               *
 ***************************************
 * Computation of Parasha of the Week  *
 ***************************************
 * Requires: jdates.js                 *
 ***************************************
 * History														 *
 *																		 *
 *  21/03/2005: v2.4									 *
 * Four Parshiot											 *
 *																		 *
 *  13/12/2004: v2.32									 *
 ***************************************
 * (c) Gabriel Zerbib,                 *
 *   gabriel@bumpt.net                 *
 *   http://www.bumpt.net              *
 *   http://www.calj.net               *
 *                                     *
 * It is strictly forbidden to use or  *
 * reproduce all or parts of this      *
 * program without the author's        *
 * explicit permission.                *
 * Commercial use of this program is   *
 * subject to purchase. Please contact *
 * the author.                         *
 ***************************************/

JDate.kevviot = [];

JDate.kevviot["353_1_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],		25,[26,27],[28,29],30,[31,32],33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,[50,51],	52,[],[] ];
JDate.kevviot["353_6_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],		25,[26,27],[28,29],30,[31,32],33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["354_2_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],		25,[26,27],[28,29],30,[31,32],33,[],	34,35,36,37,[38,39],	40,[41,42],43,44,45,46,47,48,49,[50,51],[],	52,[],[] ];
JDate.kevviot["354_4_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],[],	25,[26,27],[28,29],30,[31,32],33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["355_1_0"] = JDate.kevviot["354_2_0"];
JDate.kevviot["355_4_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,[],		25,[26,27],[28,29],30,[31,32],33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["355_6_0"] = JDate.kevviot["353_1_0"];
JDate.kevviot["383_1_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,[],28,29,30,31,32,33,[],	34,35,36,37,[38,39],	40,[41,42],43,44,45,46,47,48,49,[50,51],[],	52,[],[] ];
JDate.kevviot["383_4_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,28,[],29,30,31,32,33,		34,35,36,37,38,39,	40,41,42,43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["383_6_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,[],28,29,30,31,32,33,		34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,[50,51],	52,[],[] ];
JDate.kevviot["384_2_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,[],[],28,29,30,31,32,33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["385_1_0"] = JDate.kevviot["384_2_0"];
JDate.kevviot["385_4_0"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,28,[],29,30,31,32,33,		34,35,36,37,38,39,	40,41,42,43,44,45,46,47,48,49,[50,51],		52,[],[] ];
JDate.kevviot["385_6_0"] = JDate.kevviot["383_1_0"];

JDate.kevviot["353_1_1"] = JDate.kevviot["353_1_0"];
JDate.kevviot["353_6_1"] = JDate.kevviot["353_6_0"];
JDate.kevviot["354_2_1"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],		25,[26,27],[28,29],30,[31,32],33,	34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,[50,51],[],	52,[],[] ];
JDate.kevviot["354_4_1"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[21,22],23,24,[],		25,[26,27],[28,29],30,31,32,33,		34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["355_1_1"] = JDate.kevviot["354_2_1"];
JDate.kevviot["355_4_1"] = JDate.kevviot["355_4_0"];
JDate.kevviot["355_6_1"] = JDate.kevviot["355_6_0"];
JDate.kevviot["383_1_1"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,[],28,29,30,31,32,33,		34,35,36,37,38,39,	40,[41,42],43,44,45,46,47,48,49,[50,51],[],	52,[],[] ];
JDate.kevviot["383_4_1"] = JDate.kevviot["383_4_0"];
JDate.kevviot["383_6_1"] = JDate.kevviot["383_6_0"];
JDate.kevviot["384_2_1"] = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,		25,26,27,[],28,29,30,31,32,33,		34,35,36,37,38,39,	40,41,42,43,44,45,46,47,48,49,50,51,		52,[] ];
JDate.kevviot["385_1_1"] = JDate.kevviot["384_2_1"];
JDate.kevviot["385_4_1"] = JDate.kevviot["385_4_0"];
JDate.kevviot["385_6_1"] = JDate.kevviot["383_1_1"];

JDate.prototype.getParasha = function(bIsrael)
{
	if( (bIsrael != false ) && (bIsrael != true) )
		bIsrael = false;

	if(this.getDayOfWeek() != HDate.SHABBAT)
		return [];

	var h = new HDate(this);

	var HY = h.getYear();
	var hST = new HDate(23, HDate.TISHRI, HY);
	if(h.lt(hST))
	{
		HY --;
		hST.setYear(HY);
	}

	var hRH = new HDate(1, HDate.TISHRI, HY);
	var hBereshit = new HDate(hST);
	if(hST.getDayOfWeek() == HDate.SHABBAT)
		hBereshit.add(7);
	else
		hBereshit.add(6 - hST.getDayOfWeek());

	var n = parseInt( h.minus(hBereshit) / 7 );

	// n : parasha nominale de h.

	var yl = hRH.getYearLength();
	var dow= hRH.getDayOfWeek();
	var s = yl + "_" + dow + "_" + (bIsrael ? 1 : 0);
	var K = JDate.kevviot[s];
	var arrParshiot = K[n];
	if(arrParshiot != null)
		if(arrParshiot.length) return arrParshiot;
		else return [arrParshiot];
	return arrParshiot;
}

JDate.prototype.getParashaName = function(bIsrael, bHebrew)
{
	if( (bIsrael != false) && (bIsrael != true) )
		bIsrael = false;
	if( (bHebrew != false) && (bHebrew != true) )
		bHebrew = false;

	if(bHebrew)
		refLookupParshiot = JDate.parshiotHeb;
	else
		refLookupParshiot = JDate.parshiot;

	if(typeof(JDate.parshiot) == 'undefined')
		return 'Parasha not localized.';
	else
	{
		var arrParshiot = this.getParasha(bIsrael);
		if( (arrParshiot == null) || (arrParshiot.length == 0) )
			return "";
		if(arrParshiot.length == 1)
		{
			if(typeof(refLookupParshiot[arrParshiot[0]]) == 'undefined')
			{
				jEvent = new JEvent(HOLIDAYS.currentHoliday(this).type);
				return (jEvent ? jEvent.name : '');
			}
			else
				return refLookupParshiot[arrParshiot[0]];
		}
		else if(refLookupParshiot[arrParshiot[0]])
			return refLookupParshiot[arrParshiot[0]] + " - " + refLookupParshiot[arrParshiot[1]];
	}
}

JDate.prototype.getSpecialParashaName = function(bIsrael, bHebrew)
{
	if( (bIsrael != false) && (bIsrael != true) )
		bIsrael = false;
	if( (bHebrew != false) && (bHebrew != true) )
		bHebrew = false;


	purim = HOLIDAYS.Purim( (new HDate(this)).getYear() );

	var hShabbatZachor = (new HDate(purim.hEndDate)).sub(purim.hEndDate.getDayOfWeek() + 1);
	if(this.lte(hShabbatZachor) && this.gt(hShabbatZachor.sub(7)))
		return (bHebrew ? "&#1494;&#1499;&#1493;&#1512;" : "ZAKHOR");

	var hShabbatSheqalim = new HDate(1, HDate.ADAR2, this.getYear());
	if(hShabbatSheqalim.getDayOfWeek() != HDate.SHABBAT)
		hShabbatSheqalim.sub(hShabbatSheqalim.getDayOfWeek() + 1);
	if(this.lte(hShabbatSheqalim) && this.gt(hShabbatSheqalim.sub(7)))
		return (bHebrew ? "&#1513;&#1511;&#1500;&#1497;&#1501;" : "SHEQALIM");


	var hShabbatHaChodesh = new HDate(1, HDate.NISSAN, (new HDate(this)).getYear() );
	if(hShabbatHaChodesh.getDayOfWeek() != HDate.SHABBAT)
		hShabbatHaChodesh.sub(hShabbatHaChodesh.getDayOfWeek() + 1);
	var hShabbatParah = (new HDate(hShabbatHaChodesh)).sub(7);
	if(this.lte(hShabbatHaChodesh) && this.gt(hShabbatParah))
		return (bHebrew ? "&#1492;&#1495;&#1493;&#1491;&#1513;" : "HA'HODESH");


	if(this.lte(hShabbatParah) && this.gt(hShabbatParah.sub(7)))
		return (bHebrew ? "&#1508;&#1512;&#1492;" : "PARAH");

	
	return "";
}

JDate.parshiotHeb = [
	"&#1489;&#1512;&#1488;&#1513;&#1497;&#1514;",		//BERESHIT
	"&#1504;&#1495;",		//NOACH
	"&#1500;&#1498; &#1500;&#1498;",		//LECH L'CHA
	"&#1493;&#1497;&#1512;&#1488;",		//VAYERA
	"&#1495;&#1497;&#1497; &#1513;&#1512;&#1492;",		//CHAYEI SARAH
	"&#1514;&#1493;&#1500;&#1491;&#1493;&#1514;",		//TOL'DOT
	"&#1493;&#1497;&#1510;&#1488;",		//VAYETSE
	"&#1493;&#1497;&#1513;&#1500;&#1495;",		//VAYISHLACH
	"&#1497;&#1493;&#1513;&#1489;",		//VAYESHEV
	"&#1502;&#1511;&#1509;",		//MIKETZ
	"&#1493;&#1497;&#1490;&#1513;",		//VAYIGASH
	"&#1493;&#1497;&#1495;&#1497;",		//VAY'CHI
	"&#1513;&#1502;&#1493;&#1514;",		//SHEMOT
	"&#1493;&#1488;&#1512;&#1488;",		//VA'ERA
	"&#1489;&#1488;",		//BO
	"&#1489;&#1513;&#1500;&#1495;",		//BESHALA'H
	"&#1497;&#1514;&#1512;&#1493;",		//YITRO
	"&#1502;&#1513;&#1508;&#1496;&#1497;&#1501;",		//MISHPATIM
	"&#1514;&#1512;&#1493;&#1502;&#1492;",		//TEROUMA
	"&#1514;&#1510;&#1493;&#1493;&#1492;",		//TETSAVEH
	"&#1499;&#1497; &#1514;&#1513;&#1488;",		//KI TISSA
	"&#1493;&#1497;&#1511;&#1492;&#1500;", //VAYAQ'HEL
	"&#1508;&#1511;&#1493;&#1491;&#1497;", //PEKUDEI
	"&#1493;&#1497;&#1511;&#1512;&#1488;",				//VAYIKRA
	"&#1510;&#1493;",											//TSAV
	"&#1513;&#1502;&#1497;&#1504;&#1497;",	//SHEMINI
	"&#1514;&#1494;&#1512;&#1497;&#1506;",	//TAZRIA
	"&#1502;&#1510;&#1512;&#1506;",				//METSORA
	"&#1488;&#1495;&#1512;&#1497; &#1502;&#1493;&#1514;",		//AHHAREI MOT
	"&#1511;&#1491;&#1493;&#1513;&#1497;&#1501;",		//QEDOSHIM
	"&#1488;&#1502;&#1493;&#1512;",		//EMOR
	"&#1489;&#1492;&#1512;&nbsp;&#1505;&#1497;&#1504;&#1497;",		//BEHAR
	"&#1489;&#1495;&#1511;&#1514;&#1497;",		//BEHHOUKOTAI
	"&#1489;&#1502;&#1491;&#1489;&#1512;",		//BAMIDBAR
	"&#1504;&#1513;&#1488;",		//NASSO
	"&#1489;&#1492;&#1506;&#1500;&#1514;&#1498;",		//BEHA'ALOTKHA
	"&#1513;&#1500;&#1495;&nbsp;&#1500;&#1498;",		//SHELAHH LEKHA
	"&#1511;&#1512;&#1495;",		//KORAHH
	"&#1495;&#1511;&#1514;",		//HHOUKAT
	"&#1489;&#1500;&#1511;",		//BALAK
	"&#1508;&#1504;&#1495;&#1505;",		//PINHHAS
	"&#1502;&#1496;&#1493;&#1514;",		//MATOT
	"&#1502;&#1505;&#1506;&#1497;",		//MASS'EI
	"&#1491;&#1489;&#1512;&#1497;&#1501;",		//DEVARIM
	"&#1493;&#1488;&#1514;&#1495;&#1504;&#1503;",		//VAET'HHANAN
	"&#1506;&#1511;&#1489;",		//EKEV
	"&#1512;&#1488;&#1492;",		//RE'EH
	"&#1513;&#1493;&#1508;&#1496;&#1497;&#1501;",		//SHOF'TIM
	"&#1499;&#1497; &#1514;&#1510;&#1488;",		//KI TETSE
	"&#1499;&#1497; &#1514;&#1489;&#1493;&#1488;",		//KI TAVO
	"&#1504;&#1510;&#1489;&#1497;&#1501;",		//NITSAVIM
	"&#1493;&#1497;&#1500;&#1498;",		//VAYELECH
	"&#1492;&#1488;&#1494;&#1497;&#1504;&#1493;",		//HA'AZINU
	"&#1493;&#1494;&#1488;&#1514; &#1492;&#1489;&#1512;&#1499;&#1492;",		//VEZOT HABERAKHA
];
