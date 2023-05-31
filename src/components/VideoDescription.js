import React, { useState } from 'react';
// import './VideoDescription.css'; // Import the CSS file

const VideoDescription = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (text, maxLength) => {
    if (!text || typeof text !== 'string') {
      return '';
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const formatDescription = (descriptionText) => {
    if (!descriptionText || typeof descriptionText !== 'string') {
      return [];
    }

    const urlRegex = /(http[s]?:\/\/[^\s]+)/g;
    const hashtagRegex = /#(\w+)/g;

    const lines = descriptionText.split('\n');
    const formattedLines = lines.map((line, index) => {
      const words = line.split(' ');
      const formattedWords = words.map((word, wordIndex) => {
        if (urlRegex.test(word)) {
          return (
            <span key={wordIndex} className="text-blue-500">
              <a href={word} target="_blank">
                {word}
              </a>
            </span>
          );
        } else if (hashtagRegex.test(word)) {
          return (
            <span key={wordIndex} className="text-blue-600">
              {word}
            </span>
          );
        }
        return <span key={wordIndex}>{word}</span>;
      });

      return (
        <p key={index}>
          {formattedWords}
        </p>
      );
    });

    return formattedLines;
  };

  const formattedDescription = formatDescription(description);
  const truncatedDescription = truncateDescription(description, 50);

  return (
    <div className='bg-[#f5f4f4] rounded-lg p-4 mt-4'>
      {showFullDescription ? (
        <div>
          {formattedDescription}
          <span onClick={toggleDescription} className='font-bold'>Show Less</span>
        </div>
      ) : (
        <div>
          {formatDescription(truncatedDescription)}
          <button onClick={toggleDescription} className='font-bold'>Show More</button>
        </div>
      )}
    </div>
  );
};

export default VideoDescription;
