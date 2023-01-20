import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("favorites.db");

export const init = () => {
  const promise = new Promise((resolve,reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS favorites (id TEXT PRIMARY KEY NOT NULL, pet TEXT NOT NULL);',
        [],
        () => resolve(),
        (_,err) => reject(err)
      )
    })
  })
  return promise;
}

export const insertFavPet = (pet, petId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx)=> {
      tx.executeSql(
        'INSERT INTO favorites (id, pet) VALUES (?, ?);',
        [petId, JSON.stringify(pet)],
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

export const deleteFavPet = (petId) => {
  const promise = new Promise ((resolve,reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM favorites WHERE id=?`,
        [petId],
        (_,result) => resolve(result),
        (_,err) => reject(err)
      );
    });
  });
  return promise
}

