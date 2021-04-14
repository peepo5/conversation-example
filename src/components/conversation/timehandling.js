import { ss } from './utils'

export const time_format = (time) => {
    let minutes = (Date.now()-time)/60000;
    let agemessage = 'Some Time Ago';
    switch(true){
        case (minutes < 1): 
            agemessage = `Just Now`;
            break
        case (minutes < 60):
            agemessage = `${Math.floor(minutes)} minute${ss(minutes)} ago`;
            break
        case (minutes/60 < 24):
            agemessage = `${Math.floor(minutes/60)} hour${ss(minutes/60)} ago`;
            break
        case (minutes/60/24 < 365):
            agemessage = `${Math.floor(minutes/60/24)} day${ss(minutes/60/24)} ago`;
            break
        case (minutes/60/24 >= 365):
            agemessage = `${Math.floor(minutes/60/24/365)} year${ss(minutes/60/24/365)} ago`;
            break
    }
    return agemessage;
}