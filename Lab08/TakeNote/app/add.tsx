import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

export default function Add() {
    const { task } = useLocalSearchParams();
    const [search, setSearch] = useState('');

    const handleAdd = () => {
         router.push({
            pathname: '/home',
            params: { newTask: search, task: task }, 
        });
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>

                <TouchableOpacity onPress={() => router.back()}>
                    <Image
                        source={require("../assets/images/back.png")}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <View style={styles.info}>
                    <Image
                        source={require("../assets/images/woman.png")}
                        style={styles.img}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {task}</Text>
                        <Text style={{ fontSize: 15 }}>Have a great day ahead</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>ADD YOUR JOB</Text>

                <View style={styles.inputContainer}>
                    <Image
                        source={require("../assets/images/to-do-list.png")}
                        style={[styles.icon, { tintColor: 'green', marginRight: 15 }]}
                    />
                    <TextInput
                        placeholder='Input your job'
                        style={styles.input}
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>FINISH</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imgContainer}>
                <Image
                    source={require("../assets/images/take-note.png")}
                    style={styles.imgTN}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.5,
        marginTop: 0,
    },
    content: { marginTop: 20, flex: 1 },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        height: 45,
        width: 45,
        marginRight: 10,
    },
    icon: {
        height: 30,
        width: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 30,
    },
    input: {
        width: '100%',
    },
    button: {
        backgroundColor: "#00BDD6",
        width: '35%',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',

    },
    imgContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgTN: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    }
})