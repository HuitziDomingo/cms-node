import { BASE_PATH, apiVersion } from './config'


export const signUpApi = (data) => {
    let url = `${BASE_PATH}/${apiVersion}/sign-up`
    let params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        if (result.user)
            return {
                ok: true,
                status: 200,
                message: 'Usuario creado correctamente.'
            }
        return {
            ok: false,
            message: result.message,
        }
    }).catch(err => {
        return { ok: false, message: err.message, }
    })
}