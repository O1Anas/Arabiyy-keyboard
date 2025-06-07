if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_arabiyynumonshift());
}
function Keyboard_arabiyynumonshift()
{
  var modCodes = KeymanWeb.Codes.modifierCodes;
  var keyCodes = KeymanWeb.Codes.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_arabiyynumonshift";
  this.KN="Arabiyy - عَرَبِيّ";
  this.KMINVER="17.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=1;
  this.KBVER="1.1";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KRTL=1;
  this.s_cons_11="ذظخحضصىطمنبثشزلكجهغفدسعترق";
  this.s_vowel_12="اوي";
  this.s_consOrVowel_13="ذظخحضصىطمنبثشزلكجهغفدسعترقاوي";
  this.s_tanween_14="ًٌٍ";
  this.s_diacritic_15="َُِّ";
  this.s_FathaVariant_16="َأا";
  this.s_thing_17="ةًٌٍَُِّأءاويذظخحضصىطمنبثشزلكجهغفدسعترق";
  this.s_digitkey_20="0123456789%";
  this.s_digit_21="٠١٢٣٤٥٦٧٨٩٪";
  this.s_NumOpt_22=KeymanWeb.KLOAD(this.KI,"NumOpt","0");
  this.s_Hotkey_23="/\\";
  this.s_LJOpt_24=KeymanWeb.KLOAD(this.KI,"LJOpt","0");
  this.s_QuranSymbols1_25="ۚۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜ";
  this.s_QuranSymbols2_26="ۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜۚ";
  this.s_harf_27=["ب","ف","و","ك","أ",''];
  this.s_WordEnding_28=" ،؛:!.؟";
  this.s_Punc_rot1_29="؛:؟!";
  this.s_Punc_rot2_30="!؛:؟";
  this.s_space_31=[''," "];
  this.s_LatinSymbolsOpt_32=KeymanWeb.KLOAD(this.KI,"LatinSymbolsOpt","0");
  this.s_ArabicSymbols_33="،؟؛";
  this.s_LatinSymbols_34=",?;";
  this.s_1stChar_35="دتسضك";
  this.s_2ndChar_36="ذثشظخ";
  this.s_a_rot1_37="َاآأٰىع";
  this.s_a_rot2_38="اآأٰىعَ";
  this.s_d_rot1_39="دذضظ";
  this.s_d_rot2_40="ذضظد";
  this.s_h_rot1_41="حخه";
  this.s_h_rot2_42="خهح";
  this.s_s_rot1_43="سصش";
  this.s_s_rot2_44="صشس";
  this.s_t_rot1_45="تةطث";
  this.s_t_rot2_46="ةطثت";
  this.s_tashkeel_47="َُِ";
  this.s50="0";
  this.s51="1";
  this.s52="1";
  this.s53="0";
  this.s54="1";
  this.s55="0";
  this.s56="1";
  this.s57="1";
  this.s58="0";
  this.s59="0";
  this.s60="1";
  this.s61="1";
  this.s62="0";
  this.s63="1";
  this.KVER="18.0.238.0";
  this.KVS=['s_NumOpt_22','s_LJOpt_24','s_LatinSymbolsOpt_32'];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PGUP /* 0x21 */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PGDN /* 0x22 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LEFT /* 0x25 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"٪");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_UP /* 0x26 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RIGHT /* 0x27 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_DOWN /* 0x28 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"خ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SEL /* 0x29 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"()");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PRINT /* 0x2A */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"ۚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EXEC /* 0x2B */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x2C)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_INS /* 0x2D */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_DEL /* 0x2E */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HELP /* 0x2F */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3A)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x3B)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x3D)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3F)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"؟");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"َ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"ض");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"ّ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"ڤ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"ڠ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"ِ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"ڠ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"ُ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"پ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"ڤ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x5F)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP1 /* 0x61 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"َ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP2 /* 0x62 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"ب");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP3 /* 0x63 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP4 /* 0x64 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"د");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP5 /* 0x65 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP6 /* 0x66 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"ف");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP7 /* 0x67 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"غ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP8 /* 0x68 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"ه");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP9 /* 0x69 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSTAR /* 0x6A */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"ج");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPPLUS /* 0x6B */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"ك");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SEPARATOR /* 0x6C */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"ل");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPMINUS /* 0x6D */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"م");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPDOT /* 0x6E */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"ن");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSLASH /* 0x6F */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F1 /* 0x70 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"ض");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F2 /* 0x71 */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F3 /* 0x72 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"ر");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F4 /* 0x73 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"س");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F5 /* 0x74 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"ت");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F6 /* 0x75 */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F7 /* 0x76 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"ى");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F8 /* 0x77 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F9 /* 0x78 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"ش");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F10 /* 0x79 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"ي");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F11 /* 0x7A */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"ز");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0xA7)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
      else if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
      else if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
      else if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
      else if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
      else if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
      else if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
      else if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"ء");
      }
      else if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"/");
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
      if(k.KFCM(11,t,[{t:'a',a:this.s_Hotkey_23},{t:'a',a:this.s_Hotkey_23},'ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 216
        k.KDC(11,t);
        k.KO(-1,t,"﷽");
      }
      else if(k.KFCM(10,t,[{t:'a',a:this.s_Hotkey_23},'ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 215
        k.KDC(10,t);
        k.KO(-1,t,"بِسمِ اللَّهِ الرَّحمـٰنِ الرَّحيم");
      }
      else if(k.KFCM(9,t,['ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 214
        k.KDC(9,t);
        k.KO(-1,t,"بِسمِ اللَّه");
      }
      else if(k.KFCM(8,t,['/','/','ل','َ','ت','ِ','ن',' ',])&&this.s_LatinSymbolsOpt_32===this.s59){
        m=1;   // Line 576
        k.KDC(8,t);
        this.s_LatinSymbolsOpt_32=this.s60;
        k.KSAVE("LatinSymbolsOpt",this.s_LatinSymbolsOpt_32);
      }
      else if(k.KFCM(8,t,['/','/','ل','َ','ت','ِ','ن',' ',])&&this.s_LatinSymbolsOpt_32===this.s61){
        m=1;   // Line 577
        k.KDC(8,t);
        this.s_LatinSymbolsOpt_32=this.s62;
        k.KSAVE("LatinSymbolsOpt",this.s_LatinSymbolsOpt_32);
      }
      else if(k.KFCM(8,t,['ا','ل','ل','ّ','َ','ذ','ِ','ِ'])){
        m=1;   // Line 518
        k.KDC(8,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','ّ','َ','ت','ِ','ِ'])){
        m=1;   // Line 523
        k.KDC(8,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(8,t,['أ','ل','ّ','َ','ذ','َ','ي','ن'])){
        m=1;   // Line 526
        k.KDC(8,t);
        k.KO(-1,t,"اللَّذَين");
      }
      else if(k.KFCM(8,t,['أ','ل','ّ','َ','ت','َ','ي','ن'])){
        m=1;   // Line 528
        k.KDC(8,t);
        k.KO(-1,t,"اللَّتَين");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','ّ','ا','ء','ِ','ِ'])){
        m=1;   // Line 535
        k.KDC(8,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(8,t,['/','/','ل','َ','ت','ِ','ن',' '])){
        m=1;   // Line 575
        k.KDC(8,t);
      }
      else if(k.KFCM(6,t,['/','/','ر','ق','م',' ',])&&this.s_NumOpt_22===this.s50){
        m=1;   // Line 179
        k.KDC(6,t);
        this.s_NumOpt_22=this.s51;
        k.KSAVE("NumOpt",this.s_NumOpt_22);
      }
      else if(k.KFCM(6,t,['/','/','ر','ق','م',' ',])&&this.s_NumOpt_22===this.s52){
        m=1;   // Line 180
        k.KDC(6,t);
        this.s_NumOpt_22=this.s53;
        k.KSAVE("NumOpt",this.s_NumOpt_22);
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','َ','ذ','ِ','ِ'])){
        m=1;   // Line 516
        k.KDC(7,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ّ','َ','ذ','ي'])){
        m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','َ','ت','ِ','ِ'])){
        m=1;   // Line 521
        k.KDC(7,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ّ','َ','ت','ي'])){
        m=1;   // Line 522
        k.KDC(7,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','َ','ذ','ا','ن'])){
        m=1;   // Line 525
        k.KDC(7,t);
        k.KO(-1,t,"اللَّذان");
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','َ','ت','ا','ن'])){
        m=1;   // Line 527
        k.KDC(7,t);
        k.KO(-1,t,"اللَّتان");
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','ا','ت','ِ','ِ'])){
        m=1;   // Line 531
        k.KDC(7,t);
        k.KO(-1,t,"اللّاتي");
      }
      else if(k.KFCM(7,t,['أ','ل','ّ','ا','ء','ِ','ِ'])){
        m=1;   // Line 533
        k.KDC(7,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ّ','ا','ء','ي'])){
        m=1;   // Line 534
        k.KDC(7,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(7,t,['ه','ا','ؤ','ُ','ل','ا','ء'])){
        m=1;   // Line 538
        k.KDC(7,t);
        k.KO(-1,t,"هـٰؤُلاء");
      }
      else if(k.KFCM(7,t,['ه','ا','ء','ُ','ل','ا','ء'])){
        m=1;   // Line 539
        k.KDC(7,t);
        k.KO(-1,t,"هـٰؤُلاء");
      }
      else if(k.KFCM(7,t,['أ','ُ','ل','ا','ء','ِ','ك'])){
        m=1;   // Line 540
        k.KDC(7,t);
        k.KO(-1,t,"أولـٰئِك");
      }
      else if(k.KFCM(6,t,['/','/','ر','ق','م',' '])){
        m=1;   // Line 178
        k.KDC(6,t);
      }
      else if(k.KFCM(5,t,['/','/','ل','ج',' ',])&&this.s_LJOpt_24===this.s55){
        m=1;   // Line 204
        k.KDC(5,t);
        this.s_LJOpt_24=this.s56;
        k.KSAVE("LJOpt",this.s_LJOpt_24);
      }
      else if(k.KFCM(5,t,['/','/','ل','ج',' ',])&&this.s_LJOpt_24===this.s57){
        m=1;   // Line 205
        k.KDC(5,t);
        this.s_LJOpt_24=this.s58;
        k.KSAVE("LJOpt",this.s_LJOpt_24);
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_Hotkey_23},'س','َ','ل','َ','م'])){
        m=1;   // Line 207
        k.KDC(6,t);
        k.KO(-1,t,"السَّلامُ عَلَيكُم وَرَحمةُ اللَّهِ وَبَرَكاتُه");
      }
      else if(k.KFCM(6,t,['َ','ت','َ','ن','ّ','ْ'])){
        m=1;   // Line 254
        k.KDC(6,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_cons_11},'ّ','ا','ء','ِ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 291
        k.KDC(6,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ّائِ");
        k.KIO(-1,this.s_cons_11,6,t);
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_harf_27},'َ','ل',{t:'a',a:this.s_diacritic_15},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 335
        k.KDC(6,t);
        k.KIO(-1,this.s_harf_27,1,t);
        k.KO(-1,t,"َل");
        k.KIO(-1,this.s_diacritic_15,4,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,6,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 482
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_28,6,t);
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 483
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_28,6,t);
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ف','ِ',' '])){
        m=1;   // Line 495
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ف','ِ',' '])){
        m=1;   // Line 496
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'م','َ',' '])){
        m=1;   // Line 503
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'م','َ',' '])){
        m=1;   // Line 504
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ي','َ',' '])){
        m=1;   // Line 511
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_27},{t:'a',a:this.s_diacritic_15},'ي','َ',' '])){
        m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(6,t,['أ','ل','ّ','َ','ذ','ي'])){
        m=1;   // Line 515
        k.KDC(6,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(6,t,['أ','ل','ّ','َ','ت','ي'])){
        m=1;   // Line 520
        k.KDC(6,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(6,t,['أ','ل','ّ','ا','ت','ي'])){
        m=1;   // Line 530
        k.KDC(6,t);
        k.KO(-1,t,"اللّاتي");
      }
      else if(k.KFCM(6,t,['أ','ل','ّ','ا','ء','ي'])){
        m=1;   // Line 532
        k.KDC(6,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(5,t,['/','/','ل','ج',' '])){
        m=1;   // Line 203
        k.KDC(5,t);
      }
      else if(k.KFCM(5,t,['َ','ل','ّ','َ','ه'])){
        m=1;   // Line 209
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['أ','ل','ّ','َ','ه'])){
        m=1;   // Line 210
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['ا','ل','ّ','َ','ه'])){
        m=1;   // Line 211
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['ا','ل','ل','َ','ه'])){
        m=1;   // Line 212
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_23},'أ','ز','و','ج'])){
        m=1;   // Line 219
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_23},'َ','ز','و','ج'])){
        m=1;   // Line 220
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_23},'ع','ز','و','ج'])){
        m=1;   // Line 221
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_23},{t:'a',a:this.s_Hotkey_23},'ص','َ','و'])){
        m=1;   // Line 227
        k.KDC(5,t);
        k.KO(-1,t,"ﷺ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_Hotkey_23},{t:'a',a:this.s_Hotkey_23},'س','َ','و'])){
        m=1;   // Line 228
        k.KDC(5,t);
        k.KO(-1,t,"ﷺ");
      }
      else if(k.KFCM(5,t,['َ','ت','َ','ن','ْ'])){
        m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(5,t,['َ','ت','ُ','ن','ْ'])){
        m=1;   // Line 256
        k.KDC(5,t);
        k.KO(-1,t,"ةٌ");
      }
      else if(k.KFCM(5,t,['َ','ت','ِ','ن','ْ'])){
        m=1;   // Line 257
        k.KDC(5,t);
        k.KO(-1,t,"ةٍ");
      }
      else if(k.KFCM(5,t,['ا','ل','أ','ُ','ُ'])){
        m=1;   // Line 264
        k.KDC(5,t);
        k.KO(-1,t,"الأو");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_11},'ا','ء','ِ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 290
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ائِ");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_vowel_12},'ا','ء','ِ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 292
        k.KDC(5,t);
        k.KIO(-1,this.s_vowel_12,1,t);
        k.KO(-1,t,"ائِ");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},'ل',{t:'a',a:this.s_diacritic_15},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 332
        k.KDC(4,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[' ','ل',{t:'a',a:this.s_diacritic_15},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 333
        k.KDC(5,t);
        k.KO(-1,t," ل");
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_27},'ل',{t:'a',a:this.s_diacritic_15},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 334
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_27,1,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','َ'])){
        m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"لِلأ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','َ'])){
        m=1;   // Line 348
        k.KDC(5,t);
        k.KO(-1,t,"لَلأ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ُ'])){
        m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t,"لِلأُ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ُ'])){
        m=1;   // Line 351
        k.KDC(5,t);
        k.KO(-1,t,"لَلأُ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ِ'])){
        m=1;   // Line 353
        k.KDC(5,t);
        k.KO(-1,t,"لِلإ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ِ'])){
        m=1;   // Line 354
        k.KDC(5,t);
        k.KO(-1,t,"لَلإ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ئ','َ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 356
        k.KDC(5,t);
        k.KO(-1,t,"لِأ");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,['ل','ِ','ئ','ُ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 357
        k.KDC(5,t);
        k.KO(-1,t,"لِأُ");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,['ل','ِ','ئ','ُ',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 358
        k.KDC(5,t);
        k.KO(-1,t,"لِأُ");
        k.KIO(-1,this.s_vowel_12,5,t);
      }
      else if(k.KFCM(5,t,['ل','ِ','ئ','ِ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 359
        k.KDC(5,t);
        k.KO(-1,t,"لِإ");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,['ب','ِ','ل','ّ','ل'])){
        m=1;   // Line 361
        k.KDC(5,t);
        k.KO(-1,t,"بِاللّ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'َ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 369
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'َ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 370
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'ِ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 371
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ِا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'ِ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 372
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ِا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,['ي','ء','َ','ن','ْ'])){
        m=1;   // Line 443
        k.KDC(5,t);
        k.KO(-1,t,"يئًا");
      }
      else if(k.KFCM(5,t,['ا','ء','َ','ن','ْ'])){
        m=1;   // Line 444
        k.KDC(5,t);
        k.KO(-1,t,"اءً");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_thing_17},'ء','َ','ن','ْ'])){
        m=1;   // Line 445
        k.KDC(5,t);
        k.KIO(-1,this.s_thing_17,1,t);
        k.KO(-1,t,"ءًا");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_thing_17},'ء','ِ','ن','ْ'])){
        m=1;   // Line 446
        k.KDC(5,t);
        k.KIO(-1,this.s_thing_17,1,t);
        k.KO(-1,t,"ءٍ");
      }
      else if(k.KFCM(5,t,['ت','َ','ن','ّ','ْ'])){
        m=1;   // Line 449
        k.KDC(5,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(5,t,['ت','ُ','ن','ّ','ْ'])){
        m=1;   // Line 450
        k.KDC(5,t);
        k.KO(-1,t,"ةٌ");
      }
      else if(k.KFCM(5,t,['ت','ِ','ن','ّ','ْ'])){
        m=1;   // Line 451
        k.KDC(5,t);
        k.KO(-1,t,"ةٍ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_11},'ّ','َ','ن','ْ'])){
        m=1;   // Line 465
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_11},'ّ','َ','ْ','ن'])){
        m=1;   // Line 467
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,['و','ّ','َ','ن','ْ'])){
        m=1;   // Line 473
        k.KDC(5,t);
        k.KO(-1,t,"وًّا");
      }
      else if(k.KFCM(5,t,['ي','ّ','َ','ن','ْ'])){
        m=1;   // Line 474
        k.KDC(5,t);
        k.KO(-1,t,"يًّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 480
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_28,5,t);
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 481
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_28,5,t);
      }
      else if(k.KFCM(5,t,['إ','ل','ّ','َ',' '])){
        m=1;   // Line 485
        k.KDC(5,t);
        k.KO(-1,t,"إلّا ");
      }
      else if(k.KFCM(5,t,['و','ِ','ل','ّ','َ'])){
        m=1;   // Line 486
        k.KDC(5,t);
        k.KO(-1,t,"وإلّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},'ف','ّ','ِ',' '])){
        m=1;   // Line 491
        k.KDC(4,t);
        k.KO(-1,t,"فَفي ");
      }
      else if(k.KFCM(5,t,[' ','ف','ّ','ِ',' '])){
        m=1;   // Line 492
        k.KDC(5,t);
        k.KO(-1,t," فَفي ");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'ف','ِ',' '])){
        m=1;   // Line 493
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'ف','ِ',' '])){
        m=1;   // Line 494
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'م','َ',' '])){
        m=1;   // Line 501
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'م','َ',' '])){
        m=1;   // Line 502
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_27},'ي','َ',' '])){
        m=1;   // Line 509
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"يا ");
      }
      if(m) {}
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_27},'ي','َ',' '])){
        m=1;   // Line 510
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_27,2,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(4,t,['َ',' ','ن','ْ'])){
        m=1;   // Line 187
        k.KDC(4,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(4,t,['ُ',' ','ن','ْ'])){
        m=1;   // Line 188
        k.KDC(4,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(4,t,['ِ',' ','ن','ْ'])){
        m=1;   // Line 189
        k.KDC(4,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(4,t,['ط','ت','ّ','ت'])){
        m=1;   // Line 194
        k.KDC(4,t);
        k.KO(-1,t,"طّ");
      }
      else if(k.KFCM(4,t,['ص','س','ّ','س'])){
        m=1;   // Line 195
        k.KDC(4,t);
        k.KO(-1,t,"صّ");
      }
      else if(k.KFCM(4,t,['ض','د','ّ','د'])){
        m=1;   // Line 196
        k.KDC(4,t);
        k.KO(-1,t,"ضّ");
      }
      else if(k.KFCM(4,t,['خ','ك','ّ','ك'])){
        m=1;   // Line 197
        k.KDC(4,t);
        k.KO(-1,t,"خّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_23},'س','و','ت'])){
        m=1;   // Line 217
        k.KDC(4,t);
        k.KO(-1,t,"سُبحانَهُ وَتَعالىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_23},'ت','و','ت'])){
        m=1;   // Line 218
        k.KDC(4,t);
        k.KO(-1,t,"تَبارَكَ وَتَعالىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_23},{t:'a',a:this.s_Hotkey_23},'ج','ج'])){
        m=1;   // Line 223
        k.KDC(4,t);
        k.KO(-1,t,"ﷻ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_23},'ص','َ','و'])){
        m=1;   // Line 225
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى اللَّٰهُ عَلَيهِ وَسَلَّم");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_Hotkey_23},'س','َ','و'])){
        m=1;   // Line 226
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى اللَّٰهُ عَلَيهِ وَسَلَّم");
      }
      else if(k.KFCM(4,t,['َ','ة',{t:'a',a:this.s_diacritic_15},' '])){
        m=1;   // Line 251
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_15,3,t);
        k.KO(-1,t," ");
      }
      else if(k.KFCM(4,t,['َ','ت',{t:'a',a:this.s_diacritic_15},'ْ'])){
        m=1;   // Line 253
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_15,3,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'أ','ُ','ُ'])){
        m=1;   // Line 263
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(4,t,['أ','ل','ّ','ْ'])){
        m=1;   // Line 276
        k.KDC(4,t);
        k.KO(-1,t,"الـ");
      }
      else if(k.KFCM(4,t,['أ','ُ',{t:'a',a:this.s_cons_11},'ء'])){
        m=1;   // Line 287
        k.KDC(4,t);
        k.KO(-1,t,"أُ");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(4,t,['َ','إ','ِ','ِ'])){
        m=1;   // Line 295
        k.KDC(4,t);
        k.KO(-1,t,"َئي");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_16},'ل','ْ','َ'])){
        m=1;   // Line 325
        k.KDC(4,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_16},'ل','ْ','ُ'])){
        m=1;   // Line 326
        k.KDC(4,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_16},'ل','ْ','ِ'])){
        m=1;   // Line 327
        k.KDC(4,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 330
        k.KDC(3,t);
        k.KO(-1,t,"لل");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[' ','ل','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 331
        k.KDC(4,t);
        k.KO(-1,t," لل");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_27},'َ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 340
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_27},'ِ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 341
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_27,1,t);
        k.KO(-1,t,"ِال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[' ',{t:'a',a:this.s_cons_11},'ّ',{t:'a',a:this.s_diacritic_15}])){
        m=1;   // Line 343
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,2,t);
        k.KO(-1,t,"ّ");
        k.KIO(-1,this.s_diacritic_15,4,t);
      }
      else if(k.KFCM(4,t,['ا','ل','ّ','ل'])){
        m=1;   // Line 362
        k.KDC(4,t);
        k.KO(-1,t,"اللّ");
      }
      else if(k.KFCM(4,t,['ب','ِ','ل','ْ'])){
        m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
      }
      else if(k.KFCM(4,t,['ب','ِ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 365
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل','ل'])){
        m=1;   // Line 404
        k.KDC(3,t);
        k.KO(-1,t,"ألّ");
      }
      else if(k.KFCM(4,t,[' ','أ','ل','ل'])){
        m=1;   // Line 405
        k.KDC(4,t);
        k.KO(-1,t," ألّ");
      }
      else if(k.KFCM(4,t,['أ','ل','ّ','ل'])){
        m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t,"اللّ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 408
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,4,t);
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 409
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 410
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_vowel_12,4,t);
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 411
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_vowel_12,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_consOrVowel_13},{t:'a',a:this.s_diacritic_15}])){
        m=1;   // Line 413
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_consOrVowel_13,3,t);
        k.KIO(-1,this.s_diacritic_15,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل',{t:'a',a:this.s_consOrVowel_13},{t:'a',a:this.s_diacritic_15}])){
        m=1;   // Line 414
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_consOrVowel_13,3,t);
        k.KIO(-1,this.s_diacritic_15,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_cons_11},{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 416
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KIO(-1,this.s_vowel_12,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل',{t:'a',a:this.s_cons_11},{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 417
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KIO(-1,this.s_vowel_12,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},{t:'a',a:this.s_diacritic_15},'و','ْ'])){
        m=1;   // Line 424
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KIO(-1,this.s_diacritic_15,2,t);
        k.KO(-1,t,"وا");
      }
      else if(k.KFCM(4,t,[' ','أ','ن','ْ'])){
        m=1;   // Line 438
        k.KDC(4,t);
        k.KO(-1,t," ً");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ن','ْ'])){
        m=1;   // Line 439
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(4,t,[' ','إ','ن','ْ'])){
        m=1;   // Line 440
        k.KDC(4,t);
        k.KO(-1,t," ٍ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'إ','ن','ْ'])){
        m=1;   // Line 441
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(4,t,['ت','َ','ن','ْ'])){
        m=1;   // Line 453
        k.KDC(4,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(4,t,['ت','ً','ا','ْ'])){
        m=1;   // Line 454
        k.KDC(4,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'َ','ن','ْ'])){
        m=1;   // Line 464
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'َ','ْ','ن'])){
        m=1;   // Line 466
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,['ئ','َ','ن','ْ'])){
        m=1;   // Line 469
        k.KDC(4,t);
        k.KO(-1,t,"ئًا");
      }
      else if(k.KFCM(4,t,['و','َ','ن','ْ'])){
        m=1;   // Line 470
        k.KDC(4,t);
        k.KO(-1,t,"وًا");
      }
      else if(k.KFCM(4,t,['ي','َ','ن','ْ'])){
        m=1;   // Line 471
        k.KDC(4,t);
        k.KO(-1,t,"يًا");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 478
        k.KDC(3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_28,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل','َ',{t:'a',a:this.s_WordEnding_28}])){
        m=1;   // Line 479
        k.KDC(4,t);
        k.KO(-1,t," لا");
        k.KIO(-1,this.s_WordEnding_28,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ف','ِ',' '])){
        m=1;   // Line 489
        k.KDC(3,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(4,t,[' ','ف','ِ',' '])){
        m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t," في ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'م','َ',' '])){
        m=1;   // Line 499
        k.KDC(3,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,[' ','م','َ',' '])){
        m=1;   // Line 500
        k.KDC(4,t);
        k.KO(-1,t," ما ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ي','َ',' '])){
        m=1;   // Line 507
        k.KDC(3,t);
        k.KO(-1,t,"يا ");
      }
      else if(k.KFCM(4,t,[' ','ي','َ',' '])){
        m=1;   // Line 508
        k.KDC(4,t);
        k.KO(-1,t," يا ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_tanween_14},'،',' ',' '])){
        m=1;   // Line 560
        k.KDC(4,t);
        k.KO(-1,t,".");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_2ndChar_36},{t:'i',i:this.s_1stChar_35,o:1},'ه','ه'])){
        m=1;   // Line 586
        k.KDC(4,t);
        k.KIO(-1,this.s_2ndChar_36,1,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_Hotkey_23},'ج','ج'])){
        m=1;   // Line 222
        k.KDC(3,t);
        k.KO(-1,t,"جَلَّ جَلالُه");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_Hotkey_23},'ر','َ'])){
        m=1;   // Line 230
        k.KDC(3,t);
        k.KO(-1,t,"رَضِيَ اللَّٰهُ عَنه");
      }
      else if(k.KFCM(3,t,['أ','َ','َ'])){
        m=1;   // Line 242
        k.KDC(3,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 243
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_cons_11,3,t);
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 244
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_vowel_12,3,t);
      }
      else if(k.KFCM(3,t,['َ','ت','ْ'])){
        m=1;   // Line 249
        k.KDC(3,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(3,t,['َ','ه','ْ'])){
        m=1;   // Line 250
        k.KDC(3,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(3,t,['َ','ة',{t:'a',a:this.s_tanween_14}])){
        m=1;   // Line 252
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_14,3,t);
      }
      else if(k.KFCM(3,t,['و','ُ','ُ'])){
        m=1;   // Line 260
        k.KDC(3,t);
        k.KO(-1,t,"ُؤ");
      }
      else if(k.KFCM(3,t,['ء','ُ','ْ'])){
        m=1;   // Line 261
        k.KDC(3,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(3,t,['ء','ْ','ُ'])){
        m=1;   // Line 262
        k.KDC(3,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ','ْ'])){
        m=1;   // Line 270
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(3,t,[' ','ْ','ْ'])){
        m=1;   // Line 271
        k.KDC(3,t);
        k.KO(-1,t," ا");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_FathaVariant_16},{t:'a',a:this.s_cons_11},'ء'])){
        m=1;   // Line 286
        k.KDC(3,t);
        k.KIO(-1,this.s_FathaVariant_16,1,t);
        k.KIO(-1,this.s_cons_11,2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['إ',{t:'a',a:this.s_cons_11},'ء'])){
        m=1;   // Line 288
        k.KDC(3,t);
        k.KO(-1,t,"إ");
        k.KIO(-1,this.s_cons_11,2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['َ','أ','ي'])){
        m=1;   // Line 294
        k.KDC(3,t);
        k.KO(-1,t,"َئي");
      }
      else if(k.KFCM(3,t,['ئ','ْ','َ'])){
        m=1;   // Line 307
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','َ','ْ'])){
        m=1;   // Line 308
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','ْ','ُ'])){
        m=1;   // Line 309
        k.KDC(3,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(3,t,['ئ','ُ','ْ'])){
        m=1;   // Line 310
        k.KDC(3,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(3,t,['ؤ','َ','ْ'])){
        m=1;   // Line 311
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ؤ','ْ','َ'])){
        m=1;   // Line 312
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','ْ','ِ'])){
        m=1;   // Line 313
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ئ','ِ','ْ'])){
        m=1;   // Line 314
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 337
        k.KDC(2,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[' ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 338
        k.KDC(3,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_harf_27},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 339
        k.KDC(3,t);
        k.KIO(-1,this.s_harf_27,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,['ل','ء','َ'])){
        m=1;   // Line 346
        k.KDC(3,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(3,t,['ل','ء','ُ'])){
        m=1;   // Line 349
        k.KDC(3,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(3,t,['ل','ء','ِ'])){
        m=1;   // Line 352
        k.KDC(3,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(3,t,['و','َ','ُ'])){
        m=1;   // Line 383
        k.KDC(3,t);
        k.KO(-1,t,"وَأُ");
      }
      else if(k.KFCM(3,t,['و','َ','ِ'])){
        m=1;   // Line 384
        k.KDC(3,t);
        k.KO(-1,t,"وَإ");
      }
      else if(k.KFCM(3,t,['أ','ُ','ِ'])){
        m=1;   // Line 389
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ء','ْ','َ'])){
        m=1;   // Line 392
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ء','َ','ْ'])){
        m=1;   // Line 393
        k.KDC(3,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(3,t,['ء','ِ','ْ'])){
        m=1;   // Line 397
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_11},'و','ْ'])){
        m=1;   // Line 423
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"وا");
      }
      if(m) {}
      else if(k.KFCM(3,t,['ء','و','ْ'])){
        m=1;   // Line 425
        k.KDC(3,t);
        k.KO(-1,t,"ءوا");
      }
      else if(k.KFCM(3,t,['ؤ','و','ْ'])){
        m=1;   // Line 426
        k.KDC(3,t);
        k.KO(-1,t,"ؤوا");
      }
      else if(k.KFCM(3,t,['َ','ن','ْ'])){
        m=1;   // Line 429
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ن','ْ'])){
        m=1;   // Line 430
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ن','ْ'])){
        m=1;   // Line 431
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,['َ','ْ','ن'])){
        m=1;   // Line 433
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ْ','ن'])){
        m=1;   // Line 434
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ْ','ن'])){
        m=1;   // Line 435
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,['ة','ً','ْ'])){
        m=1;   // Line 455
        k.KDC(3,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_diacritic_15},'ْ'])){
        m=1;   // Line 457
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_15,2,t);
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_tanween_14},'ْ'])){
        m=1;   // Line 458
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_14,2,t);
      }
      else if(k.KFCM(3,t,['ت','ً','ْ'])){
        m=1;   // Line 468
        k.KDC(3,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(3,t,['ء','ً','ْ'])){
        m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"ءًا");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_thing_17},' ',' '])){
        m=1;   // Line 555
        k.KDC(3,t);
        k.KIO(-1,this.s_thing_17,1,t);
        k.KO(-1,t,"، ");
      }
      else if(k.KFCM(3,t,['ّ',' ',' '])){
        m=1;   // Line 556
        k.KDC(3,t);
        k.KO(-1,t,"ّ، ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_diacritic_15},' ',' '])){
        m=1;   // Line 557
        k.KDC(3,t);
        k.KO(-1,t,"، ");
      }
      else if(k.KFCM(3,t,['،',' ',' '])){
        m=1;   // Line 559
        k.KDC(3,t);
        k.KO(-1,t,".");
      }
      else if(k.KFCM(3,t,['.',{t:'a',a:this.s_space_31},'َ'])){
        m=1;   // Line 564
        k.KDC(3,t);
        k.KO(-1,t,"، أ");
      }
      else if(k.KFCM(3,t,['.',{t:'a',a:this.s_space_31},'ُ'])){
        m=1;   // Line 565
        k.KDC(3,t);
        k.KO(-1,t,"، أُ");
      }
      else if(k.KFCM(3,t,['.',{t:'a',a:this.s_space_31},'ِ'])){
        m=1;   // Line 566
        k.KDC(3,t);
        k.KO(-1,t,"، إ");
      }
      else if(k.KFCM(3,t,['.',{t:'a',a:this.s_space_31},'ْ'])){
        m=1;   // Line 567
        k.KDC(3,t);
        k.KO(-1,t,"، ْ");
      }
      else if(k.KFCM(3,t,['.',{t:'a',a:this.s_space_31},{t:'a',a:this.s_thing_17}])){
        m=1;   // Line 568
        k.KDC(3,t);
        k.KO(-1,t,"، ");
        k.KIO(-1,this.s_thing_17,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_1stChar_35},'ه','ه'])){
        m=1;   // Line 584
        k.KDC(3,t);
        k.KIO(-1,this.s_2ndChar_36,1,t);
      }
      else if(k.KFCM(3,t,['ت','ّ','ت'])){
        m=1;   // Line 587
        k.KDC(3,t);
        k.KO(-1,t,"ط");
      }
      else if(k.KFCM(3,t,['س','ّ','س'])){
        m=1;   // Line 588
        k.KDC(3,t);
        k.KO(-1,t,"ص");
      }
      else if(k.KFCM(3,t,['ك','ّ','ك'])){
        m=1;   // Line 589
        k.KDC(3,t);
        k.KO(-1,t,"خ");
      }
      else if(k.KFCM(3,t,['ه','ّ','ه'])){
        m=1;   // Line 590
        k.KDC(3,t);
        k.KO(-1,t,"ح");
      }
      else if(k.KFCM(3,t,['د','ّ','د'])){
        m=1;   // Line 591
        k.KDC(3,t);
        k.KO(-1,t,"ض");
      }
      else if(k.KFCM(3,t,['ض','ّ','ض'])){
        m=1;   // Line 592
        k.KDC(3,t);
        k.KO(-1,t,"ظ");
      }
      else if(k.KFCM(3,t,['ب','ّ','ب'])){
        m=1;   // Line 595
        k.KDC(3,t);
        k.KO(-1,t,"پ");
      }
      else if(k.KFCM(3,t,['ى','ّ','ى'])){
        m=1;   // Line 596
        k.KDC(3,t);
        k.KO(-1,t,"ڤ");
      }
      else if(k.KFCM(3,t,['ف','ّ','ف'])){
        m=1;   // Line 597
        k.KDC(3,t);
        k.KO(-1,t,"ڤ");
      }
      else if(k.KFCM(3,t,['غ','ّ','غ'])){
        m=1;   // Line 598
        k.KDC(3,t);
        k.KO(-1,t,"ڠ");
      }
      else if(k.KFCM(3,t,['ج','ّ','ج'])){
        m=1;   // Line 599
        k.KDC(3,t);
        k.KO(-1,t,"ڠ");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_digitkey_20},])&&this.s_NumOpt_22===this.s54){
        m=1;   // Line 182
        k.KDC(1,t);
        k.KIO(-1,this.s_digit_21,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_cons_11},{t:'i',i:this.s_cons_11,o:1}])){
        m=1;   // Line 185
        k.KDC(2,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(2,t,['و','و'])){
        m=1;   // Line 191
        k.KDC(2,t);
        k.KO(-1,t,"وّ");
      }
      else if(k.KFCM(2,t,['ي','ي'])){
        m=1;   // Line 192
        k.KDC(2,t);
        k.KO(-1,t,"يّ");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_25},'/'])){
        m=1;   // Line 234
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_26,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_25},'ۚ'])){
        m=1;   // Line 235
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_26,1,t);
      }
      else if(k.KFCM(2,t,['َ','َ'])){
        m=1;   // Line 240
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(2,t,['ا','َ'])){
        m=1;   // Line 241
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['ى','َ'])){
        m=1;   // Line 245
        k.KDC(2,t);
        k.KO(-1,t,"ٰ");
      }
      else if(k.KFCM(2,t,['ٰ','َ'])){
        m=1;   // Line 246
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['َ','ى'])){
        m=1;   // Line 248
        k.KDC(2,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(2,t,['ُ','ُ'])){
        m=1;   // Line 259
        k.KDC(2,t);
        k.KO(-1,t,"و");
      }
      else if(k.KFCM(2,t,['ِ','ِ'])){
        m=1;   // Line 266
        k.KDC(2,t);
        k.KO(-1,t,"ي");
      }
      else if(k.KFCM(2,t,['ا','ِ'])){
        m=1;   // Line 268
        k.KDC(2,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,['ْ','ْ'])){
        m=1;   // Line 272
        k.KDC(2,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(2,t,['ّ','ْ'])){
        m=1;   // Line 273
        k.KDC(2,t);
        k.KO(-1,t,"ٓ");
      }
      else if(k.KFCM(2,t,['ٓ','ْ'])){
        m=1;   // Line 274
        k.KDC(2,t);
        k.KO(-1,t,"ـ");
      }
      else if(k.KFCM(2,t,['ـ','ْ'])){
        m=1;   // Line 275
        k.KDC(2,t);
        k.KO(-1,t,"ــ");
      }
      else if(k.KFCM(2,t,['ء','ء'])){
        m=1;   // Line 278
        k.KDC(2,t);
        k.KO(-1,t,"ئ");
      }
      else if(k.KFCM(2,t,['ئ','ء'])){
        m=1;   // Line 279
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['أ','ء'])){
        m=1;   // Line 280
        k.KDC(2,t);
        k.KO(-1,t,"ء");
      }
      else if(k.KFCM(2,t,['ُ','ء'])){
        m=1;   // Line 282
        k.KDC(2,t);
        k.KO(-1,t,"ُؤ");
      }
      else if(k.KFCM(2,t,['َ','ء'])){
        m=1;   // Line 283
        k.KDC(2,t);
        k.KO(-1,t,"َأ");
      }
      else if(k.KFCM(2,t,['ِ','ء'])){
        m=1;   // Line 284
        k.KDC(2,t);
        k.KO(-1,t,"ِئ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'َ'])){
        m=1;   // Line 375
        k.KDC(1,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ُ'])){
        m=1;   // Line 376
        k.KDC(1,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ِ'])){
        m=1;   // Line 377
        k.KDC(1,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,[' ','َ'])){
        m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t," أ");
      }
      else if(k.KFCM(2,t,[' ','ُ'])){
        m=1;   // Line 380
        k.KDC(2,t);
        k.KO(-1,t," أُ");
      }
      else if(k.KFCM(2,t,[' ','ِ'])){
        m=1;   // Line 381
        k.KDC(2,t);
        k.KO(-1,t," إ");
      }
      else if(k.KFCM(2,t,['أ','ِ'])){
        m=1;   // Line 386
        k.KDC(2,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,['إ','َ'])){
        m=1;   // Line 387
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['إ','ُ'])){
        m=1;   // Line 390
        k.KDC(2,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(2,t,['أ','ْ'])){
        m=1;   // Line 395
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['ت','ْ'])){
        m=1;   // Line 460
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,['ه','ْ'])){
        m=1;   // Line 461
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_30},'/'])){
        m=1;   // Line 552
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_29,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_30},'؛'])){
        m=1;   // Line 553
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_29,1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_ArabicSymbols_33},])&&this.s_LatinSymbolsOpt_32===this.s63){
        m=1;   // Line 579
        k.KDC(1,t);
        k.KIO(-1,this.s_LatinSymbols_34,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_a_rot1_37},'/'])){
        m=1;   // Line 616
        k.KDC(2,t);
        k.KIO(-1,this.s_a_rot2_38,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_d_rot1_39},'/'])){
        m=1;   // Line 617
        k.KDC(2,t);
        k.KIO(-1,this.s_d_rot2_40,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_h_rot1_41},'/'])){
        m=1;   // Line 618
        k.KDC(2,t);
        k.KIO(-1,this.s_h_rot2_42,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_s_rot1_43},'/'])){
        m=1;   // Line 619
        k.KDC(2,t);
        k.KIO(-1,this.s_s_rot2_44,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_t_rot1_45},'/'])){
        m=1;   // Line 620
        k.KDC(2,t);
        k.KIO(-1,this.s_t_rot2_46,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_tashkeel_47},{t:'a',a:this.s_tashkeel_47}])){
        m=1;   // Line 628
        k.KDC(2,t);
        k.KIO(-1,this.s_tashkeel_47,2,t);
      }
      else if(k.KFCM(1,t,[';'])){
        m=1;   // Line 545
        k.KDC(1,t);
        k.KO(-1,t,"؛");
      }
      else if(k.KFCM(1,t,['?'])){
        m=1;   // Line 546
        k.KDC(1,t);
        k.KO(-1,t,"؟");
      }
      else if(k.KFCM(1,t,[','])){
        m=1;   // Line 547
        k.KDC(1,t);
        k.KO(-1,t,"،");
      }
    return r;
  };
}
