import React, {useState} from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'

import ModalOptions from '../modalOptions/ModalOptions'

const searchComponent = () => {

    const [show, setShow] = useState(false)

    return (
        <View style={{
            flexDirection: 'row',
            height: '10%',
            width: '100%',
            paddingVertical: 10,
            justifyContent: 'space-between'
        }}>

            <TextInput style={{
                height: '100%',
                width: '70%',
                backgroundColor: 'white',
                borderRadius: 25,
                borderWidth: 2,
                paddingHorizontal: 10,
                borderColor: 'gray',
            }}
                placeholder='Buscar imagen'
            />

            <TouchableOpacity
                style={{
                    height: '100%',
                    width: '15%',
                    backgroundColor: 'red'
                }}
                onPress={_ => {setShow(true)}}
            >
            </TouchableOpacity>

            <ModalOptions show={show} setShow={setShow}/>

        </View>
    )
}

export default searchComponent