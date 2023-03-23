export interface User {
    id? : number
    nom? : string
    prenom? : string
    dateNaissance?: Date,
    ville?: string,
    mail?: string,
    userName?: string,
    mdp?: string,
    confirmMdp?: string,
}
