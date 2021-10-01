import axios from "axios";

export default class TasksService {

    static async tegAll(limit, page) {

        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit,
                _page: page
            }
        })
        return responce
    }

    static async geetById(id) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return responce
    }

    static async geetCommentsById(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responce
    }
}