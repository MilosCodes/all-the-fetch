// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {
  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers
  let str = 'http://127.0.0.1:3000/?name=value&misha=glisha';
  let url = new URL(str); //url.search will be that string, or there is a url search param.
  let searchParam = url.searchParams;
  searchParam.append('hello', 'world');
  searchParam.append('api-key', 'sadasldkasl;dklas');
  let h = new Headers();
  // h.append('content-type', 'application/json')
  h.append('blah', 'asdaf', 'whatdefuq');
  h.append('x-api-key','sadasldkasl') //API KEY that i've made cuz of x-
  h.append('Authorization', 'Bearer sadasldkasl') // <- How you send a JSON web TOKEN.
  //Zabranjeni Header Imena postoje.
  let request = new Request(url, {
    method: 'GET',
    headers: h,
  });
  fetch(request)
  .then(response=> {
    if(response.ok) throw Error('invlid');
    return response.text();
  })
  .then(txt=> {
    return txt.text();
  }).catch(console.warn);
}
