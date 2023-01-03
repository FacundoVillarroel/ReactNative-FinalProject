class User {
  constructor( id, userId, email ){
    this.id = id.toString();
    this.userId = userId.toString();
    this.email = email;
    this.name = "";
    this.profileImage = "";
    this.posts = []
  }
}

export default User