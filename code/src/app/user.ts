export interface User {
    id? : number
    id_ressource?: number,
    nom? : string
    prenom? : string
    datenaiss?: Date,
    code_postal?: number,
    ville?: string,
    role?: number,
    status?: number,
    mdp?: string,
    mail?: string,
    pseudo?: string,
}