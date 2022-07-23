import axios from "../axios";

class AdminService {
    postAdmin = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('admin', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }

    fetchAdmin = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('admin')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })

        return await promise;
    }
    putAdmin = async (data) => {
        const promise = new Promise(((resolve, reject) => {
                axios.put('admin', data).then((res) => {
                    return resolve(res)
                })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
        )
        return await promise;
    }

    deleteAdmin = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('admin',{params:params}).
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

export default new AdminService();