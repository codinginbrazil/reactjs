/* add-react-in-one-minute
	Steps:
		1. Add a DOM Container to the HTML
		2. Add the Script Tags
		3. Create a React Component
  	Docs: https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute 
*/

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);