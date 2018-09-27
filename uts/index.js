window.workers = new Worker("../worker/worker.js");


workers.onmessage = function(e){
  　document.querySelector("#p").innerHTML = JSON.parse(e.data).data;
}
  let btn = 　document.querySelector("#btn");
  btn.onclick =function(){
    let bd = 　document.querySelector("#text").value;
    if(bd){
      workers.postMessage(bd)
    }


  }
