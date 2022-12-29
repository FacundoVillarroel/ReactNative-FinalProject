class Pet {
  constructor(id, image, name, categoryId, breed, gender, hair, eyes, chip, collar, date, lossZone, description, contact, isLost ) {
    this.id = id.toString();
    this.image = image;
    this.name = name;
    this.categoryId = categoryId;
    this.breed = breed;
    this.gender = gender;
    this.hair = hair;
    this.eyes = eyes;
    this.chip = chip;
    this.collar = collar;
    this.date = date;
    this.lossZone = lossZone;
    this.description = description;
    this.contact = contact;
    this.isLost= isLost
  }
}

export default Pet