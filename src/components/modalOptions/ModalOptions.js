import React from 'react'
import {
    View,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native'

const ModalOptions = (props) => {

    const { show, setShow } = props

    return (
        <View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        }}>
            <Modal
                visible={show}
                onRequestClose={_ => {setShow(false)}}
                transparent
            >
                <TouchableWithoutFeedback
                    onPress={_ => {setShow(false)}}
                >
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0, 
                        bottom: 0
                    }}>

                    </View>
                </TouchableWithoutFeedback>

                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'blue',
                    alignSelf: 'flex-end',
                    marginTop: 40,
                    marginRight: 40
                }}>

                </View>
            </Modal>

        </View>
    )
}

export default ModalOptions