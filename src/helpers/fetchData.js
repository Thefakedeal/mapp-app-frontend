
export async function getData({ endpoint = "", search = [] }) {
  const searchparams = new URLSearchParams();
  for (const param of search) {
    searchparams.append(param.key, param.value);
  }
  const url = `${endpoint}?${searchparams}`
  const response = await fetch(url,{
      headers:{
          'accept': 'application/json'
      }
  });
  const data = await response.json();
  return data;
}

export async function postData({endpoint="", body={}, method="POST"}){
    const options = {
        method: method,
        headers:{
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(body)
    } 
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
}