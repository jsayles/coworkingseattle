// Created by iWeb 3.0.4 local-build-20110805

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,146),url:'Join_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Join_files/stroke_1.png'},{rect:new IWRect(5,-5,667,10),url:'Join_files/stroke_2.png'},{rect:new IWRect(672,-5,10,10),url:'Join_files/stroke_3.png'},{rect:new IWRect(672,5,10,146),url:'Join_files/stroke_4.png'},{rect:new IWRect(672,151,10,11),url:'Join_files/stroke_5.png'},{rect:new IWRect(5,151,667,11),url:'Join_files/stroke_6.png'},{rect:new IWRect(-5,151,10,11),url:'Join_files/stroke_7.png'}],new IWSize(677,156))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Join_files/JoinMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Join_files','shapeimage_2','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
