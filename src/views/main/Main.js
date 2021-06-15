import React, { useEffect, useState } from 'react'
import { FlatList, View, Image, TouchableOpacity } from 'react-native'

import { http } from '../../utils/constans'

import Search from '../../components/searchComponent/SearchComponent'

const Main = () => {

    const [images, setImages] = useState([])

    const formdata = new FormData()

    const requestGallery = async () => {
        let { data } = await http.get(`/gallery/hot?showViral=true&mature=false`, {
            headers: {
                'Authorization': 'Client-ID 2da53de0a093ba3',
            },
            body: formdata
        })

        setImages(data.data)

    }

    useEffect(() => {
        requestGallery()
    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            padding: 10,
            justifyContent: 'space-between'
        }}>

            <Search />

            <View style={{
                height: '90%',
                width: '100%',
                padding: 10,
            }}>

                <FlatList
                    data={images}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <TouchableOpacity>
                                {item.images !== undefined &&
                                    <Image style={{
                                    height: 400,
                                    width: '100%',
                                    resizeMode: 'cover',
                                    marginBottom: 20,
                                    backgroundColor: 'gray',
                                    borderRadius: 5
                                }}
                                    source={{ uri: item.images[0].link }}
                                />
                                }
                                <View style={{position: 'absolute', width: '100%', height: '100%',elevation: 1, backgroundColor: 'red', opacity: 0.7}} />
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>

        </View>
    )
}

export default Main