import axios from 'axios'

import { Alert } from 'react-native'


const url = `https://api.imgur.com/3`

const http = axios.create({
    baseURL: url,
    validateStatus: status => {
        if (status === 401) {

            Alert.alert("Lol", "esto no debe pasar", [
                {
                    text: "Ok",
                    onPress: () => null,
                },
            ])

            return true
        } else {
            return status >= 200 && status < 300
        }
    },
})

export {http}