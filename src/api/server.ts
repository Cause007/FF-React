const token = 'e049df4e3c749b8ba26d8ca9f1c3326f5cbfcc1efd05de79'

export const server_calls = {
    get: async () => {
        const response =  await fetch (`https://ff-flask.onrender.com/api/students`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        console.log(response)
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response =  await fetch (`https://ff-flask.onrender.com/api/students`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response =  await fetch (`https://ff-flask.onrender.com/api/students/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response =  await fetch (`https://ff-flask.onrender.com/api/students/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}
