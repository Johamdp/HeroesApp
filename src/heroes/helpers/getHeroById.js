import { heroes } from '../data/heroesData'

export const getHeroById = ( heroId, arr ) => {

    return heroes.find( hero => hero.id === id );
}

