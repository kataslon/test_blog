export function getCSRFToken() {
  const csrfContainerEl = document.querySelector("meta[name='csrf-token']")
  return csrfContainerEl ? csrfContainerEl.content : ''
}

function buildFetchOptions(method, data) {
  const options = {
    method: method,
    credentials: "same-origin",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(data)
  }
  const csrfContainer = document.querySelector("meta[name='csrf-token']")
  if (csrfContainer) {
    options.headers["X-CSRF-Token"] = csrfContainer.content
  }
  return options
}

export function ajaxGet(url) {
  return fetch(`${url}`, buildFetchOptions("GET"))
}

export function ajaxDelete(url) {
  return fetch(`${url}.json`, buildFetchOptions("DELETE"))
}
