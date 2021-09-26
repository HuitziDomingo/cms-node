import { BASE_PATH, apiVersion } from './config'


export const signUpApi = async (data) => {
    let url = `${BASE_PATH}/${apiVersion}/sign-up`
    let params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    let res = await fetch(url, params)
    try {
        await res.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}