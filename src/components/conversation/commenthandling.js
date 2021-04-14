export const sort_comments = (num, comments) => {
    let asc = comments.sort(function(a, b) { return a['time'] - b['time'] });
    //if(!asc){asc = comments};
    if(num != 2){
        asc = asc.reverse();
    }
    return asc;
}

export const initiate_comments = (lscomments) => {
    let comments;
    switch (lscomments) {
		case null:
			comments = [
				{name: 'ann5353', time: Date.now()-1000*60*25-1, comment: 'This should have totally been the front end of the street Mach E - way cooler!'},
				{name: 'ann5353', time: Date.now(), comment: 'This should have totally been the front end of the street Mach E - way cooler!'},
				{name: 'ann5353', time: Date.now()-1000*60*2, comment: 'This should have totally been the front end of the street Mach E - way cooler!'},
			];
			localStorage.setItem('user-comments', JSON.stringify(comments))
			break
			
		default:
			comments = JSON.parse(lscomments);
			break
	}
    return comments;
}