


function deleteBlocker(){
  console.log('waiting 2 seconds...')
    setTimeout(() =>{
      console.log("AutoChegg: Removing Barrier...")
      var id = 'cs-dm-swap';
      var stupid = document.getElementById(id);
      stupid.remove();  
      var x = document.getElementsByTagName('html')[0]
      x.style.cssText = 'overflow: auto !important'
      console.log(x)
    },1200)

}
deleteBlocker();
