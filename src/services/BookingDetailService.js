import axios from "../axios";

class BookingDetailService{
    postBookingDetails = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('bookingDetails', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }

    fetchBookingDetails = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('bookingDetails')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })

        return await promise;
    }
    putBookingDetails = async (data) => {
        const promise = new Promise(((resolve, reject) => {
                axios.put('bookingDetails', data).then((res) => {
                    return resolve(res)
                })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
        )
        return await promise;
    }

    deleteBookingDetails = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('bookingDetails',{params:params}).
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

export default new BookingDetailService();