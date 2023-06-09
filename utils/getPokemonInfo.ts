import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo= async (nameorId:string)=>{

    try {

        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameorId.toLowerCase()}`);

        return {
             id:data.id,
             name:data.name,
             sprites:data.sprites
         }
      
        
    } catch (error) {
        return null;
    }
     



}