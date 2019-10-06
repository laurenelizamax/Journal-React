const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/entries/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/entries`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:8088/entries/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newEntry) {
    return fetch(`${remoteURL}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    }).then(data => data.json())
},
update(editedEntry) {
    return fetch(`${remoteURL}/entries/${editedEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEntry)
    }).then(data => data.json());
  }
}