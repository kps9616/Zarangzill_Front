import { platformApiConfig, } from "../api-configs";
import {get, post, postForm} from "../crud"
import {videoUploadDto} from "./dto";

export const uploadFile = async (
    body: { file: string; userId: string },
    sessionKey: string,
)=> {
    // body.sessionKey = sessionKey;
    // body.t = new Date().getTime() + '';

    console.log(body);

    return await postForm(platformApiConfig, '/api/v1/short/upload/file', body, {
        sessionKey: sessionKey + '',
        t: new Date().getTime() + '',
        "Content-Type":'multipart/form-data',
    } )
}
