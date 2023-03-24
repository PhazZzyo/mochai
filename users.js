module.exports = {

    fetchUserData: async function (userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userData = await response.json()
        return userData
    }
}