// const xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status === 200) {
//         const res = JSON.parse(this.responseText)
//         let html = ''
//         res.data.forEach((item) => {
//             html += `
//             <div>${item.first_name} ${item.last_name}</div>
//             `
//         })
//         document.getElementById('result').innerHTML = html
//         console.log(res)
//     }
// }

// xhttp.open('GET', 'https://reqres.in/api/users?page=2', true)
// xhttp.send()

// fetch('https://reqres.in/api/unknown/23')
//     .then((res) => {
//         console.log(res)
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw new Error('Loi roi ban ey')
//         }
//     })
//     .then((res) => {
//         let html = ''
//         res.data.forEach((item) => {
//             html += `
//             <div>${item.first_name} ${item.last_name}</div>
//             `
//         })
//         document.getElementById('result').innerHTML = html
//         console.log(res)
//     })
//     .catch((err) => console.log(err))

const http = axios.create({
    baseURL: 'https://reqres.in/api',
})

// http.get('/users?page=2')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log({ message: 'loi roi anh trai', err })
//     })
//     .finally(() => {
//         console.log('Axios xong roi anh trai')
//     })

http.interceptors.response.use(
    (config) => {
        console.log(config)
        return config.data.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
http.interceptors.request.use(
    (config) => {
        console.log('interceptors for request')
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

http.get('/users/2')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.warn(err)
    })
