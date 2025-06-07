if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_arabiyymobile());
}
function Keyboard_arabiyymobile()
{
  var modCodes = KeymanWeb.Codes.modifierCodes;
  var keyCodes = KeymanWeb.Codes.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_arabiyymobile";
  this.KN="Arabiyy - عَرَبِيّ";
  this.KMINVER="17.0";
  this.KV={F:' 1em "Arial"',K102:1};
  this.KV.KLS={
    "default": ["ذ","1","2","3","4","5","6","7","8","9","0","-","=","","","","ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","د","\\","","","","ش","س","ي","ب","ل","ا","ت","ن","م","ك","ط","","","","","","\\","ئ","ء","ؤ","ر","لا","ى","ة","و","ز","ظ","","","","","",""],
    "shift": ["ّ","!","@","#","$","%","^","&","*",")","(","_","+","","","","َ","ً","ُ","ٌ","لإ","إ","‘","÷","×","؛","<",">","|","","","","ِ","ٍ","]","[","لأ","أ","ـ","،","/",":","\"","","","","","","|","~","ْ","}","{","لآ","آ","’",",",".","؟","","","","","",""],
    "shift-ctrl": ["","ZWJ","ZWNJ","LRM","RLM","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.00";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KRTL=1;
  this.KVKL={
  "phone": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "width": "140"
              },
              {
                "id": "K_2",
                "text": "2",
                "width": "140"
              },
              {
                "id": "K_3",
                "text": "3",
                "width": "140"
              },
              {
                "id": "K_4",
                "text": "4",
                "width": "140"
              },
              {
                "id": "K_5",
                "text": "5",
                "width": "140"
              },
              {
                "id": "K_6",
                "text": "6",
                "width": "140"
              },
              {
                "id": "K_7",
                "text": "7",
                "width": "140"
              },
              {
                "id": "K_8",
                "text": "8",
                "width": "140"
              },
              {
                "id": "K_9",
                "text": "9",
                "width": "140"
              },
              {
                "id": "K_0",
                "text": "0",
                "width": "140"
              },
              {
                "id": "K_F11",
                "text": "١٢٣",
                "width": "180"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "width": "100"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_F10",
                "text": "ض",
                "pad": "16",
                "width": "154"
              },
              {
                "id": "K_C",
                "text": "ص",
                "width": "154"
              },
              {
                "id": "K_F1",
                "text": "ث",
                "width": "154"
              },
              {
                "id": "K_Q",
                "text": "ق",
                "width": "154"
              },
              {
                "id": "K_F",
                "text": "ف",
                "width": "154"
              },
              {
                "id": "K_G",
                "text": "غ",
                "width": "154"
              },
              {
                "id": "K_F3",
                "text": "ع",
                "width": "154"
              },
              {
                "id": "K_H",
                "text": "ه",
                "width": "154"
              },
              {
                "id": "K_F5",
                "text": "خ",
                "width": "154"
              },
              {
                "id": "K_F7",
                "text": "ح",
                "width": "154"
              },
              {
                "id": "K_J",
                "text": "ج",
                "width": "154"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_X",
                "text": "ش",
                "pad": "16",
                "width": "154"
              },
              {
                "id": "K_S",
                "text": "س",
                "width": "154"
              },
              {
                "id": "K_I",
                "text": "ي ِ",
                "width": "154",
                "sk": [
                  {
                    "text": "ي",
                    "id": "K_I",
                    "layer": "shift",
                    "default": true
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "ب",
                "width": "154"
              },
              {
                "id": "K_L",
                "text": "ل",
                "width": "154"
              },
              {
                "id": "K_A",
                "text": "أ َ",
                "width": "154"
              },
              {
                "id": "K_T",
                "text": "ت",
                "width": "154"
              },
              {
                "id": "K_N",
                "text": "نًٍ ٌ",
                "width": "154"
              },
              {
                "id": "K_M",
                "text": "م",
                "width": "154"
              },
              {
                "id": "K_K",
                "text": "ك",
                "width": "154"
              },
              {
                "id": "K_F6",
                "text": "ط",
                "width": "154"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_F4",
                "text": "ۚ",
                "width": "154"
              },
              {
                "id": "K_F8",
                "text": "ذ",
                "width": "154"
              },
              {
                "id": "K_F2",
                "text": "ء",
                "width": "154"
              },
              {
                "id": "K_R",
                "text": "ر",
                "width": "154"
              },
              {
                "id": "K_V",
                "text": "ى",
                "width": "154"
              },
              {
                "id": "K_E",
                "text": "ـّ ْ",
                "width": "154"
              },
              {
                "id": "K_O",
                "text": "و ُ",
                "width": "154",
                "sk": [
                  {
                    "text": "و",
                    "id": "K_O",
                    "layer": "shift",
                    "default": true
                  }
                ]
              },
              {
                "id": "K_Z",
                "text": "ز",
                "width": "154"
              },
              {
                "id": "K_F9",
                "text": "ظ",
                "width": "154"
              },
              {
                "id": "K_D",
                "text": "د",
                "width": "154"
              },
              {
                "id": "K_BKSP",
                "text": "*RTLBkSp*",
                "width": "154",
                "sp": "1"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LCONTROL",
                "text": "shift-ctrl",
                "width": "295",
                "sp": "1",
                "nextlayer": "shift-ctrl"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_COLON",
                "text": "؛",
                "width": "140",
                "sk": [
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": "!",
                    "id": "K_PERIOD",
                    "layer": "shift"
                  },
                  {
                    "text": "؟",
                    "id": "K_COMMA",
                    "layer": "shift",
                    "default": true
                  },
                  {
                    "text": "،",
                    "id": "K_COMMA"
                  },
                  {
                    "text": ".",
                    "id": "K_PERIOD"
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "width": "760"
              },
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_ENTER",
                "text": "*RTLEnter*",
                "width": "295",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "!"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "$"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "^"
              },
              {
                "id": "K_7",
                "text": "&"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": ")"
              },
              {
                "id": "K_0",
                "text": "("
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "َ",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "ً"
              },
              {
                "id": "K_E",
                "text": "ُ"
              },
              {
                "id": "K_R",
                "text": "ٌ"
              },
              {
                "id": "K_T",
                "text": "لإ"
              },
              {
                "id": "K_Y",
                "text": "إ"
              },
              {
                "id": "K_U",
                "text": "‘"
              },
              {
                "id": "K_I",
                "text": "÷"
              },
              {
                "id": "K_O",
                "text": "×"
              },
              {
                "id": "K_P",
                "text": "؛"
              },
              {
                "id": "K_LBRKT",
                "text": "<"
              },
              {
                "id": "K_RBRKT",
                "text": ">"
              },
              {
                "id": "T_new_740",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "ّ"
              },
              {
                "id": "K_A",
                "text": "ِ"
              },
              {
                "id": "K_S",
                "text": "ٍ"
              },
              {
                "id": "K_D",
                "text": "]"
              },
              {
                "id": "K_F",
                "text": "["
              },
              {
                "id": "K_G",
                "text": "لأ"
              },
              {
                "id": "K_H",
                "text": "أ"
              },
              {
                "id": "K_J",
                "text": "ـ"
              },
              {
                "id": "K_K",
                "text": "،"
              },
              {
                "id": "K_L",
                "text": "/"
              },
              {
                "id": "K_COLON",
                "text": ":"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1"
              },
              {
                "id": "K_oE2",
                "text": "|"
              },
              {
                "id": "K_Z",
                "text": "~"
              },
              {
                "id": "K_X",
                "text": "ْ"
              },
              {
                "id": "K_C",
                "text": "}"
              },
              {
                "id": "K_V",
                "text": "{"
              },
              {
                "id": "K_B",
                "text": "لآ"
              },
              {
                "id": "K_N",
                "text": "آ"
              },
              {
                "id": "K_M",
                "text": "’"
              },
              {
                "id": "K_COMMA",
                "text": ","
              },
              {
                "id": "K_PERIOD",
                "text": "."
              },
              {
                "id": "K_SLASH",
                "text": "؟"
              },
              {
                "id": "T_new_766",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LCONTROL",
                "text": "shift-ctrl",
                "width": "130",
                "sp": "1",
                "nextlayer": "shift-ctrl"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ]
  }
};
  this.KCSS=".kmw-key {background-color: black !important;}\n .kmw-key-touched, .kmw-key#default-K_F11, .kmw-key#default-K_F4, .kmw-key#default-K_COLON, .kmw-key#default-K_SLASH, .kmw-key#default-K_E {\n 	color: white !important;\n 	background-color: midnightblue !important;\n 	border: 1px solid white !important;\n }\n \n /* .kmw-key-touched {display: none !important;} */\n /* .kmw-osk-frame {position: sticky !important;bottom: 0px !important;} */\n \n /* .kmw-banner-bar {display: none !important;} */\n \n .kmw-key#default-K_A, \n .kmw-key#default-K_O, \n .kmw-key#default-K_I {\n 	color: white !important;\n 	background-color: green !important;\n }\n \n .kmw-keytip-tip, .kmw-keytip-cap {\n 	color: white !important;\n 	background-color: midnightblue !important;\n }\n \n .kmw-key-layer-group {background-color: #010130 !important;}\n ";
  this.s_cons_13="ذظخحضصىطمنبثشزلكجهغفدسعترق";
  this.s_vowel_14="اوي";
  this.s_tanween_15="ًٌٍ";
  this.s_diacritic_16="َُِّ";
  this.s_FathaVariant_17="َأا";
  this.s_thing_18="ةًٌٍَُِّأءاويذظخحضصىطمنبثشزلكجهغفدسعترق";
  this.s_digitkey_21="0123456789";
  this.s_digit_22="٠١٢٣٤٥٦٧٨٩";
  this.s_NumOpt_23=KeymanWeb.KLOAD(this.KI,"NumOpt","0");
  this.s_Hotkey_24="/\\";
  this.s_FontTashkeelOpt_25=KeymanWeb.KLOAD(this.KI,"FontTashkeelOpt","0");
  this.s_QuranSymbols1_26="ۚۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜ";
  this.s_QuranSymbols2_27="ۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜۚ";
  this.s_harf_28=["ب","ف","و","ك","أ",''];
  this.s_WordEnding_29=" ،؛:!.؟";
  this.s_Punc_rot1_30="؛:؟!";
  this.s_Punc_rot2_31="!؛:؟";
  this.s_1stChar_32="دتسضك";
  this.s_2ndChar_33="ذثشظخ";
  this.s_a_rot1_34="َاآأٰىع";
  this.s_a_rot2_35="اآأٰىعَ";
  this.s_d_rot1_36="دذضظ";
  this.s_d_rot2_37="ذضظد";
  this.s_h_rot1_38="حخه";
  this.s_h_rot2_39="خهح";
  this.s_s_rot1_40="سصش";
  this.s_s_rot2_41="صشس";
  this.s_t_rot1_42="تةطث";
  this.s_t_rot2_43="ةطثت";
  this.s46="0";
  this.s47="1";
  this.s48="1";
  this.s49="0";
  this.s50="1";
  this.s51="0";
  this.s52="1";
  this.s53="1";
  this.s54="0";
  this.KVER="18.0.210.0";
  this.KVS=['s_NumOpt_23','s_FontTashkeelOpt_25'];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F10 /* 0x79 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"ض");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F1 /* 0x70 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"ث");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F2 /* 0x71 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"ء");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F3 /* 0x72 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F4 /* 0x73 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"ۚ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F5 /* 0x74 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"خ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F6 /* 0x75 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F7 /* 0x76 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F8 /* 0x77 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"ذ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F9 /* 0x78 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"ظ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F11 /* 0x7A */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"‎");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"ا");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"لآ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"لأ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"أ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"ي");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"ـ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"آ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"ٌ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"ٍ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"لإ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"ً");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"إ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"َ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"ب");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"د");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"ف");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"غ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"ه");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"ج");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"ك");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"ل");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"م");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"ن");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"ر");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"س");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"ت");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"ى");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"ش");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"ي");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"ز");
      }
    }
    if(m==1) {
    
      k.KDC(-1,t);
      r=this.g_post_1(t,e);
      m=2;
    }
    return r;
  };
  this.g_post_1=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(11,t,[{t:'a',a:this.s_Hotkey_24},{t:'a',a:this.s_Hotkey_24},'ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 212
        k.KDC(11,t);
        k.KO(-1,t,"﷽");
      }
      else if(k.KFCM(10,t,[{t:'a',a:this.s_Hotkey_24},'ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 211
        k.KDC(10,t);
        k.KO(-1,t,"بِسمِ اللَّهِ الرَّحمـٰنِ الرَّحيم");
      }
      else if(k.KFCM(9,t,['ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 210
        k.KDC(9,t);
        k.KO(-1,t,"بِسمِ اللَّه");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','ّ','َ','ت','ِ','ِ'])){
        m=1;   // Line 503
        k.KDC(8,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','ّ','َ','ذ','ِ','ِ'])){
        m=1;   // Line 507
        k.KDC(8,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','َ','ذ','َ','ي','ن'])){
        m=1;   // Line 510
        k.KDC(8,t);
        k.KO(-1,t,"اللَّذَين");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','َ','ت','َ','ي','ن'])){
        m=1;   // Line 512
        k.KDC(8,t);
        k.KO(-1,t,"اللَّتَين");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ت','ِ','ِ'])){
        m=1;   // Line 502
        k.KDC(7,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ذ','ِ','ِ'])){
        m=1;   // Line 506
        k.KDC(7,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ذ','ا','ن'])){
        m=1;   // Line 509
        k.KDC(7,t);
        k.KO(-1,t,"اللَّذان");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ت','ا','ن'])){
        m=1;   // Line 511
        k.KDC(7,t);
        k.KO(-1,t,"اللَّتان");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ا','ت','ِ','ِ'])){
        m=1;   // Line 515
        k.KDC(7,t);
        k.KO(-1,t,"اللّاتي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ا','ء','ِ','ِ'])){
        m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(7,t,['ه','ا','ؤ','ُ','ل','ا','ء'])){
        m=1;   // Line 520
        k.KDC(7,t);
        k.KO(-1,t,"هـٰؤُلاء");
      }
      else if(k.KFCM(7,t,['أ','ُ','ل','ا','ء','ِ','ك'])){
        m=1;   // Line 521
        k.KDC(7,t);
        k.KO(-1,t,"أولـٰئِك");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_harf_28},'َ','ل',{t:'a',a:this.s_diacritic_16},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 321
        k.KDC(6,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"َل");
        k.KIO(-1,this.s_diacritic_16,4,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_13,6,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_28},{t:'a',a:this.s_diacritic_16},'ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 474
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,2,t);
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_29,6,t);
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_28},{t:'a',a:this.s_diacritic_16},'ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 475
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_28,2,t);
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_29,6,t);
      }
      else if(k.KFCM(5,t,['َ','ل','ّ','َ','ه'])){
        m=1;   // Line 206
        k.KDC(5,t);
        k.KO(-1,t,"الله");
      }
      else if(k.KFCM(5,t,['ا','ل','ّ','َ','ه'])){
        m=1;   // Line 207
        k.KDC(5,t);
        k.KO(-1,t,"الله");
      }
      else if(k.KFCM(5,t,['ا','ل','ل','َ','ه'])){
        m=1;   // Line 208
        k.KDC(5,t);
        k.KO(-1,t,"الله");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_24},'أ','ز','و','ج'])){
        m=1;   // Line 215
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_24},'َ','ز','و','ج'])){
        m=1;   // Line 216
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_24},'ع','ز','و','ج'])){
        m=1;   // Line 217
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_24},{t:'a',a:this.s_Hotkey_24},'ص','َ','ُ'])){
        m=1;   // Line 223
        k.KDC(5,t);
        k.KO(-1,t,"ﷺ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_24},{t:'a',a:this.s_Hotkey_24},'س','َ','ُ'])){
        m=1;   // Line 224
        k.KDC(5,t);
        k.KO(-1,t,"ﷺ");
      }
      else if(k.KFCM(5,t,['ا','ل','أ','ُ','ُ'])){
        m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"الأو");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_13},'َ','أ','ُ','ُ'])){
        m=1;   // Line 300
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"َؤو");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_28},'َ','أ','ُ','ُ'])){
        m=1;   // Line 301
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"َأو");
      }
      else if(k.KFCM(5,t,[{t:'n'},'ل',{t:'a',a:this.s_diacritic_16},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_13,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[' ','ل',{t:'a',a:this.s_diacritic_16},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 319
        k.KDC(5,t);
        k.KO(-1,t," ل");
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_13,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_28},'ل',{t:'a',a:this.s_diacritic_16},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 320
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_13,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','َ'])){
        m=1;   // Line 333
        k.KDC(5,t);
        k.KO(-1,t,"لِلأ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','َ'])){
        m=1;   // Line 334
        k.KDC(5,t);
        k.KO(-1,t,"لَلأ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ُ'])){
        m=1;   // Line 336
        k.KDC(5,t);
        k.KO(-1,t,"لِلأُ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ُ'])){
        m=1;   // Line 337
        k.KDC(5,t);
        k.KO(-1,t,"لَلأُ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ِ'])){
        m=1;   // Line 339
        k.KDC(5,t);
        k.KO(-1,t,"لِلإ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ِ'])){
        m=1;   // Line 340
        k.KDC(5,t);
        k.KO(-1,t,"لَلإ");
      }
      else if(k.KFCM(5,t,['ب','ِ','ل','ّ','ل'])){
        m=1;   // Line 342
        k.KDC(5,t);
        k.KO(-1,t,"بِاللّ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_28},'َ','ّ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"ا");
        k.KIO(-1,this.s_cons_13,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_28},'َ','ّ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 351
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"ا");
        k.KIO(-1,this.s_cons_13,5,t);
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_28},'ِ','ّ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 352
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"ِا");
        k.KIO(-1,this.s_cons_13,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_28},'ِ','ّ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 353
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"ِا");
        k.KIO(-1,this.s_cons_13,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},'أ','ل','ُ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 395
        k.KDC(4,t);
        k.KO(-1,t,"الو");
        k.KIO(-1,this.s_diacritic_16,5,t);
      }
      else if(k.KFCM(5,t,[' ','أ','ل','ُ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 396
        k.KDC(5,t);
        k.KO(-1,t," الو");
        k.KIO(-1,this.s_diacritic_16,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},'أ','ل','ِ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 397
        k.KDC(4,t);
        k.KO(-1,t,"الي");
        k.KIO(-1,this.s_diacritic_16,5,t);
      }
      else if(k.KFCM(5,t,[' ','أ','ل','ِ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 398
        k.KDC(5,t);
        k.KO(-1,t," الي");
        k.KIO(-1,this.s_diacritic_16,5,t);
      }
      else if(k.KFCM(5,t,['ت','َ','ن','ّ','ْ'])){
        m=1;   // Line 438
        k.KDC(5,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(5,t,['ت','ُ','ن','ّ','ْ'])){
        m=1;   // Line 439
        k.KDC(5,t);
        k.KO(-1,t,"ةٌ");
      }
      else if(k.KFCM(5,t,['ت','ِ','ن','ّ','ْ'])){
        m=1;   // Line 440
        k.KDC(5,t);
        k.KO(-1,t,"ةٍ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_13},'ّ','َ','ن','ْ'])){
        m=1;   // Line 453
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_13},'ّ','َ','ْ','ن'])){
        m=1;   // Line 455
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,['و','ّ','َ','ن','ْ'])){
        m=1;   // Line 461
        k.KDC(5,t);
        k.KO(-1,t,"وًّا");
      }
      else if(k.KFCM(5,t,['ي','ّ','َ','ن','ْ'])){
        m=1;   // Line 462
        k.KDC(5,t);
        k.KO(-1,t,"يًّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_28},'ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 472
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_29,5,t);
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_28},'ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 473
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_28,2,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_29,5,t);
      }
      else if(k.KFCM(5,t,['إ','ل','ّ','َ',' '])){
        m=1;   // Line 477
        k.KDC(5,t);
        k.KO(-1,t,"إلّا ");
      }
      else if(k.KFCM(5,t,['و','ِ','ل','ّ','َ'])){
        m=1;   // Line 478
        k.KDC(5,t);
        k.KO(-1,t,"وإلّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},'ف','ّ','ِ',' '])){
        m=1;   // Line 483
        k.KDC(4,t);
        k.KO(-1,t,"فَفي ");
      }
      else if(k.KFCM(5,t,[' ','ف','ّ','ِ',' '])){
        m=1;   // Line 484
        k.KDC(5,t);
        k.KO(-1,t," فَفي ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_28},{t:'a',a:this.s_diacritic_16},'ف','ِ',' '])){
        m=1;   // Line 486
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KIO(-1,this.s_diacritic_16,2,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_28},{t:'a',a:this.s_diacritic_16},'م','َ',' '])){
        m=1;   // Line 492
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KIO(-1,this.s_diacritic_16,2,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_28},{t:'a',a:this.s_diacritic_16},'ي','َ',' '])){
        m=1;   // Line 498
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KIO(-1,this.s_diacritic_16,2,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(4,t,['ط','ت','ّ','ت'])){
        m=1;   // Line 190
        k.KDC(4,t);
        k.KO(-1,t,"طّ");
      }
      else if(k.KFCM(4,t,['ص','س','ّ','س'])){
        m=1;   // Line 191
        k.KDC(4,t);
        k.KO(-1,t,"صّ");
      }
      else if(k.KFCM(4,t,['ض','د','ّ','د'])){
        m=1;   // Line 192
        k.KDC(4,t);
        k.KO(-1,t,"ضّ");
      }
      else if(k.KFCM(4,t,['خ','ك','ّ','ك'])){
        m=1;   // Line 193
        k.KDC(4,t);
        k.KO(-1,t,"خّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_24},'س','و','ت'])){
        m=1;   // Line 213
        k.KDC(4,t);
        k.KO(-1,t,"سُبحانَهُ وَتَعالىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_24},'ت','و','ت'])){
        m=1;   // Line 214
        k.KDC(4,t);
        k.KO(-1,t,"تَبارَكَ وَتَعالىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_24},{t:'a',a:this.s_Hotkey_24},'ج','ج'])){
        m=1;   // Line 219
        k.KDC(4,t);
        k.KO(-1,t,"ﷻ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_24},'ص','َ','ُ'])){
        m=1;   // Line 221
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى اللَّٰهُ عَلَيهِ وَسَلَّم");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_24},'س','َ','ُ'])){
        m=1;   // Line 222
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى اللَّٰهُ عَلَيهِ وَسَلَّم");
      }
      else if(k.KFCM(4,t,['َ','ة',{t:'a',a:this.s_diacritic_16},' '])){
        m=1;   // Line 246
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_16,3,t);
        k.KO(-1,t," ");
      }
      else if(k.KFCM(4,t,['َ','ة',{t:'a',a:this.s_tanween_15},' '])){
        m=1;   // Line 247
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_15,3,t);
        k.KO(-1,t," ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'ّ','و','ُ'])){
        m=1;   // Line 252
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ُّوّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'أ','ُ','ُ'])){
        m=1;   // Line 254
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'ّ','ي','ِ'])){
        m=1;   // Line 261
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ِّيّ");
      }
      else if(k.KFCM(4,t,['أ','ل','ّ','ْ'])){
        m=1;   // Line 269
        k.KDC(4,t);
        k.KO(-1,t,"الـ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'و','ْ','ْ'])){
        m=1;   // Line 297
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ُوّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'ي','ْ','ْ'])){
        m=1;   // Line 298
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ِيّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_17},'ل','ْ','َ'])){
        m=1;   // Line 311
        k.KDC(4,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_17},'ل','ْ','ُ'])){
        m=1;   // Line 312
        k.KDC(4,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_17},'ل','ْ','ِ'])){
        m=1;   // Line 313
        k.KDC(4,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 316
        k.KDC(3,t);
        k.KO(-1,t,"لل");
        k.KIO(-1,this.s_cons_13,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[' ','ل','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 317
        k.KDC(4,t);
        k.KO(-1,t," لل");
        k.KIO(-1,this.s_cons_13,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_28},'َ','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 326
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_13,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_28},'ِ','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 327
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"ِال");
        k.KIO(-1,this.s_cons_13,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[' ',{t:'a',a:this.s_cons_13},'ّ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_13,2,t);
        k.KO(-1,t,"ّ");
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,['ا','ل','ّ','ل'])){
        m=1;   // Line 343
        k.KDC(4,t);
        k.KO(-1,t,"اللّ");
      }
      else if(k.KFCM(4,t,['ب','ِ','ل','ْ'])){
        m=1;   // Line 345
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
      }
      else if(k.KFCM(4,t,['ب','ِ','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 346
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
        k.KIO(-1,this.s_cons_13,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل','ل'])){
        m=1;   // Line 388
        k.KDC(3,t);
        k.KO(-1,t,"ألّ");
      }
      else if(k.KFCM(4,t,[' ','أ','ل','ل'])){
        m=1;   // Line 389
        k.KDC(4,t);
        k.KO(-1,t," ألّ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 390
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_13,4,t);
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 391
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_13,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_vowel_14}])){
        m=1;   // Line 392
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_vowel_14,4,t);
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_vowel_14}])){
        m=1;   // Line 393
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_vowel_14,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_cons_13},{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 400
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_13,3,t);
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_vowel_14},{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 401
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_vowel_14,3,t);
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','ُ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 403
        k.KDC(3,t);
        k.KO(-1,t,"الو");
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      if(m) {}
      else if(k.KFCM(4,t,[' ','ل','ُ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 404
        k.KDC(4,t);
        k.KO(-1,t," الو");
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','ِ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 405
        k.KDC(3,t);
        k.KO(-1,t,"الي");
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل','ِ',{t:'a',a:this.s_diacritic_16}])){
        m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t," الي");
        k.KIO(-1,this.s_diacritic_16,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},{t:'a',a:this.s_diacritic_16},'و','ْ'])){
        m=1;   // Line 413
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KIO(-1,this.s_diacritic_16,2,t);
        k.KO(-1,t,"وا");
      }
      else if(k.KFCM(4,t,[' ','أ','ن','ْ'])){
        m=1;   // Line 427
        k.KDC(4,t);
        k.KO(-1,t," ً");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ن','ْ'])){
        m=1;   // Line 428
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(4,t,[' ','إ','ن','ْ'])){
        m=1;   // Line 429
        k.KDC(4,t);
        k.KO(-1,t," ٍ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'إ','ن','ْ'])){
        m=1;   // Line 430
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(4,t,['ي','أ','ن','ْ'])){
        m=1;   // Line 432
        k.KDC(4,t);
        k.KO(-1,t,"يئًا");
      }
      else if(k.KFCM(4,t,['ا','أ','ن','ْ'])){
        m=1;   // Line 433
        k.KDC(4,t);
        k.KO(-1,t,"اءً");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_thing_18},'أ','ن','ْ'])){
        m=1;   // Line 434
        k.KDC(4,t);
        k.KIO(-1,this.s_thing_18,1,t);
        k.KO(-1,t,"ءًا");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_thing_18},'إ','ن','ْ'])){
        m=1;   // Line 435
        k.KDC(4,t);
        k.KIO(-1,this.s_thing_18,1,t);
        k.KO(-1,t,"ءٍ");
      }
      else if(k.KFCM(4,t,['ت','َ','ن','ْ'])){
        m=1;   // Line 442
        k.KDC(4,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(4,t,['ت','ً','ا','ْ'])){
        m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'َ','ن','ْ'])){
        m=1;   // Line 452
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_13},'َ','ْ','ن'])){
        m=1;   // Line 454
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,['ئ','َ','ن','ْ'])){
        m=1;   // Line 457
        k.KDC(4,t);
        k.KO(-1,t,"ئًا");
      }
      else if(k.KFCM(4,t,['و','َ','ن','ْ'])){
        m=1;   // Line 458
        k.KDC(4,t);
        k.KO(-1,t,"وًا");
      }
      else if(k.KFCM(4,t,['ي','َ','ن','ْ'])){
        m=1;   // Line 459
        k.KDC(4,t);
        k.KO(-1,t,"يًا");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 470
        k.KDC(3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_29,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل','َ',{t:'a',a:this.s_WordEnding_29}])){
        m=1;   // Line 471
        k.KDC(4,t);
        k.KO(-1,t," لا");
        k.KIO(-1,this.s_WordEnding_29,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ف','ِ',' '])){
        m=1;   // Line 481
        k.KDC(3,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(4,t,[' ','ف','ِ',' '])){
        m=1;   // Line 482
        k.KDC(4,t);
        k.KO(-1,t," في ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_28},'ف','ِ',' '])){
        m=1;   // Line 485
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'م','َ',' '])){
        m=1;   // Line 489
        k.KDC(3,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,[' ','م','َ',' '])){
        m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t," ما ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_28},'م','َ',' '])){
        m=1;   // Line 491
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ي','َ',' '])){
        m=1;   // Line 495
        k.KDC(3,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(4,t,[' ','ي','َ',' '])){
        m=1;   // Line 496
        k.KDC(4,t);
        k.KO(-1,t," يا ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_28},'ي','َ',' '])){
        m=1;   // Line 497
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(4,t,['ً','ا',' ',' '])){
        m=1;   // Line 539
        k.KDC(4,t);
        k.KO(-1,t,"ا. ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_1stChar_32},{t:'a',a:this.s_diacritic_16},'ه','ه'])){
        m=1;   // Line 552
        k.KDC(4,t);
        k.KIO(-1,this.s_2ndChar_33,1,t);
        k.KIO(-1,this.s_diacritic_16,2,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_2ndChar_33},{t:'i',i:this.s_1stChar_32,o:1},'ه','ه'])){
        m=1;   // Line 553
        k.KDC(4,t);
        k.KIO(-1,this.s_2ndChar_33,1,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_Hotkey_24},'ج','ج'])){
        m=1;   // Line 218
        k.KDC(3,t);
        k.KO(-1,t,"جَلَّ جَلالُه");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_Hotkey_24},'ر','َ'])){
        m=1;   // Line 226
        k.KDC(3,t);
        k.KO(-1,t,"رَضِيَ اللَّٰهُ عَنه");
      }
      else if(k.KFCM(3,t,['أ','َ','َ'])){
        m=1;   // Line 238
        k.KDC(3,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_cons_13,3,t);
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_vowel_14}])){
        m=1;   // Line 240
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_vowel_14,3,t);
      }
      else if(k.KFCM(3,t,['َ','ة',' '])){
        m=1;   // Line 245
        k.KDC(3,t);
        k.KO(-1,t,"ة ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_13},'و','ُ'])){
        m=1;   // Line 251
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ُوّ");
      }
      else if(k.KFCM(3,t,['ء','ُ','ُ'])){
        m=1;   // Line 253
        k.KDC(3,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_13},'ي','ِ'])){
        m=1;   // Line 260
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ِيّ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ','ْ'])){
        m=1;   // Line 263
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(3,t,[' ','ْ','ْ'])){
        m=1;   // Line 264
        k.KDC(3,t);
        k.KO(-1,t," ا");
      }
      else if(k.KFCM(3,t,['ئ','ْ','َ'])){
        m=1;   // Line 277
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','َ','ْ'])){
        m=1;   // Line 278
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','ْ','ُ'])){
        m=1;   // Line 279
        k.KDC(3,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(3,t,['ئ','ُ','ْ'])){
        m=1;   // Line 280
        k.KDC(3,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(3,t,['ؤ','َ','ْ'])){
        m=1;   // Line 281
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ؤ','ْ','َ'])){
        m=1;   // Line 282
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','ْ','ِ'])){
        m=1;   // Line 283
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ئ','ِ','ْ'])){
        m=1;   // Line 284
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 323
        k.KDC(2,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_13,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[' ','ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 324
        k.KDC(3,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_13,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_harf_28},'ْ',{t:'a',a:this.s_cons_13}])){
        m=1;   // Line 325
        k.KDC(3,t);
        k.KIO(-1,this.s_harf_28,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_13,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,['ل','ء','َ'])){
        m=1;   // Line 332
        k.KDC(3,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(3,t,['ل','ء','ُ'])){
        m=1;   // Line 335
        k.KDC(3,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(3,t,['ل','ء','ِ'])){
        m=1;   // Line 338
        k.KDC(3,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(3,t,['و','َ','ُ'])){
        m=1;   // Line 364
        k.KDC(3,t);
        k.KO(-1,t,"وَأُ");
      }
      else if(k.KFCM(3,t,['و','َ','ِ'])){
        m=1;   // Line 365
        k.KDC(3,t);
        k.KO(-1,t,"وَإ");
      }
      else if(k.KFCM(3,t,['أ','َ','ِ'])){
        m=1;   // Line 368
        k.KDC(3,t);
        k.KO(-1,t,"أي");
      }
      else if(k.KFCM(3,t,['أ','ُ','ِ'])){
        m=1;   // Line 373
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ء','َ','َ'])){
        m=1;   // Line 376
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ء','َ','ْ'])){
        m=1;   // Line 377
        k.KDC(3,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(3,t,['ء','َ',{t:'a',a:this.s_thing_18}])){
        m=1;   // Line 378
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_thing_18,3,t);
      }
      else if(k.KFCM(3,t,['ء','ِ','ِ'])){
        m=1;   // Line 381
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ء','ِ',{t:'a',a:this.s_thing_18}])){
        m=1;   // Line 382
        k.KDC(3,t);
        k.KO(-1,t,"إ");
        k.KIO(-1,this.s_thing_18,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_13},'و','ْ'])){
        m=1;   // Line 412
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"وا");
      }
      else if(k.KFCM(3,t,['ء','و','ْ'])){
        m=1;   // Line 414
        k.KDC(3,t);
        k.KO(-1,t,"ءوا");
      }
      else if(k.KFCM(3,t,['ؤ','و','ْ'])){
        m=1;   // Line 415
        k.KDC(3,t);
        k.KO(-1,t,"ؤوا");
      }
      else if(k.KFCM(3,t,['َ','ن','ْ'])){
        m=1;   // Line 418
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ن','ْ'])){
        m=1;   // Line 419
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ن','ْ'])){
        m=1;   // Line 420
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,['َ','ْ','ن'])){
        m=1;   // Line 422
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ْ','ن'])){
        m=1;   // Line 423
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ْ','ن'])){
        m=1;   // Line 424
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_diacritic_16},'ْ'])){
        m=1;   // Line 445
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_16,2,t);
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_tanween_15},'ْ'])){
        m=1;   // Line 446
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_15,2,t);
      }
      else if(k.KFCM(3,t,['ت','ً','ْ'])){
        m=1;   // Line 456
        k.KDC(3,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(3,t,['ء','ً','ْ'])){
        m=1;   // Line 460
        k.KDC(3,t);
        k.KO(-1,t,"ءًا");
      }
      else if(k.KFCM(3,t,['ه','و','َ'])){
        m=1;   // Line 523
        k.KDC(3,t);
        k.KO(-1,t,"هُوَ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_tanween_15},' ',' '])){
        m=1;   // Line 538
        k.KDC(3,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_diacritic_16},' ',' '])){
        m=1;   // Line 540
        k.KDC(3,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_thing_18},' ',' '])){
        m=1;   // Line 541
        k.KDC(3,t);
        k.KIO(-1,this.s_thing_18,1,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,['.',' ','َ'])){
        m=1;   // Line 542
        k.KDC(3,t);
        k.KO(-1,t,"، أ");
      }
      else if(k.KFCM(3,t,['.',' ','ُ'])){
        m=1;   // Line 543
        k.KDC(3,t);
        k.KO(-1,t,"، و");
      }
      else if(k.KFCM(3,t,['.',' ','ِ'])){
        m=1;   // Line 544
        k.KDC(3,t);
        k.KO(-1,t,"، ي");
      }
      else if(k.KFCM(3,t,['.',' ','ْ'])){
        m=1;   // Line 545
        k.KDC(3,t);
        k.KO(-1,t,"، ْ");
      }
      else if(k.KFCM(3,t,['.',' ',{t:'a',a:this.s_thing_18}])){
        m=1;   // Line 546
        k.KDC(3,t);
        k.KO(-1,t,"، ");
        k.KIO(-1,this.s_thing_18,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_1stChar_32},'ه','ه'])){
        m=1;   // Line 551
        k.KDC(3,t);
        k.KIO(-1,this.s_2ndChar_33,1,t);
      }
      else if(k.KFCM(3,t,['ت','ّ','ت'])){
        m=1;   // Line 554
        k.KDC(3,t);
        k.KO(-1,t,"ط");
      }
      else if(k.KFCM(3,t,['س','ّ','س'])){
        m=1;   // Line 555
        k.KDC(3,t);
        k.KO(-1,t,"ص");
      }
      else if(k.KFCM(3,t,['ك','ّ','ك'])){
        m=1;   // Line 556
        k.KDC(3,t);
        k.KO(-1,t,"خ");
      }
      else if(k.KFCM(3,t,['ه','ّ','ه'])){
        m=1;   // Line 557
        k.KDC(3,t);
        k.KO(-1,t,"ح");
      }
      else if(k.KFCM(3,t,['د','ّ','د'])){
        m=1;   // Line 558
        k.KDC(3,t);
        k.KO(-1,t,"ض");
      }
      else if(k.KFCM(3,t,['ض','ّ','ض'])){
        m=1;   // Line 559
        k.KDC(3,t);
        k.KO(-1,t,"ظ");
      }
      else if(k.KFCM(1,t,['‎',])&&this.s_NumOpt_23===this.s46){
        m=1;   // Line 179
        k.KDC(1,t);
        this.s_NumOpt_23=this.s47;
        k.KSAVE("NumOpt",this.s_NumOpt_23);
      }
      else if(k.KFCM(1,t,['‎',])&&this.s_NumOpt_23===this.s48){
        m=1;   // Line 180
        k.KDC(1,t);
        this.s_NumOpt_23=this.s49;
        k.KSAVE("NumOpt",this.s_NumOpt_23);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_digitkey_21},])&&this.s_NumOpt_23===this.s50){
        m=1;   // Line 182
        k.KDC(1,t);
        k.KIO(-1,this.s_digit_22,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_cons_13},{t:'i',i:this.s_cons_13,o:1}])){
        m=1;   // Line 185
        k.KDC(2,t);
        k.KIO(-1,this.s_cons_13,1,t);
        k.KO(-1,t,"ّ");
      }
      if(m) {}
      else if(k.KFCM(2,t,['و','و'])){
        m=1;   // Line 187
        k.KDC(2,t);
        k.KO(-1,t,"وّ");
      }
      else if(k.KFCM(2,t,['ي','ي'])){
        m=1;   // Line 188
        k.KDC(2,t);
        k.KO(-1,t,"يّ");
      }
      else if(k.KFCM(1,t,['‎',])&&this.s_FontTashkeelOpt_25===this.s51){
        m=1;   // Line 201
        k.KDC(1,t);
        this.s_FontTashkeelOpt_25=this.s52;
        k.KSAVE("FontTashkeelOpt",this.s_FontTashkeelOpt_25);
      }
      else if(k.KFCM(1,t,['‎',])&&this.s_FontTashkeelOpt_25===this.s53){
        m=1;   // Line 202
        k.KDC(1,t);
        this.s_FontTashkeelOpt_25=this.s54;
        k.KSAVE("FontTashkeelOpt",this.s_FontTashkeelOpt_25);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_26},'/'])){
        m=1;   // Line 230
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_27,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_26},'ۚ'])){
        m=1;   // Line 231
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_27,1,t);
      }
      else if(k.KFCM(2,t,['َ','َ'])){
        m=1;   // Line 236
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(2,t,['ا','َ'])){
        m=1;   // Line 237
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['ى','َ'])){
        m=1;   // Line 241
        k.KDC(2,t);
        k.KO(-1,t,"ٰ");
      }
      else if(k.KFCM(2,t,['ٰ','َ'])){
        m=1;   // Line 242
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['َ','ى'])){
        m=1;   // Line 244
        k.KDC(2,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(2,t,['ُ','ُ'])){
        m=1;   // Line 249
        k.KDC(2,t);
        k.KO(-1,t,"و");
      }
      else if(k.KFCM(2,t,['و','ُ'])){
        m=1;   // Line 250
        k.KDC(2,t);
        k.KO(-1,t,"وّ");
      }
      else if(k.KFCM(2,t,['ِ','ِ'])){
        m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"ي");
      }
      else if(k.KFCM(2,t,['ي','ِ'])){
        m=1;   // Line 259
        k.KDC(2,t);
        k.KO(-1,t,"يّ");
      }
      else if(k.KFCM(2,t,['ْ','ْ'])){
        m=1;   // Line 265
        k.KDC(2,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(2,t,['ّ','ْ'])){
        m=1;   // Line 266
        k.KDC(2,t);
        k.KO(-1,t,"ٓ");
      }
      else if(k.KFCM(2,t,['ٓ','ْ'])){
        m=1;   // Line 267
        k.KDC(2,t);
        k.KO(-1,t,"ـ");
      }
      else if(k.KFCM(2,t,['ـ','ْ'])){
        m=1;   // Line 268
        k.KDC(2,t);
        k.KO(-1,t,"ــ");
      }
      else if(k.KFCM(2,t,['ء','ء'])){
        m=1;   // Line 271
        k.KDC(2,t);
        k.KO(-1,t,"ئ");
      }
      else if(k.KFCM(2,t,['أ','ء'])){
        m=1;   // Line 272
        k.KDC(2,t);
        k.KO(-1,t,"ئ");
      }
      else if(k.KFCM(2,t,['ُ','ء'])){
        m=1;   // Line 273
        k.KDC(2,t);
        k.KO(-1,t,"ُؤ");
      }
      else if(k.KFCM(2,t,['َ','ء'])){
        m=1;   // Line 274
        k.KDC(2,t);
        k.KO(-1,t,"َأ");
      }
      else if(k.KFCM(2,t,['ِ','ء'])){
        m=1;   // Line 275
        k.KDC(2,t);
        k.KO(-1,t,"ِئ");
      }
      else if(k.KFCM(2,t,['َ','ِ'])){
        m=1;   // Line 286
        k.KDC(2,t);
        k.KO(-1,t,"َي");
      }
      else if(k.KFCM(2,t,['َ','ُ'])){
        m=1;   // Line 287
        k.KDC(2,t);
        k.KO(-1,t,"َو");
      }
      else if(k.KFCM(2,t,['ا','ِ'])){
        m=1;   // Line 289
        k.KDC(2,t);
        k.KO(-1,t,"اي");
      }
      else if(k.KFCM(2,t,['ا','ُ'])){
        m=1;   // Line 290
        k.KDC(2,t);
        k.KO(-1,t,"او");
      }
      else if(k.KFCM(2,t,['ِ','ُ'])){
        m=1;   // Line 293
        k.KDC(2,t);
        k.KO(-1,t,"ِو");
      }
      else if(k.KFCM(2,t,['ُ','ِ'])){
        m=1;   // Line 295
        k.KDC(2,t);
        k.KO(-1,t,"ُي");
      }
      else if(k.KFCM(2,t,[{t:'n'},'َ'])){
        m=1;   // Line 356
        k.KDC(1,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ُ'])){
        m=1;   // Line 357
        k.KDC(1,t);
        k.KO(-1,t,"و");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ِ'])){
        m=1;   // Line 358
        k.KDC(1,t);
        k.KO(-1,t,"ي");
      }
      else if(k.KFCM(2,t,[' ','َ'])){
        m=1;   // Line 360
        k.KDC(2,t);
        k.KO(-1,t," أ");
      }
      else if(k.KFCM(2,t,[' ','ُ'])){
        m=1;   // Line 361
        k.KDC(2,t);
        k.KO(-1,t," و");
      }
      else if(k.KFCM(2,t,[' ','ِ'])){
        m=1;   // Line 362
        k.KDC(2,t);
        k.KO(-1,t," ي");
      }
      else if(k.KFCM(2,t,['إ','ِ'])){
        m=1;   // Line 367
        k.KDC(2,t);
        k.KO(-1,t,"إي");
      }
      else if(k.KFCM(2,t,['أ','ِ'])){
        m=1;   // Line 370
        k.KDC(2,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,['إ','َ'])){
        m=1;   // Line 371
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['إ','ُ'])){
        m=1;   // Line 374
        k.KDC(2,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(2,t,['أ','ْ'])){
        m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['ت','ْ'])){
        m=1;   // Line 448
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,['ه','ْ'])){
        m=1;   // Line 449
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_31},'/'])){
        m=1;   // Line 535
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_30,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_31},'؛'])){
        m=1;   // Line 536
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_30,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_a_rot1_34},'/'])){
        m=1;   // Line 576
        k.KDC(2,t);
        k.KIO(-1,this.s_a_rot2_35,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_d_rot1_36},'/'])){
        m=1;   // Line 577
        k.KDC(2,t);
        k.KIO(-1,this.s_d_rot2_37,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_h_rot1_38},'/'])){
        m=1;   // Line 578
        k.KDC(2,t);
        k.KIO(-1,this.s_h_rot2_39,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_s_rot1_40},'/'])){
        m=1;   // Line 579
        k.KDC(2,t);
        k.KIO(-1,this.s_s_rot2_41,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_t_rot1_42},'/'])){
        m=1;   // Line 580
        k.KDC(2,t);
        k.KIO(-1,this.s_t_rot2_43,1,t);
      }
      else if(k.KFCM(1,t,['‎'])){
        m=1;   // Line 178
        k.KDC(1,t);
      }
      else if(k.KFCM(1,t,[';'])){
        m=1;   // Line 528
        k.KDC(1,t);
        k.KO(-1,t,"؛");
      }
      else if(k.KFCM(1,t,['?'])){
        m=1;   // Line 529
        k.KDC(1,t);
        k.KO(-1,t,"؟");
      }
      else if(k.KFCM(1,t,[','])){
        m=1;   // Line 530
        k.KDC(1,t);
        k.KO(-1,t,"،");
      }
    return r;
  };
}
