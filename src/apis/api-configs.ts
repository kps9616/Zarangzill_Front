import { AxiosRequestHeaders } from "axios";
import { Platform } from "react-native";

export const platformApiConfig = {
    host: Platform.OS === 'ios' ? 'https://1.226.83.35:9090' : 'http://1.226.83.35:9090',
}