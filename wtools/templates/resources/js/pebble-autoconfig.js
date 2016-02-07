/* --------------------------
 * Pebble Autoconfig
 * --------------------------
*/
PConfig.init();

function textToColor(sColor){
	sColor = sColor.toUpperCase();
	if(sColor === "0X000000") return 192 + 0;
	if(sColor === "0X001E41") return 192 + 1;
	if(sColor === "0X004387") return 192 + 2;
	if(sColor === "0X0068CA") return 192 + 3;
	if(sColor === "0X2B4A2C") return 192 + 4;
	if(sColor === "0X27514F") return 192 + 5;
	if(sColor === "0X16638D") return 192 + 6;
	if(sColor === "0X007DCE") return 192 + 7;
	if(sColor === "0X5E9860") return 192 + 8;
	if(sColor === "0X5C9B72") return 192 + 9;
	if(sColor === "0X57A5A2") return 192 + 10;
	if(sColor === "0X4CB4DB") return 192 + 11;
	if(sColor === "0X8EE391") return 192 + 12;
	if(sColor === "0X8EE69E") return 192 + 13;
	if(sColor === "0X8AEBC0") return 192 + 14;
	if(sColor === "0X84F5F1") return 192 + 15;
	if(sColor === "0X4A161B") return 192 + 16;
	if(sColor === "0X482748") return 192 + 17;
	if(sColor === "0X40488A") return 192 + 18;
	if(sColor === "0X2F6BCC") return 192 + 19;
	if(sColor === "0X564E36") return 192 + 20;
	if(sColor === "0X545454") return 192 + 21;
	if(sColor === "0X4F6790") return 192 + 22;
	if(sColor === "0X4180D0") return 192 + 23;
	if(sColor === "0X759A64") return 192 + 24;
	if(sColor === "0X759D76") return 192 + 25;
	if(sColor === "0X71A6A4") return 192 + 26;
	if(sColor === "0X69B5DD") return 192 + 27;
	if(sColor === "0X9EE594") return 192 + 28;
	if(sColor === "0X9DE7A0") return 192 + 29;
	if(sColor === "0X9BECC2") return 192 + 30;
	if(sColor === "0X95F6F2") return 192 + 31;
	if(sColor === "0X99353F") return 192 + 32;
	if(sColor === "0X983E5A") return 192 + 33;
	if(sColor === "0X955694") return 192 + 34;
	if(sColor === "0X8F74D2") return 192 + 35;
	if(sColor === "0X9D5B4D") return 192 + 36;
	if(sColor === "0X9D6064") return 192 + 37;
	if(sColor === "0X9A7099") return 192 + 38;
	if(sColor === "0X9587D5") return 192 + 39;
	if(sColor === "0XAFA072") return 192 + 40;
	if(sColor === "0XAEA382") return 192 + 41;
	if(sColor === "0XABABAB") return 192 + 42;
	if(sColor === "0XA7BAE2") return 192 + 43;
	if(sColor === "0XC9E89D") return 192 + 44;
	if(sColor === "0XC9EAA7") return 192 + 45;
	if(sColor === "0XC7F0C8") return 192 + 46;
	if(sColor === "0XC3F9F7") return 192 + 47;
	if(sColor === "0XE35462") return 192 + 48;
	if(sColor === "0XE25874") return 192 + 49;
	if(sColor === "0XE16AA3") return 192 + 50;
	if(sColor === "0XDE83DC") return 192 + 51;
	if(sColor === "0XE66E6B") return 192 + 52;
	if(sColor === "0XE6727C") return 192 + 53;
	if(sColor === "0XE37FA7") return 192 + 54;
	if(sColor === "0XE194DF") return 192 + 55;
	if(sColor === "0XF1AA86") return 192 + 56;
	if(sColor === "0XF1AD93") return 192 + 57;
	if(sColor === "0XEFB5B8") return 192 + 58;
	if(sColor === "0XECC3EB") return 192 + 59;
	if(sColor === "0XFFEEAB") return 192 + 60;
	if(sColor === "0XFFF1B5") return 192 + 61;
	if(sColor === "0XFFF6D3") return 192 + 62;
	if(sColor === "0XFFFFFF") return 192 + 63;
	return 0;
}

function colorToText(iColor){
	if(iColor === 192 + 00) return "0x000000";
	if(iColor === 192 + 01) return "0x001E41";
	if(iColor === 192 + 02) return "0x004387";
	if(iColor === 192 + 03) return "0x0068CA";
	if(iColor === 192 + 04) return "0x2B4A2C";
	if(iColor === 192 + 05) return "0x27514F";
	if(iColor === 192 + 06) return "0x16638D";
	if(iColor === 192 + 07) return "0x007DCE";
	if(iColor === 192 + 08) return "0x5E9860";
	if(iColor === 192 + 09) return "0x5C9B72";
	if(iColor === 192 + 10) return "0x57A5A2";
	if(iColor === 192 + 11) return "0x4CB4DB";
	if(iColor === 192 + 12) return "0x8EE391";
	if(iColor === 192 + 13) return "0x8EE69E";
	if(iColor === 192 + 14) return "0x8AEBC0";
	if(iColor === 192 + 15) return "0x84F5F1";
	if(iColor === 192 + 16) return "0x4A161B";
	if(iColor === 192 + 17) return "0x482748";
	if(iColor === 192 + 18) return "0x40488A";
	if(iColor === 192 + 19) return "0x2F6BCC";
	if(iColor === 192 + 20) return "0x564E36";
	if(iColor === 192 + 21) return "0x545454";
	if(iColor === 192 + 22) return "0x4F6790";
	if(iColor === 192 + 23) return "0x4180D0";
	if(iColor === 192 + 24) return "0x759A64";
	if(iColor === 192 + 25) return "0x759D76";
	if(iColor === 192 + 26) return "0x71A6A4";
	if(iColor === 192 + 27) return "0x69B5DD";
	if(iColor === 192 + 28) return "0x9EE594";
	if(iColor === 192 + 29) return "0x9DE7A0";
	if(iColor === 192 + 30) return "0x9BECC2";
	if(iColor === 192 + 31) return "0x95F6F2";
	if(iColor === 192 + 32) return "0x99353F";
	if(iColor === 192 + 33) return "0x983E5A";
	if(iColor === 192 + 34) return "0x955694";
	if(iColor === 192 + 35) return "0x8F74D2";
	if(iColor === 192 + 36) return "0x9D5B4D";
	if(iColor === 192 + 37) return "0x9D6064";
	if(iColor === 192 + 38) return "0x9A7099";
	if(iColor === 192 + 39) return "0x9587D5";
	if(iColor === 192 + 40) return "0xAFA072";
	if(iColor === 192 + 41) return "0xAEA382";
	if(iColor === 192 + 42) return "0xABABAB";
	if(iColor === 192 + 43) return "0xA7BAE2";
	if(iColor === 192 + 44) return "0xC9E89D";
	if(iColor === 192 + 45) return "0xC9EAA7";
	if(iColor === 192 + 46) return "0xC7F0C8";
	if(iColor === 192 + 47) return "0xC3F9F7";
	if(iColor === 192 + 48) return "0xE35462";
	if(iColor === 192 + 49) return "0xE25874";
	if(iColor === 192 + 50) return "0xE16AA3";
	if(iColor === 192 + 51) return "0xDE83DC";
	if(iColor === 192 + 52) return "0xE66E6B";
	if(iColor === 192 + 53) return "0xE6727C";
	if(iColor === 192 + 54) return "0xE37FA7";
	if(iColor === 192 + 55) return "0xE194DF";
	if(iColor === 192 + 56) return "0xF1AA86";
	if(iColor === 192 + 57) return "0xF1AD93";
	if(iColor === 192 + 58) return "0xEFB5B8";
	if(iColor === 192 + 59) return "0xECC3EB";
	if(iColor === 192 + 60) return "0xFFEEAB";
	if(iColor === 192 + 61) return "0xFFF1B5";
	if(iColor === 192 + 62) return "0xFFF6D3";
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

var prevsettings = '';
function updateLiveConfig(){
	var settings = JSON.stringify(PConfig.getFormValues());
	if(settings !== prevsettings){
		prevsettings = settings;
		settings = encodeURIComponent(settings);
		var req = new XMLHttpRequest();
		req.open("POST", "http://pebble-tools.appspot.com/liveconfig");
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var live_token = encodeURIComponent('___LIVE_TOKEN___');
		req.send('token='+live_token+'&value='+settings);
	}
}
