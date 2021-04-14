export const ss = (f) => {
    if(Math.floor(f) != 1){
        return 's';
    }
    return '';
}

export const to_title_case = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}