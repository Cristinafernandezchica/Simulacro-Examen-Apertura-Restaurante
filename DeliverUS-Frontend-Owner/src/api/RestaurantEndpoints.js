import { get, post, put, destroy } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function create (data) {
  return post('restaurants', data)
}

function update (id, data) {
  return put(`restaurants/${id}`, data)
}

function updateStatus (id, data) {
  return put(`restaurants/${id}/status`, data)
}

function remove (id) {
  return destroy(`restaurants/${id}`)
}

export { getAll, getDetail, getRestaurantCategories, create, update, updateStatus, remove }
