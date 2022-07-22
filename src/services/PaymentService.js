import axios from "../axios";

class PaymentService {
    postPayment = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('payment', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }

    fetchPayment = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('payment')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })

        return await promise;
    }
    putPayment = async (data) => {
        const promise = new Promise(((resolve, reject) => {
                axios.put('payment', data).then((res) => {
                    return resolve(res)
                })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
        )
        return await promise;
    }

    deletePayment = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('payment',{params:params}).
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

export default new PaymentService();