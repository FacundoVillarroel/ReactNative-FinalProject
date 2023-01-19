import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("favorites.db");

export const init = () => {
  const promise = new Promise((resolve,reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, pet TEXT NOT NULL);',
        [],
        () => resolve(),
        (_,err) => reject(err)
      )
    })
  })
  return promise;
}

export const insertFavPet = (pet) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx)=> {
      tx.executeSql(
        'INSERT INTO favorites (pet) VALUES (?);',
        [JSON.stringify(pet)],
        (_,result) => resolve(result),
        (_,err) => reject(err)
      );
    });
  });
  return promise
}

export const getFavPets = () => {
  const promise = new Promise ((resolve,reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favorites',
        [],
        (_,result) => resolve(result),
        (_,err) => reject(err)
      );
    });
  });
  return promise 
}

