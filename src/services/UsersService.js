import axios from "../axios";

class UsersService {
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('user', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }

    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })

        return await promise;
    }
    putUser = async (data) => {
        const promise = new Promise(((resolve, reject) => {
                axios.put('user', data).then((res) => {
                    return resolve(res)
                })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
        )
        return await promise;
    }

    deleteUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('user',{params:params}).
            then((res)=>{
                return resolve(res)
            })
                .catch((err)=>{
                    return resolve (err)
                })
        })
        return await promise;
    };
}

export default new UsersService();