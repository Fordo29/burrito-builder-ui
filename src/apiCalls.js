export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

export const addToOrders = (newOrder) => {
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Sorry, an error has occurred! Please try again later.')
      }
    })
}
