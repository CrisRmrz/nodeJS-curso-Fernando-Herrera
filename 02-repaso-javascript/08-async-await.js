const getCharacters = async () => {

    const url = 'https://www.breakingbadapi.com/api/characters?limit=5';
    const req = await fetch( url );
    const res = await req.json();

    return res

}

getCharacters()
    .then( res => {
        console.log( res )
    })