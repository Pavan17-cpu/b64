import React from 'react';

class Base64ImageOrVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: '',
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  render() {
    const { inputUrl, isSubmitted } = this.state;

    return (
      <div>
        <h1>Base64 Image or Video Example</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Base64 URL:
            <input type="text" value={inputUrl} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {isSubmitted && (
          <div>
            <h2>Result:</h2>
            {inputUrl.startsWith('data:image') ? (
              <img src={inputUrl} alt="base64_image" />
            ) : (
              <video controls>
                <source src={inputUrl} type="video/mp4" />
                <source src={inputUrl} type="video/mkv" />
                <source src={inputUrl} type="video/webm" codecs="vp9, opus" />
                <source src={inputUrl} type="video/ogg" codecs="theora, vorbis" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Base64ImageOrVideo;
