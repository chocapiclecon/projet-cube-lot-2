export interface User {
    id? : number
    nom? : string
    prenom? : string
    dateNaissance?: Date,
    mail?: string,
    userName?: string,
    mdp?: string,
    confirmMdp?: string,
}
