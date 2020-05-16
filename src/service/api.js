/** TODO
 * 'fetch' function make 'async'
 */

class EventObserver {
  constructor() {
    this.observers = []
  }
  subscribe(fn) {
    if (!this.observers.some(obj => obj === fn)) this.observers.push(fn)
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter(obj => obj !== fn)
  }
  broadcast(response, controller) {
    this.observers.forEach(fn => fn(response, controller))
  }
}

export default class API {
  constructor({ host = '' } = {}) {
    this.baseUrl = host
    this.observer = new EventObserver()

    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  setToken(token) {
    if (token) this.headers['Authorization'] = `Bearer ${token}`
    else delete this.headers['Authorization']
    return this
  }

  subscribeResponse(fn) {
    this.observer.subscribe(fn)
    return this
  }
  unsubscribeResponse(fn) {
    this.observer.unsubscribe(fn)
    return this
  }

  fakeGET(url) {
    let self = this
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(self)
      }, 100)
    })
  }

  GET(url) {
    return this.fetch(url)
  }
  POST(url, obj) {
    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj)
    })
  }
  UPLOAD(url, file) {
    const headers = { ...this.headers }
    delete headers['Content-Type']
    const formData = new FormData()
    formData.append('file', file)

    return this.fetch(url, {
      method: 'POST',
      body: formData,
      headers
    })
  }
  DELETE(url, obj) {
    return this.fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(obj)
    })
  }
  fetch(
    url = '',
    { method = 'get', body = null, headers = this.headers } = {}
  ) {
    //https://github.com/github/fetch#aborting-requests
    const controller = new AbortController()
    const signal = controller.signal

    const requestData = {
      method,
      body,
      headers: new Headers(headers),
      signal
    }

    const request = new Request(this.baseUrl + url, requestData)

    try {
      return (
        fetch(request)
          .then(response => {
            this.observer.broadcast(response, controller)
            const { status, ok } = response
            return response
              .clone()
              .json()
              .then(
                json => Promise.resolve({ status, ok, json, response }),
                error => Promise.resolve({ status, ok, error, response })
              )
          })
          //abort
          .catch(error => console.log(error))
      )
    } catch (exception) {
      console.error(`Failed to retrieve informations: (${exception})`)
    }
  }
}
