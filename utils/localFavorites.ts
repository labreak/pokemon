

const toggleFavorite=(id:number)=>{
   

let favorites:number[]=JSON.parse(localStorage.getItem('favorites')|| '[]')

if(favorites.includes(id)){
    favorites=favorites.filter(pokeId=>pokeId !== id);
}else{
    favorites.push(id)
}

localStorage.setItem('favorites',JSON.stringify(favorites))

}


const existInFavorites=(id:number):boolean=>{
    if(typeof window === 'undefined') return false;
    const favorites:number[]=JSON.parse(localStorage.getItem('favorites')|| '[]')

    return favorites.includes(id)

}



const pokemons= ():number[]=>{
    return JSON.parse(localStorage.getItem('favorites')|| '[]')

}

const existInFavoritesByName=(name:string):boolean=>{
    if(typeof window === 'undefined') return false;
    const favorites=JSON.parse(localStorage.getItem('favoritesByName')|| '[]')

    return favorites.includes(name)
}

const toggleFavoriteByName=(name:string)=>{
   

    let favorites:string[]=JSON.parse(localStorage.getItem('favorites')|| '[]')
    
    if(favorites.includes(name)){
        favorites=favorites.filter(pokeName=>pokeName !== name);
    }else{
        favorites.push(name)
    }
    
    localStorage.setItem('favoritesByName',JSON.stringify(favorites))
    
    }

    const pokemonsByName= ():number[]=>{
        return JSON.parse(localStorage.getItem('favoritesByName')|| '[]')
    
    }

export default{
    toggleFavorite,
    existInFavorites,
    
    pokemons
}