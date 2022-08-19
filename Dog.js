class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  updateMatchStatus(bool) {
    this.hasBeenSwiped = true;
    this.hasBeenLiked = bool;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <div class="profile-suggestion">
        <img src="${avatar}" alt="${name}" class="dog-img">
        <img
          src="./images/badge-like.png"
          alt="accept badge"
          class="accept-badge badge"
        />
        <img
          src="./images/badge-nope.png"
          alt="reject badge"
          class="reject-badge badge"
        />
        <div class="dog-info">
          <h3>${name}, ${age}</h3>
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
