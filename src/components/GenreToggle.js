import React from "react";

class GenreToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      genres: [
        { title: "Rock", text: "Rock is", id: 1 },
        { title: "RnB", text: "RnB is", id: 2 },
        { title: "Classical", text: "Classical is", id: 3 }
      ]
    };
    this.renderGenres = this.renderGenres.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
  }

  handleLikes() {
    alert("You liked this genre!");
  }

  renderGenres() {
    return this.state.genres.map((genre) => {
      return (
        <details key={genre.id}>
          <summary>{genre.title}</summary>
          <p>{genre.text}</p>
          <button onClick={this.handleLikes}>like</button>
        </details>
      );
    });
  }

  render() {
    return <div style={{ marginBottom: "60px" }}>{this.renderGenres()}</div>;
  }
}

export default GenreToggle;
