// import PouchDB from 'pouchdb';

export default class Posicio {
    id: string;
    nom: string;
    data: Date;
    valor: number;
}

// export default class PosicionsDb {
//     private _database: PouchDB.Database<Posicio>;

//     constructor() {
//         this._database = new PouchDB('posicions');
//     }

//     public save(pos: Posicio) {
//         this._database.put(pos);
//     }

// }
