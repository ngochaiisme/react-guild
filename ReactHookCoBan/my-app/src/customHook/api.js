export const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: 'Duong Ngoc Hai',
                    age: 26,
                    address: 'HCM',
                },
                status: 200,
            })
        }, 2000)
    })
}
