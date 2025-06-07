if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_arabiyy());
}
function Keyboard_arabiyy()
{
  var modCodes = KeymanWeb.Codes.modifierCodes;
  var keyCodes = KeymanWeb.Codes.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_arabiyy";
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
  this.s_tanween_13=" ً ٍ ٌ ";
  this.s_diacritic_14="َُِّ";
  this.s_FathaVariant_15="َأا ";
  this.s_thing_16="ةًٌٍَُِّأءاويذظخحضصىطمنبثشزلكجهغفدسعترق";
  this.s_digitkey_19="0123456789";
  this.s_digit_20="٠١٢٣٤٥٦٧٨٩";
  this.s_NumOpt_21=KeymanWeb.KLOAD(this.KI,"NumOpt","0");
  this.s_HotkeyTrigger_22="/\\";
  this.s_QuranSymbols1_23="ۚۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜ";
  this.s_QuranSymbols2_24="ۖۗۙۛ۞۝۩ۣۡۢۤۥۦۧۨۘۖۜۚ";
  this.s_harf_25=["ب","ف","و","ك","أ",''];
  this.s_WordEnding_26=" ،؛:!.؟";
  this.s_Punc_rot1_27="؛:؟!";
  this.s_Punc_rot2_28="!؛:؟";
  this.s_1stChar_29="دتسضك";
  this.s_2ndChar_30="ذثشظخ";
  this.s_a_rot1_31="َاآأٰىع";
  this.s_a_rot2_32="اآأٰىعَ";
  this.s_d_rot1_33="دذضظ";
  this.s_d_rot2_34="ذضظد";
  this.s_h_rot1_35="حخه";
  this.s_h_rot2_36="خهح";
  this.s_s_rot1_37="سصش";
  this.s_s_rot2_38="صشس";
  this.s_t_rot1_39="تةطث";
  this.s_t_rot2_40="ةطثت";
  this.s_tashkeel_41="َُِ";
  this.s44="0";
  this.s45="1";
  this.s46="1";
  this.s47="0";
  this.s48="1";
  this.KVER="17.0.335.0";
  this.KVS=['s_NumOpt_21'];
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
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PGUP /* 0x21 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PGDN /* 0x22 */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_END /* 0x23 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HOME /* 0x24 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LEFT /* 0x25 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_UP /* 0x26 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RIGHT /* 0x27 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_DOWN /* 0x28 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SEL /* 0x29 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
      else if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PRINT /* 0x2A */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EXEC /* 0x2B */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x2C)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_DEL /* 0x2E */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HELP /* 0x2F */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"ء");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"خ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3A)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x3B)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3C)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x3D)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3E)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x3F)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x40)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"َ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"ض");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"ِ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"ُ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x5C)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"ۚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x5E)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP0 /* 0x60 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP1 /* 0x61 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"َ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP2 /* 0x62 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"ب");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP3 /* 0x63 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP4 /* 0x64 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"د");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP5 /* 0x65 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP6 /* 0x66 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"ف");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP7 /* 0x67 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"غ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP8 /* 0x68 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"ه");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP9 /* 0x69 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSTAR /* 0x6A */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"ج");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPPLUS /* 0x6B */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"ك");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SEPARATOR /* 0x6C */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"ل");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPMINUS /* 0x6D */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"م");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPDOT /* 0x6E */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"ن");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSLASH /* 0x6F */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F1 /* 0x70 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F2 /* 0x71 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F3 /* 0x72 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"ر");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F4 /* 0x73 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"س");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F5 /* 0x74 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"ت");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F6 /* 0x75 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F7 /* 0x76 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"ى");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F8 /* 0x77 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F9 /* 0x78 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"ش");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F10 /* 0x79 */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"ي");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F11 /* 0x7A */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"ز");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x7C)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0xB0)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"°");
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
      if(k.KFCM(10,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 211
        k.KDC(10,t);
        k.KO(-1,t,"بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيم");
      }
      else if(k.KFCM(9,t,['ب','ِ','س','م','ِ','ل','ّ','َ','ه'])){
        m=1;   // Line 210
        k.KDC(9,t);
        k.KO(-1,t,"بِسمِ اللَّه");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','َ','ذ','َ','ي','ن'])){
        m=1;   // Line 439
        k.KDC(8,t);
        k.KO(-1,t,"اللَّذَين");
      }
      else if(k.KFCM(8,t,['ا','ل','ل','َ','ت','َ','ي','ن'])){
        m=1;   // Line 441
        k.KDC(8,t);
        k.KO(-1,t,"اللَّتَين");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ت','ِ','ِ'])){
        m=1;   // Line 434
        k.KDC(7,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ذ','ِ','ِ'])){
        m=1;   // Line 436
        k.KDC(7,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ذ','ا','ن'])){
        m=1;   // Line 438
        k.KDC(7,t);
        k.KO(-1,t,"اللَّذان");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','َ','ت','ا','ن'])){
        m=1;   // Line 440
        k.KDC(7,t);
        k.KO(-1,t,"اللَّتان");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ا','ت','ِ','ِ'])){
        m=1;   // Line 444
        k.KDC(7,t);
        k.KO(-1,t,"اللّاتي");
      }
      else if(k.KFCM(7,t,['ا','ل','ل','ا','ء','ِ','ِ'])){
        m=1;   // Line 446
        k.KDC(7,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(7,t,['ه','ا','ؤ','ُ','ل','ا','ء'])){
        m=1;   // Line 449
        k.KDC(7,t);
        k.KO(-1,t,"هَـٰؤُلاء");
      }
      else if(k.KFCM(7,t,['أ','و','ل','ا','ء','ِ','ك'])){
        m=1;   // Line 450
        k.KDC(7,t);
        k.KO(-1,t,"أولَـٰئِك");
      }
      else if(k.KFCM(5,t,['/','/','ر','ق','م',])&&this.s_NumOpt_21===this.s44){
        m=1;   // Line 183
        k.KDC(5,t);
        this.s_NumOpt_21=this.s45;
        k.KSAVE("NumOpt",this.s_NumOpt_21);
      }
      else if(k.KFCM(5,t,['/','/','ر','ق','م',])&&this.s_NumOpt_21===this.s46){
        m=1;   // Line 184
        k.KDC(5,t);
        this.s_NumOpt_21=this.s47;
        k.KSAVE("NumOpt",this.s_NumOpt_21);
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_harf_25},'َ','ل',{t:'a',a:this.s_diacritic_14},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 293
        k.KDC(6,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"َل");
        k.KIO(-1,this.s_diacritic_14,4,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,6,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(6,t,[{t:'n'},{t:'a',a:this.s_harf_25},{t:'a',a:this.s_diacritic_14},'ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 412
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_25,2,t);
        k.KO(-1,t,"لا");
        k.KO(-1,t,"َ");
      }
      else if(k.KFCM(6,t,[' ',{t:'a',a:this.s_harf_25},{t:'a',a:this.s_diacritic_14},'ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 413
        k.KDC(6,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_25,2,t);
        k.KIO(-1,this.s_diacritic_14,3,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_26,6,t);
      }
      else if(k.KFCM(6,t,['ا','ل','ل','َ','ت','ي'])){
        m=1;   // Line 433
        k.KDC(6,t);
        k.KO(-1,t,"الَّتي");
      }
      else if(k.KFCM(6,t,['ا','ل','ل','َ','ذ','ي'])){
        m=1;   // Line 435
        k.KDC(6,t);
        k.KO(-1,t,"الَّذي");
      }
      else if(k.KFCM(6,t,['ا','ل','ل','ا','ت','ي'])){
        m=1;   // Line 443
        k.KDC(6,t);
        k.KO(-1,t,"اللّاتي");
      }
      else if(k.KFCM(6,t,['ا','ل','ل','ا','ء','ي'])){
        m=1;   // Line 445
        k.KDC(6,t);
        k.KO(-1,t,"اللّائي");
      }
      else if(k.KFCM(5,t,['/','/','ر','ق','م'])){
        m=1;   // Line 182
        k.KDC(5,t);
      }
      else if(k.KFCM(5,t,['َ','ل','ّ','َ','ه'])){
        m=1;   // Line 205
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['أ','ل','ّ','َ','ه'])){
        m=1;   // Line 206
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['ا','ل','ّ','َ','ه'])){
        m=1;   // Line 207
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,['ا','ل','ل','َ','ه'])){
        m=1;   // Line 208
        k.KDC(5,t);
        k.KO(-1,t,"اللَّه");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_HotkeyTrigger_22},'أ','ز','و','ج'])){
        m=1;   // Line 214
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_HotkeyTrigger_22},'َ','ز','و','ج'])){
        m=1;   // Line 215
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ع','ز','و','ج'])){
        m=1;   // Line 216
        k.KDC(5,t);
        k.KO(-1,t,"عَزَّ وَجَلّ");
      }
      else if(k.KFCM(5,t,['ا','ل','أ','ُ','ُ'])){
        m=1;   // Line 247
        k.KDC(5,t);
        k.KO(-1,t,"الأو");
      }
      else if(k.KFCM(5,t,[{t:'n'},'ل',{t:'a',a:this.s_diacritic_14},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 289
        k.KDC(4,t);
        k.KO(-1,t,"ل");
        k.KO(-1,t,"لل");
        k.KO(-1,t,"ّْ");
      }
      else if(k.KFCM(5,t,[' ','ل',{t:'a',a:this.s_diacritic_14},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 291
        k.KDC(5,t);
        k.KO(-1,t," ل");
        k.KIO(-1,this.s_diacritic_14,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_25},'ل',{t:'a',a:this.s_diacritic_14},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 292
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_diacritic_14,3,t);
        k.KO(-1,t,"ل");
        k.KIO(-1,this.s_cons_11,5,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','َ'])){
        m=1;   // Line 305
        k.KDC(5,t);
        k.KO(-1,t,"لِلأ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','َ'])){
        m=1;   // Line 306
        k.KDC(5,t);
        k.KO(-1,t,"لَلأ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ُ'])){
        m=1;   // Line 308
        k.KDC(5,t);
        k.KO(-1,t,"لِلأُ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ُ'])){
        m=1;   // Line 309
        k.KDC(5,t);
        k.KO(-1,t,"لَلأُ");
      }
      else if(k.KFCM(5,t,['ل','ِ','ل','ء','ِ'])){
        m=1;   // Line 311
        k.KDC(5,t);
        k.KO(-1,t,"لِلإ");
      }
      else if(k.KFCM(5,t,['ل','َ','ل','ء','ِ'])){
        m=1;   // Line 312
        k.KDC(5,t);
        k.KO(-1,t,"لَلإ");
      }
      else if(k.KFCM(5,t,['ب','ِ','ل','ّ','ل'])){
        m=1;   // Line 314
        k.KDC(5,t);
        k.KO(-1,t,"بِاللّ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_25},'َ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 322
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_25,2,t);
        k.KO(-1,t,"ا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_25},'َ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 323
        k.KDC(4,t);
        k.KO(-1,t,"ا");
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_25},'ِ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 324
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_25,2,t);
        k.KO(-1,t,"ِا");
        k.KIO(-1,this.s_cons_11,5,t);
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_25},'ِ','ّ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 325
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_25,2,t);
        k.KO(-1,t,"ا");
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(5,t,['ت','َ','ن','ّ','ْ'])){
        m=1;   // Line 381
        k.KDC(5,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(5,t,['ت','ُ','ن','ّ','ْ'])){
        m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"ةٌ");
      }
      else if(k.KFCM(5,t,['ت','ِ','ن','ّ','ْ'])){
        m=1;   // Line 383
        k.KDC(5,t);
        k.KO(-1,t,"ةٍ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_11},'ّ','َ','ن','ْ'])){
        m=1;   // Line 396
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_cons_11},'ّ','َ','ْ','ن'])){
        m=1;   // Line 398
        k.KDC(5,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًّا");
      }
      else if(k.KFCM(5,t,['و','ّ','َ','ن','ْ'])){
        m=1;   // Line 403
        k.KDC(5,t);
        k.KO(-1,t,"وًّا");
      }
      else if(k.KFCM(5,t,['ي','ّ','َ','ن','ْ'])){
        m=1;   // Line 404
        k.KDC(5,t);
        k.KO(-1,t,"يًّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},{t:'a',a:this.s_harf_25},'ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 410
        k.KDC(4,t);
        k.KO(-1,t,"لا");
        k.KO(-1,t,"َ");
      }
      else if(k.KFCM(5,t,[' ',{t:'a',a:this.s_harf_25},'ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 411
        k.KDC(5,t);
        k.KO(-1,t," ");
        k.KIO(-1,this.s_harf_25,2,t);
        k.KO(-1,t,"لا");
        k.KIO(-1,this.s_WordEnding_26,5,t);
      }
      else if(k.KFCM(5,t,['إ','ل','ّ','َ',' '])){
        m=1;   // Line 415
        k.KDC(5,t);
        k.KO(-1,t,"إلّا ");
      }
      else if(k.KFCM(5,t,['و','ِ','ل','ّ','َ'])){
        m=1;   // Line 416
        k.KDC(5,t);
        k.KO(-1,t,"وإلّا");
      }
      else if(k.KFCM(5,t,[{t:'n'},'ف','ّ','ِ',' '])){
        m=1;   // Line 421
        k.KDC(4,t);
        k.KO(-1,t,"فَفي ");
      }
      else if(k.KFCM(5,t,[' ','ف','ّ','ِ',' '])){
        m=1;   // Line 422
        k.KDC(5,t);
        k.KO(-1,t," فَفي ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_25},{t:'a',a:this.s_diacritic_14},'ف','ِ',' '])){
        m=1;   // Line 424
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KIO(-1,this.s_diacritic_14,2,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_harf_25},{t:'a',a:this.s_diacritic_14},'م','َ',' '])){
        m=1;   // Line 430
        k.KDC(5,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KIO(-1,this.s_diacritic_14,2,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,['َ',' ','ن','ْ'])){
        m=1;   // Line 191
        k.KDC(4,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(4,t,['ُ',' ','ن','ْ'])){
        m=1;   // Line 192
        k.KDC(4,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(4,t,['ِ',' ','ن','ْ'])){
        m=1;   // Line 193
        k.KDC(4,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(4,t,['ط','ت','ّ','ت'])){
        m=1;   // Line 198
        k.KDC(4,t);
        k.KO(-1,t,"طّ");
      }
      else if(k.KFCM(4,t,['ص','س','ّ','س'])){
        m=1;   // Line 199
        k.KDC(4,t);
        k.KO(-1,t,"صّ");
      }
      else if(k.KFCM(4,t,['ض','د','ّ','د'])){
        m=1;   // Line 200
        k.KDC(4,t);
        k.KO(-1,t,"ضّ");
      }
      else if(k.KFCM(4,t,['خ','ك','ّ','ك'])){
        m=1;   // Line 201
        k.KDC(4,t);
        k.KO(-1,t,"خّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_HotkeyTrigger_22},'س','و','ت'])){
        m=1;   // Line 212
        k.KDC(4,t);
        k.KO(-1,t,"سُبحَانَهُ وَتَعَالَىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ت','و','ت'])){
        m=1;   // Line 213
        k.KDC(4,t);
        k.KO(-1,t,"تَبَارَكَ وَتَعَالَىٰ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ص','َ','و'])){
        m=1;   // Line 219
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى ٱللَّٰهُ عَلَيهِۦ وَسَلَّمَ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_HotkeyTrigger_22},'س','َ','و'])){
        m=1;   // Line 220
        k.KDC(4,t);
        k.KO(-1,t,"صَلَّى ٱللَّٰهُ عَلَيهِۦ وَسَلَّمَ");
      }
      else if(k.KFCM(4,t,['َ','ة',{t:'a',a:this.s_diacritic_14},' '])){
        m=1;   // Line 240
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_14,3,t);
        k.KO(-1,t," ");
      }
      else if(k.KFCM(4,t,['َ','ة',{t:'a',a:this.s_tanween_13},' '])){
        m=1;   // Line 241
        k.KDC(4,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_13,3,t);
        k.KO(-1,t," ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'أ','ُ','ُ'])){
        m=1;   // Line 246
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(4,t,['أ','ل','ّ','ْ'])){
        m=1;   // Line 259
        k.KDC(4,t);
        k.KO(-1,t,"الـ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_15},'ل','ْ','َ'])){
        m=1;   // Line 282
        k.KDC(4,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_15},'ل','ْ','ُ'])){
        m=1;   // Line 283
        k.KDC(4,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_FathaVariant_15},'ل','ْ','ِ'])){
        m=1;   // Line 284
        k.KDC(4,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'ل','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 288
        k.KDC(3,t);
        k.KO(-1,t,"لل");
        k.KO(-1,t,"ّْ");
      }
      else if(k.KFCM(4,t,[' ','ل','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 290
        k.KDC(4,t);
        k.KO(-1,t," لل");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_25},'َ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 298
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_25},'ِ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 299
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"ِال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[' ',{t:'a',a:this.s_cons_11},'ّ',{t:'a',a:this.s_diacritic_14}])){
        m=1;   // Line 301
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,2,t);
        k.KO(-1,t,"ّ");
        k.KIO(-1,this.s_diacritic_14,4,t);
      }
      else if(k.KFCM(4,t,['ا','ل','ّ','ل'])){
        m=1;   // Line 315
        k.KDC(4,t);
        k.KO(-1,t,"اللّ");
      }
      else if(k.KFCM(4,t,['ب','ِ','ل','ْ'])){
        m=1;   // Line 317
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
      }
      else if(k.KFCM(4,t,['ب','ِ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"بِال");
        k.KIO(-1,this.s_cons_11,4,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 349
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KO(-1,t,"ل");
      }
      else if(k.KFCM(4,t,[{t:'n'},'أ','ل',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 350
        k.KDC(3,t);
        k.KO(-1,t,"ال");
        k.KO(-1,t,"ل");
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 351
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,4,t);
      }
      else if(k.KFCM(4,t,[' ','أ','ل',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 352
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_vowel_12,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_cons_11},{t:'a',a:this.s_diacritic_14}])){
        m=1;   // Line 354
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KIO(-1,this.s_diacritic_14,4,t);
      }
      else if(k.KFCM(4,t,[' ','ل',{t:'a',a:this.s_vowel_12},{t:'a',a:this.s_diacritic_14}])){
        m=1;   // Line 355
        k.KDC(4,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_vowel_12,3,t);
        k.KIO(-1,this.s_diacritic_14,4,t);
      }
      else if(k.KFCM(4,t,['ؤ','ُ','و','ْ'])){
        m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"ؤوا");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},{t:'a',a:this.s_diacritic_14},'و','ْ'])){
        m=1;   // Line 365
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"وا");
      }
      else if(k.KFCM(4,t,['ت','َ','ن','ْ'])){
        m=1;   // Line 385
        k.KDC(4,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(4,t,['ت','ً','ا','ْ'])){
        m=1;   // Line 386
        k.KDC(4,t);
        k.KO(-1,t,"ةً");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'َ','ن','ْ'])){
        m=1;   // Line 395
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_cons_11},'َ','ْ','ن'])){
        m=1;   // Line 397
        k.KDC(4,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(4,t,['ئ','َ','ن','ْ'])){
        m=1;   // Line 400
        k.KDC(4,t);
        k.KO(-1,t,"ئًا");
      }
      else if(k.KFCM(4,t,['و','َ','ن','ْ'])){
        m=1;   // Line 401
        k.KDC(4,t);
        k.KO(-1,t,"وًا");
      }
      else if(k.KFCM(4,t,['ي','َ','ن','ْ'])){
        m=1;   // Line 402
        k.KDC(4,t);
        k.KO(-1,t,"يًا");
      }
      if(m) {}
      else if(k.KFCM(4,t,[{t:'n'},'ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 408
        k.KDC(3,t);
        k.KO(-1,t,"لا");
        k.KO(-1,t,"َ");
      }
      else if(k.KFCM(4,t,[' ','ل','َ',{t:'a',a:this.s_WordEnding_26}])){
        m=1;   // Line 409
        k.KDC(4,t);
        k.KO(-1,t," لا");
        k.KIO(-1,this.s_WordEnding_26,4,t);
      }
      else if(k.KFCM(4,t,[{t:'n'},'ف','ِ',' '])){
        m=1;   // Line 419
        k.KDC(3,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(4,t,[' ','ف','ِ',' '])){
        m=1;   // Line 420
        k.KDC(4,t);
        k.KO(-1,t," في ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_25},'ف','ِ',' '])){
        m=1;   // Line 423
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"في ");
      }
      else if(k.KFCM(4,t,[{t:'n'},'م','َ',' '])){
        m=1;   // Line 427
        k.KDC(3,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,[' ','م','َ',' '])){
        m=1;   // Line 428
        k.KDC(4,t);
        k.KO(-1,t," ما ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_harf_25},'م','َ',' '])){
        m=1;   // Line 429
        k.KDC(4,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"ما ");
      }
      else if(k.KFCM(4,t,['ً','ا',' ',' '])){
        m=1;   // Line 466
        k.KDC(4,t);
        k.KO(-1,t,"ا. ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_1stChar_29},{t:'a',a:this.s_diacritic_14},'ه','ه'])){
        m=1;   // Line 479
        k.KDC(4,t);
        k.KIO(-1,this.s_2ndChar_30,1,t);
        k.KIO(-1,this.s_diacritic_14,2,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_2ndChar_30},{t:'i',i:this.s_1stChar_29,o:1},'ه','ه'])){
        m=1;   // Line 480
        k.KDC(4,t);
        k.KIO(-1,this.s_2ndChar_30,1,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ج','ج'])){
        m=1;   // Line 217
        k.KDC(3,t);
        k.KO(-1,t,"جَلَّ جَلَالُه");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_HotkeyTrigger_22},'ر','َ'])){
        m=1;   // Line 222
        k.KDC(3,t);
        k.KO(-1,t,"رَضِيَ ٱللَّٰهُ عَنهُ");
      }
      else if(k.KFCM(3,t,['أ','َ','َ'])){
        m=1;   // Line 232
        k.KDC(3,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 233
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_cons_11,3,t);
      }
      else if(k.KFCM(3,t,['أ','َ',{t:'a',a:this.s_vowel_12}])){
        m=1;   // Line 234
        k.KDC(3,t);
        k.KO(-1,t,"أ");
        k.KIO(-1,this.s_vowel_12,3,t);
      }
      else if(k.KFCM(3,t,['َ','ة',' '])){
        m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"ة ");
      }
      else if(k.KFCM(3,t,['و','ُ','ُ'])){
        m=1;   // Line 244
        k.KDC(3,t);
        k.KO(-1,t,"ُؤ");
      }
      else if(k.KFCM(3,t,['ء','ُ','ُ'])){
        m=1;   // Line 245
        k.KDC(3,t);
        k.KO(-1,t,"ؤُ");
      }
      else if(k.KFCM(3,t,['ي','ِ','ِ'])){
        m=1;   // Line 250
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ','ْ'])){
        m=1;   // Line 253
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(3,t,[' ','ْ','ْ'])){
        m=1;   // Line 254
        k.KDC(3,t);
        k.KO(-1,t," ا");
      }
      else if(k.KFCM(3,t,['ئ','ْ','َ'])){
        m=1;   // Line 267
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','َ','ْ'])){
        m=1;   // Line 268
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ؤ','َ','ْ'])){
        m=1;   // Line 269
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ؤ','ْ','َ'])){
        m=1;   // Line 270
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ئ','ْ','ِ'])){
        m=1;   // Line 272
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ئ','ِ','ْ'])){
        m=1;   // Line 273
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'n'},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 295
        k.KDC(2,t);
        k.KO(-1,t,"ال");
        k.KO(-1,t,"ّْ");
      }
      else if(k.KFCM(3,t,[' ','ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 296
        k.KDC(3,t);
        k.KO(-1,t," ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_harf_25},'ْ',{t:'a',a:this.s_cons_11}])){
        m=1;   // Line 297
        k.KDC(3,t);
        k.KIO(-1,this.s_harf_25,1,t);
        k.KO(-1,t,"ال");
        k.KIO(-1,this.s_cons_11,3,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(3,t,['ل','ء','َ'])){
        m=1;   // Line 304
        k.KDC(3,t);
        k.KO(-1,t,"الأ");
      }
      else if(k.KFCM(3,t,['ل','ء','ُ'])){
        m=1;   // Line 307
        k.KDC(3,t);
        k.KO(-1,t,"الأُ");
      }
      else if(k.KFCM(3,t,['ل','ء','ِ'])){
        m=1;   // Line 310
        k.KDC(3,t);
        k.KO(-1,t,"الإ");
      }
      else if(k.KFCM(3,t,['و','َ','ُ'])){
        m=1;   // Line 334
        k.KDC(3,t);
        k.KO(-1,t,"وَأُ");
      }
      else if(k.KFCM(3,t,['و','َ','ِ'])){
        m=1;   // Line 335
        k.KDC(3,t);
        k.KO(-1,t,"وَإ");
      }
      else if(k.KFCM(3,t,['أ','ُ','ِ'])){
        m=1;   // Line 337
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,['ء','َ','َ'])){
        m=1;   // Line 340
        k.KDC(3,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(3,t,['ء','ِ','ِ'])){
        m=1;   // Line 343
        k.KDC(3,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_11},'و','ْ'])){
        m=1;   // Line 361
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"وا");
      }
      else if(k.KFCM(3,t,['ء','و','ْ'])){
        m=1;   // Line 362
        k.KDC(3,t);
        k.KO(-1,t,"ءوا");
      }
      else if(k.KFCM(3,t,['ؤ','و','ْ'])){
        m=1;   // Line 363
        k.KDC(3,t);
        k.KO(-1,t,"ؤوا");
      }
      else if(k.KFCM(3,t,['َ','ن','ْ'])){
        m=1;   // Line 368
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ن','ْ'])){
        m=1;   // Line 369
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ن','ْ'])){
        m=1;   // Line 370
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,['َ','ْ','ن'])){
        m=1;   // Line 372
        k.KDC(3,t);
        k.KO(-1,t,"ً");
      }
      else if(k.KFCM(3,t,['ُ','ْ','ن'])){
        m=1;   // Line 373
        k.KDC(3,t);
        k.KO(-1,t,"ٌ");
      }
      else if(k.KFCM(3,t,['ِ','ْ','ن'])){
        m=1;   // Line 374
        k.KDC(3,t);
        k.KO(-1,t,"ٍ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_cons_11},'ا','ً'])){
        m=1;   // Line 376
        k.KDC(3,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ًا");
      }
      else if(k.KFCM(3,t,['ي','ا','ً'])){
        m=1;   // Line 377
        k.KDC(3,t);
        k.KO(-1,t,"يًا");
      }
      else if(k.KFCM(3,t,['و','ا','ً'])){
        m=1;   // Line 378
        k.KDC(3,t);
        k.KO(-1,t,"وًا");
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_diacritic_14},'ْ'])){
        m=1;   // Line 388
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_diacritic_14,2,t);
      }
      else if(k.KFCM(3,t,['ت',{t:'a',a:this.s_tanween_13},'ْ'])){
        m=1;   // Line 389
        k.KDC(3,t);
        k.KO(-1,t,"ة");
        k.KIO(-1,this.s_tanween_13,2,t);
      }
      else if(k.KFCM(3,t,['ت','ً','ْ'])){
        m=1;   // Line 399
        k.KDC(3,t);
        k.KO(-1,t,"تًا");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_tanween_13},' ',' '])){
        m=1;   // Line 465
        k.KDC(3,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_diacritic_14},' ',' '])){
        m=1;   // Line 467
        k.KDC(3,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_thing_16},' ',' '])){
        m=1;   // Line 468
        k.KDC(3,t);
        k.KIO(-1,this.s_thing_16,1,t);
        k.KO(-1,t,". ");
      }
      else if(k.KFCM(3,t,['.',' ','َ'])){
        m=1;   // Line 469
        k.KDC(3,t);
        k.KO(-1,t,"، أ");
      }
      else if(k.KFCM(3,t,['.',' ','ُ'])){
        m=1;   // Line 470
        k.KDC(3,t);
        k.KO(-1,t,"، أُ");
      }
      else if(k.KFCM(3,t,['.',' ','ِ'])){
        m=1;   // Line 471
        k.KDC(3,t);
        k.KO(-1,t,"، إ");
      }
      else if(k.KFCM(3,t,['.',' ','ْ'])){
        m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"، ْ");
      }
      else if(k.KFCM(3,t,['.',' ',{t:'a',a:this.s_thing_16}])){
        m=1;   // Line 473
        k.KDC(3,t);
        k.KO(-1,t,"، ");
        k.KIO(-1,this.s_thing_16,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_1stChar_29},'ه','ه'])){
        m=1;   // Line 478
        k.KDC(3,t);
        k.KIO(-1,this.s_2ndChar_30,1,t);
      }
      else if(k.KFCM(3,t,['ت','ّ','ت'])){
        m=1;   // Line 481
        k.KDC(3,t);
        k.KO(-1,t,"ط");
      }
      else if(k.KFCM(3,t,['س','ّ','س'])){
        m=1;   // Line 482
        k.KDC(3,t);
        k.KO(-1,t,"ص");
      }
      else if(k.KFCM(3,t,['د','ّ','د'])){
        m=1;   // Line 483
        k.KDC(3,t);
        k.KO(-1,t,"ض");
      }
      else if(k.KFCM(3,t,['ك','ّ','ك'])){
        m=1;   // Line 484
        k.KDC(3,t);
        k.KO(-1,t,"خ");
      }
      else if(k.KFCM(3,t,['ض','ّ','ض'])){
        m=1;   // Line 485
        k.KDC(3,t);
        k.KO(-1,t,"ظ");
      }
      else if(k.KFCM(3,t,['ه','ّ','ه'])){
        m=1;   // Line 486
        k.KDC(3,t);
        k.KO(-1,t,"ح");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_digitkey_19},])&&this.s_NumOpt_21===this.s48){
        m=1;   // Line 186
        k.KDC(1,t);
        k.KIO(-1,this.s_digit_20,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_cons_11},{t:'i',i:this.s_cons_11,o:1}])){
        m=1;   // Line 189
        k.KDC(2,t);
        k.KIO(-1,this.s_cons_11,1,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(2,t,['و','و'])){
        m=1;   // Line 195
        k.KDC(2,t);
        k.KO(-1,t,"وّ");
      }
      else if(k.KFCM(2,t,['ي','ي'])){
        m=1;   // Line 196
        k.KDC(2,t);
        k.KO(-1,t,"يّ");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_23},'/'])){
        m=1;   // Line 226
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_24,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_QuranSymbols1_23},'ۚ'])){
        m=1;   // Line 227
        k.KDC(2,t);
        k.KIO(-1,this.s_QuranSymbols2_24,1,t);
      }
      else if(k.KFCM(2,t,['َ','َ'])){
        m=1;   // Line 230
        k.KDC(2,t);
        k.KO(-1,t,"ا");
      }
      else if(k.KFCM(2,t,['ا','َ'])){
        m=1;   // Line 231
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['ى','َ'])){
        m=1;   // Line 235
        k.KDC(2,t);
        k.KO(-1,t,"ٰ");
      }
      else if(k.KFCM(2,t,['ٰ','َ'])){
        m=1;   // Line 236
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['َ','ى'])){
        m=1;   // Line 238
        k.KDC(2,t);
        k.KO(-1,t,"ى");
      }
      else if(k.KFCM(2,t,['ُ','ُ'])){
        m=1;   // Line 243
        k.KDC(2,t);
        k.KO(-1,t,"و");
      }
      else if(k.KFCM(2,t,['ِ','ِ'])){
        m=1;   // Line 249
        k.KDC(2,t);
        k.KO(-1,t,"ي");
      }
      else if(k.KFCM(2,t,['ا','ِ'])){
        m=1;   // Line 251
        k.KDC(2,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,['ْ','ْ'])){
        m=1;   // Line 255
        k.KDC(2,t);
        k.KO(-1,t,"ّ");
      }
      else if(k.KFCM(2,t,['ّ','ْ'])){
        m=1;   // Line 256
        k.KDC(2,t);
        k.KO(-1,t,"ٓ");
      }
      else if(k.KFCM(2,t,['ٓ','ْ'])){
        m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"ـ");
      }
      else if(k.KFCM(2,t,['ـ','ْ'])){
        m=1;   // Line 258
        k.KDC(2,t);
        k.KO(-1,t,"ــ");
      }
      else if(k.KFCM(2,t,['ء','ء'])){
        m=1;   // Line 261
        k.KDC(2,t);
        k.KO(-1,t,"ئ");
      }
      else if(k.KFCM(2,t,['أ','ء'])){
        m=1;   // Line 262
        k.KDC(2,t);
        k.KO(-1,t,"ئ");
      }
      else if(k.KFCM(2,t,['ُ','ء'])){
        m=1;   // Line 263
        k.KDC(2,t);
        k.KO(-1,t,"ُؤ");
      }
      else if(k.KFCM(2,t,['َ','ء'])){
        m=1;   // Line 264
        k.KDC(2,t);
        k.KO(-1,t,"َأ");
      }
      else if(k.KFCM(2,t,['ِ','ء'])){
        m=1;   // Line 265
        k.KDC(2,t);
        k.KO(-1,t,"ِئ");
      }
      else if(k.KFCM(2,t,['\'','\''])){
        m=1;   // Line 275
        k.KDC(2,t);
        k.KO(-1,t,"\"");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ُ'])){
        m=1;   // Line 328
        k.KDC(1,t);
        k.KO(-1,t,"أُ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'َ'])){
        m=1;   // Line 329
        k.KDC(1,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,[{t:'n'},'ِ'])){
        m=1;   // Line 330
        k.KDC(1,t);
        k.KO(-1,t,"إ");
      }
      else if(k.KFCM(2,t,[' ','ُ'])){
        m=1;   // Line 331
        k.KDC(2,t);
        k.KO(-1,t," أُ");
      }
      else if(k.KFCM(2,t,[' ','َ'])){
        m=1;   // Line 332
        k.KDC(2,t);
        k.KO(-1,t," أ");
      }
      else if(k.KFCM(2,t,[' ','ِ'])){
        m=1;   // Line 333
        k.KDC(2,t);
        k.KO(-1,t," إ");
      }
      else if(k.KFCM(2,t,['أ','ِ'])){
        m=1;   // Line 338
        k.KDC(2,t);
        k.KO(-1,t,"إ");
      }
      if(m) {}
      else if(k.KFCM(2,t,['إ','َ'])){
        m=1;   // Line 339
        k.KDC(2,t);
        k.KO(-1,t,"أ");
      }
      else if(k.KFCM(2,t,['أ','ْ'])){
        m=1;   // Line 341
        k.KDC(2,t);
        k.KO(-1,t,"آ");
      }
      else if(k.KFCM(2,t,['ت','ْ'])){
        m=1;   // Line 391
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,['ه','ْ'])){
        m=1;   // Line 392
        k.KDC(2,t);
        k.KO(-1,t,"ة");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_28},'/'])){
        m=1;   // Line 462
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_27,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_Punc_rot2_28},'؛'])){
        m=1;   // Line 463
        k.KDC(2,t);
        k.KIO(-1,this.s_Punc_rot1_27,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_a_rot1_31},'/'])){
        m=1;   // Line 503
        k.KDC(2,t);
        k.KIO(-1,this.s_a_rot2_32,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_d_rot1_33},'/'])){
        m=1;   // Line 504
        k.KDC(2,t);
        k.KIO(-1,this.s_d_rot2_34,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_h_rot1_35},'/'])){
        m=1;   // Line 505
        k.KDC(2,t);
        k.KIO(-1,this.s_h_rot2_36,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_s_rot1_37},'/'])){
        m=1;   // Line 506
        k.KDC(2,t);
        k.KIO(-1,this.s_s_rot2_38,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_t_rot1_39},'/'])){
        m=1;   // Line 507
        k.KDC(2,t);
        k.KIO(-1,this.s_t_rot2_40,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_tashkeel_41},{t:'a',a:this.s_tashkeel_41}])){
        m=1;   // Line 515
        k.KDC(2,t);
        k.KIO(-1,this.s_tashkeel_41,2,t);
      }
      else if(k.KFCM(1,t,[';'])){
        m=1;   // Line 455
        k.KDC(1,t);
        k.KO(-1,t,"؛");
      }
      else if(k.KFCM(1,t,['?'])){
        m=1;   // Line 456
        k.KDC(1,t);
        k.KO(-1,t,"؟");
      }
      else if(k.KFCM(1,t,[','])){
        m=1;   // Line 457
        k.KDC(1,t);
        k.KO(-1,t,"،");
      }
    return r;
  };
}
