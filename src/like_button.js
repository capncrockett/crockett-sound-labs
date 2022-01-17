'use strict';


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // Display a "Like" <button>
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const e = React.createElement(LikeButton);
ReactDOM.render(e, domContainer);

//   render() {
//     if (this.state.liked) {
//       return 'You liked comment number ' + this.props.commentID;
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// // Find all DOM containers, and render Like buttons into them.
// document.querySelectorAll('.like_button_container')
//   .forEach(domContainer => {
//     // Read the comment ID from a data-* attribute.
//     const commentID = parseInt(domContainer.dataset.commentid, 10);
//     ReactDOM.render(
//       e(LikeButton, { commentID: commentID }),
//       domContainer
//     );
//   });