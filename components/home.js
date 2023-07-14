/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux_Api/FetchProducts';
export default function home() {
    const initial = {
        name: "varun",
        email: "varunrana@gmail.com",
        phoneNo: "1236547896",
        subject: "test",
        message: "test",
    }

    const [data, setData] = useState(initial);
    const dispatch = useDispatch();
    const products = useSelector(state => state);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{ padding: 20, borderWidth: 0.5 }}
                onPress={() => {
                    dispatch(fetchProducts(data));
                }}>
                Call Api
            </Text>
        </View>
    );
}

