(() => {
 const prefixes={'android-normal':'FISH MOD Z ALOK THỨC TỈNH ADR FFTH','android-max':'FISH MOD Z ALOK THỨC TỈNH ADR FFM','ios-normal':'FISH MOD Z ALOK THỨC TỈNH IOS FFTH','ios-max':'FISH MOD Z ALOK THỨC TỈNH IOS FFM'};
 const copyrightName="Bản quyền mod thuộc về FISH MOD Z - MOD SKIN FF.TXT";
 const copyrightBytes=Uint8Array.from(atob("QuG6o24gcXV54buBbiBtb2QgdGh14buZYyB24buBIEZJU0ggTU9EIFogLSBNT0QgU0tJTiBGRiA="),c=>c.charCodeAt(0));
 const usedCodes=new Set();
 let lastCode;try{lastCode=localStorage.getItem("alok-last-export-code");}catch{}
 window.alokPackageDownload=(bytes,version)=>{
  if(!prefixes[version])throw Error('Phiên bản không hợp lệ.');
  let packed=bytes;
  if(!window.alokPackagedExports?.has(bytes)){const entries=fflate.unzipSync(bytes);entries[copyrightName]=copyrightBytes;packed=fflate.zipSync(entries,{level:0});}
  if(usedCodes.size>=67600)usedCodes.clear();
  let code;
  do{
   const random=new Uint32Array(1);crypto.getRandomValues(random);
   if(random[0]>=4294966000)continue;
   const value=random[0]%67600;
   code=String.fromCharCode(65+Math.floor(value/2600),65+Math.floor(value/100)%26)+String(value%100).padStart(2,'0');
  }while(!code||usedCodes.has(code)||code===lastCode);
  usedCodes.add(code);lastCode=code;try{localStorage.setItem('alok-last-export-code',code);}catch{}
  return {bytes:packed,name:prefixes[version]+' '+code+'.zip'};
 };
})();