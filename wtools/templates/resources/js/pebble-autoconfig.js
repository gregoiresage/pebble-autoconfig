/* --------------------------
 * Pebble Autoconfig
 * --------------------------
*/
PConfig.init();

function textToColor(sColor){
	sColor = sColor.toUpperCase();
	if(sColor === "0X000000" || sColor === "0X000000") return 192 + 0;
	if(sColor === "0X000055" || sColor === "0X001E41") return 192 + 1;
	if(sColor === "0X0000AA" || sColor === "0X004387") return 192 + 2;
	if(sColor === "0X0000FF" || sColor === "0X0068CA") return 192 + 3;
	if(sColor === "0X005500" || sColor === "0X2B4A2C") return 192 + 4;
	if(sColor === "0X005555" || sColor === "0X27514F") return 192 + 5;
	if(sColor === "0X0055AA" || sColor === "0X16638D") return 192 + 6;
	if(sColor === "0X0055FF" || sColor === "0X007DCE") return 192 + 7;
	if(sColor === "0X00AA00" || sColor === "0X5E9860") return 192 + 8;
	if(sColor === "0X00AA55" || sColor === "0X5C9B72") return 192 + 9;
	if(sColor === "0X00AAAA" || sColor === "0X57A5A2") return 192 + 10;
	if(sColor === "0X00AAFF" || sColor === "0X4CB4DB") return 192 + 11;
	if(sColor === "0X00FF00" || sColor === "0X8EE391") return 192 + 12;
	if(sColor === "0X00FF55" || sColor === "0X8EE69E") return 192 + 13;
	if(sColor === "0X00FFAA" || sColor === "0X8AEBC0") return 192 + 14;
	if(sColor === "0X00FFFF" || sColor === "0X84F5F1") return 192 + 15;
	if(sColor === "0X550000" || sColor === "0X4A161B") return 192 + 16;
	if(sColor === "0X550055" || sColor === "0X482748") return 192 + 17;
	if(sColor === "0X5500AA" || sColor === "0X40488A") return 192 + 18;
	if(sColor === "0X5500FF" || sColor === "0X2F6BCC") return 192 + 19;
	if(sColor === "0X555500" || sColor === "0X564E36") return 192 + 20;
	if(sColor === "0X555555" || sColor === "0X545454") return 192 + 21;
	if(sColor === "0X5555AA" || sColor === "0X4F6790") return 192 + 22;
	if(sColor === "0X5555FF" || sColor === "0X4180D0") return 192 + 23;
	if(sColor === "0X55AA00" || sColor === "0X759A64") return 192 + 24;
	if(sColor === "0X55AA55" || sColor === "0X759D76") return 192 + 25;
	if(sColor === "0X55AAAA" || sColor === "0X71A6A4") return 192 + 26;
	if(sColor === "0X55AAFF" || sColor === "0X69B5DD") return 192 + 27;
	if(sColor === "0X55FF00" || sColor === "0X9EE594") return 192 + 28;
	if(sColor === "0X55FF55" || sColor === "0X9DE7A0") return 192 + 29;
	if(sColor === "0X55FFAA" || sColor === "0X9BECC2") return 192 + 30;
	if(sColor === "0X55FFFF" || sColor === "0X95F6F2") return 192 + 31;
	if(sColor === "0XAA0000" || sColor === "0X99353F") return 192 + 32;
	if(sColor === "0XAA0055" || sColor === "0X983E5A") return 192 + 33;
	if(sColor === "0XAA00AA" || sColor === "0X955694") return 192 + 34;
	if(sColor === "0XAA00FF" || sColor === "0X8F74D2") return 192 + 35;
	if(sColor === "0XAA5500" || sColor === "0X9D5B4D") return 192 + 36;
	if(sColor === "0XAA5555" || sColor === "0X9D6064") return 192 + 37;
	if(sColor === "0XAA55AA" || sColor === "0X9A7099") return 192 + 38;
	if(sColor === "0XAA55FF" || sColor === "0X9587D5") return 192 + 39;
	if(sColor === "0XAAAA00" || sColor === "0XAFA072") return 192 + 40;
	if(sColor === "0XAAAA55" || sColor === "0XAEA382") return 192 + 41;
	if(sColor === "0XAAAAAA" || sColor === "0XABABAB") return 192 + 42;
	if(sColor === "0XAAAAFF" || sColor === "0XA7BAE2") return 192 + 43;
	if(sColor === "0XAAFF00" || sColor === "0XC9E89D") return 192 + 44;
	if(sColor === "0XAAFF55" || sColor === "0XC9EAA7") return 192 + 45;
	if(sColor === "0XAAFFAA" || sColor === "0XC7F0C8") return 192 + 46;
	if(sColor === "0XAAFFFF" || sColor === "0XC3F9F7") return 192 + 47;
	if(sColor === "0XFF0000" || sColor === "0XE35462") return 192 + 48;
	if(sColor === "0XFF0055" || sColor === "0XE25874") return 192 + 49;
	if(sColor === "0XFF00AA" || sColor === "0XE16AA3") return 192 + 50;
	if(sColor === "0XFF00FF" || sColor === "0XDE83DC") return 192 + 51;
	if(sColor === "0XFF5500" || sColor === "0XE66E6B") return 192 + 52;
	if(sColor === "0XFF5555" || sColor === "0XE6727C") return 192 + 53;
	if(sColor === "0XFF55AA" || sColor === "0XE37FA7") return 192 + 54;
	if(sColor === "0XFF55FF" || sColor === "0XE194DF") return 192 + 55;
	if(sColor === "0XFFAA00" || sColor === "0XF1AA86") return 192 + 56;
	if(sColor === "0XFFAA55" || sColor === "0XF1AD93") return 192 + 57;
	if(sColor === "0XFFAAAA" || sColor === "0XEFB5B8") return 192 + 58;
	if(sColor === "0XFFAAFF" || sColor === "0XECC3EB") return 192 + 59;
	if(sColor === "0XFFFF00" || sColor === "0XFFEEAB") return 192 + 60;
	if(sColor === "0XFFFF55" || sColor === "0XFFF1B5") return 192 + 61;
	if(sColor === "0XFFFFAA" || sColor === "0XFFF6D3") return 192 + 62;
	if(sColor === "0XFFFFFF" || sColor === "0XFFFFFF") return 192 + 63;
	return 0;
}

function colorToText(iColor){
	if(iColor === 192 + 00) return "0x000000";
	if(iColor === 192 + 01) return "0x000055";
	if(iColor === 192 + 02) return "0x0000AA";
	if(iColor === 192 + 03) return "0x0000FF";
	if(iColor === 192 + 04) return "0x005500";
	if(iColor === 192 + 05) return "0x005555";
	if(iColor === 192 + 06) return "0x0055AA";
	if(iColor === 192 + 07) return "0x0055FF";
	if(iColor === 192 + 08) return "0x00AA00";
	if(iColor === 192 + 09) return "0x00AA55";
	if(iColor === 192 + 10) return "0x00AAAA";
	if(iColor === 192 + 11) return "0x00AAFF";
	if(iColor === 192 + 12) return "0x00FF00";
	if(iColor === 192 + 13) return "0x00FF55";
	if(iColor === 192 + 14) return "0x00FFAA";
	if(iColor === 192 + 15) return "0x00FFFF";
	if(iColor === 192 + 16) return "0x550000";
	if(iColor === 192 + 17) return "0x550055";
	if(iColor === 192 + 18) return "0x5500AA";
	if(iColor === 192 + 19) return "0x5500FF";
	if(iColor === 192 + 20) return "0x555500";
	if(iColor === 192 + 21) return "0x555555";
	if(iColor === 192 + 22) return "0x5555AA";
	if(iColor === 192 + 23) return "0x5555FF";
	if(iColor === 192 + 24) return "0x55AA00";
	if(iColor === 192 + 25) return "0x55AA55";
	if(iColor === 192 + 26) return "0x55AAAA";
	if(iColor === 192 + 27) return "0x55AAFF";
	if(iColor === 192 + 28) return "0x55FF00";
	if(iColor === 192 + 29) return "0x55FF55";
	if(iColor === 192 + 30) return "0x55FFAA";
	if(iColor === 192 + 31) return "0x55FFFF";
	if(iColor === 192 + 32) return "0xAA0000";
	if(iColor === 192 + 33) return "0xAA0055";
	if(iColor === 192 + 34) return "0xAA00AA";
	if(iColor === 192 + 35) return "0xAA00FF";
	if(iColor === 192 + 36) return "0xAA5500";
	if(iColor === 192 + 37) return "0xAA5555";
	if(iColor === 192 + 38) return "0xAA55AA";
	if(iColor === 192 + 39) return "0xAA55FF";
	if(iColor === 192 + 40) return "0xAAAA00";
	if(iColor === 192 + 41) return "0xAAAA55";
	if(iColor === 192 + 42) return "0xAAAAAA";
	if(iColor === 192 + 43) return "0xAAAAFF";
	if(iColor === 192 + 44) return "0xAAFF00";
	if(iColor === 192 + 45) return "0xAAFF55";
	if(iColor === 192 + 46) return "0xAAFFAA";
	if(iColor === 192 + 47) return "0xAAFFFF";
	if(iColor === 192 + 48) return "0xFF0000";
	if(iColor === 192 + 49) return "0xFF0055";
	if(iColor === 192 + 50) return "0xFF00AA";
	if(iColor === 192 + 51) return "0xFF00FF";
	if(iColor === 192 + 52) return "0xFF5500";
	if(iColor === 192 + 53) return "0xFF5555";
	if(iColor === 192 + 54) return "0xFF55AA";
	if(iColor === 192 + 55) return "0xFF55FF";
	if(iColor === 192 + 56) return "0xFFAA00";
	if(iColor === 192 + 57) return "0xFFAA55";
	if(iColor === 192 + 58) return "0xFFAAAA";
	if(iColor === 192 + 59) return "0xFFAAFF";
	if(iColor === 192 + 60) return "0xFFFF00";
	if(iColor === 192 + 61) return "0xFFFF55";
	if(iColor === 192 + 62) return "0xFFFFAA";
	if(iColor === 192 + 63) return "0xFFFFFF";
	return "0xFFFFFF";
}

function getQueryParam(variable, default_) {
    var query = location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable)
            return decodeURIComponent(pair[1]);
    }
    return default_ || false;
}

function sendSettings() {
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
	location.href = return_to + encodeURIComponent(JSON.stringify(PConfig.getFormValues()));
}

/* --------------------------
 * Buttons
 * ---------------
 */
 
document.getElementById("save-top").addEventListener("click", function (event) {
	sendSettings();
});
document.getElementById("save-bottom").addEventListener("click", function (event) {
	sendSettings();
});

/*
 * Remove config page header on iOS
 */
if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
	document.getElementById("app-header").remove();
}
