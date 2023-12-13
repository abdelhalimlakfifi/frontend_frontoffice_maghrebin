import axios from 'axios'

export const ProductServices = {
    async getData() {

        const response = await axios.get('http://localhost:3000/api/product/');


        return response.data;
    },

    getAllProducts() {
        return Promise.resolve(this.getData());
    },

};
