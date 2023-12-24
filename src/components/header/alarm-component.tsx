import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Image, Modal, Pressable, StyleSheet, Button} from "react-native";
import {SearchBar} from "react-native-screens";

function alarmComponent() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [isModalText, setIsModalText] = useState<string>();

    const [isButtonText, setIsButtonText] = useState<string>("수락");

    const [isButtonText2, setIsButtonText2] = useState<string>("거절");

    const onPressModalOpen = () => {
        setIsModalText("채널멤버 초대를 받았습니다.");
        setIsModalVisible(true);
    }
    const onPressModalOkOpen = () => {
        if(isButtonText == "확인") {
            setIsModalVisible(false);
        }
        setIsModalText("멤버가 되었습니다.");
        setIsButtonText("확인");
        setIsButtonText2("되돌리기");
    }
    const onPressModalNoOpen = () => {
        setIsModalText("거절 했습니다.");
        setIsButtonText("확인");
        setIsButtonText2("되돌리기");
    }
    const onPressModalClose = () => {
        setIsModalVisible(false);
    }
    const onPressModalClose2 = () => {
        setIsModalVisible(false);
    }
    return (
        <><View>
            <TouchableOpacity>
                <Text>뒤로가기</Text>
            </TouchableOpacity>
            <Text>알림</Text>
            <Text>모두 읽기</Text>
        </View>
        <View style={styles.alarm_list}>
            <View>
                <Image style={{width:45,height:45,}} source={require("../../../images/thum/jarang.png")}/>
                <TouchableOpacity style={styles.alram_bx}>
                    <Text>자랑질</Text><Text style={styles.alarm_tit}>영상이 신고 되었습니다.</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Image style={{width:45,height:45,}} source={require("../../../images/thum/jarang.png")}/><Text>자랑질 영상 댓글이 신고 되었습니다.</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>자랑질 채널이 신고 되었습니다.</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>자랑질 팬 게시글이 되었습니다.</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>자랑질 팬 댓글이 되었습니다.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressModalOpen()}>
                <Text>채널에 멤버 초대 받았습니다.</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 400}}>
            <Modal
                animationType="slide"
                visible={isModalVisible}
                transparent={true}
            >
                <View style={styles.modalView}>
                    <View>
                        <Text style={styles.modalTextStyle}>twice.official</Text>
                        <Text style={styles.modalTextStyle}>트와이스 공식 채널</Text>
                        <Text style={styles.modalTextStyle}>{isModalText}</Text>
                        <Button title={isButtonText} onPress={()=>onPressModalOkOpen()}></Button>
                        <Button title={isButtonText2} onPress={()=>onPressModalNoOpen()}></Button>
                    </View>
                    <Pressable
                        onPress={onPressModalClose}>
                        <Text>Modal Close!</Text>
                    </Pressable>
                </View>
            </Modal>
        </View></>
    );
}
const styles = StyleSheet.create({
    alarm_list: {
        position: 'relative',
        borderTopColor: '#E5E4E6',
        borderStyle: 'solid',
    },
    alarm_icon: {
        width:45,
        height:45,
    },
    alarm_tit: {
        color: "#878787",
        marginLeft:5,
        fontWeight:"normal",
        textAlign:"left",
    },
    alram_bx: {
        display: "flex",
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 60,
        position: "relative",
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#17191c"
    },

    /**
     * 일반 화면 영역
     */
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 400,
    },

    /**
     * 모달 화면 영역
     */
    modalView: {
        marginTop: 230,
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle: {
        color: '#17191c',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
});
export default alarmComponent;