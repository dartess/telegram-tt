importScripts("webp_wasm.js"),Module.onRuntimeInitialized=async()=>{self.postMessage({type:"initialized"})},self.onmessage=e=>{const{id:t,blob:l}=e.data,r=new FileReader;r.addEventListener("loadend",(()=>{const e=r.result,l=e.byteLength,u=Module._malloc(l);Module.HEAPU8.set(new Uint8Array(e),u);const d=Module.cwrap("getInfo","number",["number","number"])(u,l);if(!Module.getValue(d,"i32"))return Module._free(d),Module._free(u),void self.postMessage({type:"result",id:t,width:0,height:0,result:null});const s=Module.getValue(d+4,"i32"),n=Module.getValue(d+8,"i32");Module._free(d);const o=Module.cwrap("decode","number",["number","number"])(u,l),i=new Uint8Array(Module.HEAPU8.buffer,o,s*n*4),a=new Uint8ClampedArray(i);Module._free(o),Module._free(u),self.postMessage({type:"result",id:t,width:s,height:n,result:a})})),r.readAsArrayBuffer(l)};
//# sourceMappingURL=9536.52b3efcf5de741667a33.js.map