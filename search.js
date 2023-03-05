async function search(value){
const body = {
        part : 'snippet',
        q : value
    }
    const response = await fetch('https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22q%22%3A%22secs%22%7D#http-request', {
        mode: 'no-cors', // no-cors, *cors, same-origin

      }).catch((e)=>{console.log(e)});    
      console.log(await response)
}