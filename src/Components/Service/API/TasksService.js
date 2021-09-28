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
}