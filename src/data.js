export const API_KEY = 'AIzaSyB6Tk7L2vats30PYr-CKRpb9Wc-xkyUn9I';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}