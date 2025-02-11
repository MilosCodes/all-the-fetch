// Response objects

const jsonstr = 'http://127.0.0.1:5500/local-sample.json'; // json file
const imgstr = 'https://picsum.photos/id/237/300/200'; // image file
const fontstr = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'; // font file
const htmlstr = 'http://127.0.0.1:5500/'; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
  id: crypto.randomUUID(),
  name: 'the one who knocks',
  favouriteColor: 'blue',
};

export function getData() {
  //

  fetch(imgstr)
  .then((resp)=> {
    if(!response.ok) throw new Error('invalid');
    return resp.blob(); //Binnary large object its not text, its video, or something.
  })
  .then(blob=> {
    console.log(blob); //blob is chunk of memory.
    let url = URL.createObjectURL(blob);
    let img = document.getElementById('pic');
    img.src = url;
  })
  .catch(console.warn)
  let jsonstring = JSON.stringify(obj);
  console.log(jsonstring)
  let file = new File([jsonstring], 'mydata.json', { type: 'application/json' });

  let response = new Response(file, {
    status: 200,
    statusText: 'Say my name',
    headers: {
      'content-type': 'application/json',
      'content-length': file.size,
      'x-steve': 'starts with x for a custom header name',
    },
  });
  console.log(response);
}
