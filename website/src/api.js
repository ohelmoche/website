const ServerAPI = async (path, method, body) => {
  try {
    let response = ''
    await fetch(path, {
      method: method,
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.text())
      .then(res => response = res)
      .catch(err => console.log('path error ' + path + ' ' + err))
    return response
  }
  catch (err) {
    console.log('path error ' + path + ' ' + err)
    return ''
  }
}


export {
  ServerAPI
}
