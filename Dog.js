class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  updateMatchStatus(swiped, liked) {
    this.hasBeenSwiped = swiped;
    this.hasBeenLiked = liked;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <div class="profile-suggestion">
        <img src="${avatar}" alt="${name}" class="dog">
        <div class="dog-info">
          <h4>${name}, ${age}</h4>
          <p>${bio}</p>
        </div>
      </div>
    `;
  }

  render() {
    document.querySelector("main").innerHTML = this.getDogHtml();
  }
}

export default Dog;
