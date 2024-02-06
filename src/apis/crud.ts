import axios from 'axios';
import { Platform } from 'react-native';
import {ApiConfig} from "../../android/app/src/apis/api-configs";

//header는 세션키값이 있을 때만 들어감

export async function get(apiConfig: ApiConfig, endPoint: string, params?: any, header?: any) {
    const url = apiConfig.host + endPoint;
    axios.defaults.baseURL = apiConfig.host;

    return await axios.get(
        url,
        {
            params: params,
            headers: header
        })
        .then((data) => {
            if (data.data.result === 'RQFF111') {
                console.log("부정한 접근이거나 세션이 만료되었습니다.");
                return data;
            } else {
                return data;
            }
        }
        );
}
export async function post(apiConfig: ApiConfig, endPoint: string, body: any, header?: any) {
    const url = apiConfig.host + endPoint;

    // console.log('api통신 url:'+url);
    // console.log('api통신 apiHeaders:' +apiConfig.headers);
    axios.defaults.baseURL = apiConfig.host;

    return await axios.post(
        url,
        body,
        {
            headers: header
        }
    )
        .then((data) => {
            if (data.data.result === 'RQFF111') {
                console.log("부정한 접근이거나 세션이 만료되었습니다.");
                return data;
            } else {
                return data;
            }
        }
        );
}

export async function postForm(apiConfig: ApiConfig, endPoint: string, body: any, header: any) {
    const formData = new FormData();
    console.log('crud endPoint:' + endPoint);

    for (const key in body) {
        console.log('from body1:' + key);
        console.log('from body2:' + body[key]);
        if (key == "file") {

            const files = {
                name: 'VID-20201107-WA0004.mp4',
                type: 'video/mp4',
                uri: body[key],
            };

            formData.append("file", files);
        }
        else {
            formData.append(key, body[key]);
        }
    }

    console.log('from body:' + formData);
    axios.defaults.baseURL = apiConfig.host;

    return await axios.post(
        endPoint,
        formData,
        {
            headers: header,
            transformRequest: (data, headers) => {
                return data;
            },
        },
    );
}
/*
export async function postImgForm(apiConfig: ApiConfig, endPoint: string, body: any, header: any) {
    const formData = new FormData();
    console.log('crud endPoint:' + endPoint);
    console.log('img content:'+JSON.stringify(body));
    for (const key in body) {
        if (key == "imgUrl") {
            let imageInfo: { uri, type, name };
            if (Platform.OS === 'ios') {
                try {
                    imageInfo = {
                        uri: body[key][0].uri,
                        type: `image/${body[key][0].type.replace('jpg', 'jpeg')}`,
                        name: body[key][0].fileName,
                    }

                } catch (e) {
                    console.log(body[key])
                    imageInfo = {
                        uri: body[key].uri,
                        type: `image/${body[key].type.replace('jpg', 'jpeg')}`,
                        name: body[key].filename,
                    }
                }
            }
            else {
                try {
                    let type;
                    if(body[key][0].type) {
                        const imageText = body[key][0].type.indexOf('image') ? "image/" : "";
                        type = `${imageText}${body[key][0].type.replace('jpg', 'jpeg')}`;
                    } else {
                        const imageText = body[key][0].extension.indexOf('image') ? "image/" : "";
                        type = `${imageText}${body[key][0].extension.replace('jpg', 'jpeg')}`;
                    }
                    imageInfo = {
                        uri: body[key][0].uri,
                        type,
                        name: body[key][0].fileName,
                    }

                } catch (e) {
                    let type;
                    if(body[key].type) {
                        const imageText = body[key].type.indexOf('image') ? "image/" : "";
                        type = `${imageText}${body[key].type.replace('jpg', 'jpeg')}`;
                    } else {
                        const imageText = !body[key].extension.includes('image') ? "image/" : "";
                        type = `${imageText}${body[key].extension.replace('jpg', 'jpeg')}`;
                    }
                    imageInfo = {
                        uri: body[key].uri,
                        type,
                        name: body[key].filename,
                    }
                }
            }

            console.log('imageInfo', imageInfo);
            // @ts-ignore
            formData.append("file", imageInfo);
        }
        else {
            formData.append(key, body[key]);
        }
    }

    axios.defaults.baseURL = apiConfig.host;

    // console.log('header:' + JSON.stringify(header));
    return await axios.post(
        endPoint,
        formData,
        {
            headers: header,
            transformRequest: (data, headers) => {
                // console.log(headers)
                return data;
            },
        },
    );
}*/