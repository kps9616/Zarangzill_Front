import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {SearchBar} from "react-native-screens";
import styled from "styled-components";

function searchComponent() {
    const [search, setSearch] = useState('');

    const [searchList, setSearchList] = useState([]); //검색 데이터


    return (
        <View>
            <TextInput
                style={{
                    borderStyle:"solid",
                    backgroundColor:"white",
                }}

            />
            <View style={{
                flexDirection:"row"
            }}>
            <Text>많이본 영상</Text>
                <TouchableOpacity>
                    <Text>남</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>여</Text>
                </TouchableOpacity>
            <Text>X </Text>
                <TouchableOpacity>
                    <Text>10대</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>20대</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>30대 이상</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default searchComponent;