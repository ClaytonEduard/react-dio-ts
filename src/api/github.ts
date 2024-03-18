import axios from "axios";

const gitApi = {
    getUser: async (user: string | undefined) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            return response.data
        } catch (e) {
            console.error('Erro api')
        }
    }
}
export default gitApi