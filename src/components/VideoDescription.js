import React, { useState } from "react";
// import './VideoDescription.css'; // Import the CSS file

const VideoDescription = ({ description, views }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (text, maxLength) => {
    if (!text || typeof text !== "string") {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const formatDescription = (descriptionText) => {
    if (!descriptionText || typeof descriptionText !== "string") {
      return [];
    }

    const urlRegex = /(http[s]?:\/\/[^\s]+)/g;
    const hashtagRegex = /#(\w+)/g;

    const lines = descriptionText.split("\n");
    const formattedLines = lines.map((line, index) => {
      const words = line.split(" ");
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

      return <p key={index}>{formattedWords}</p>;
    });

    return formattedLines;
  };

  const formattedDescription = formatDescription(description);
  const truncatedDescription = truncateDescription(description, 50);
  console.log(views)

  return (
    <div className="bg-[#f5f4f4] rounded-lg p-4 mt-4">
      <div>
        <h1 className="font-semibold">
          {views > 1000000000000
            ? (views / 1000000000000).toFixed(1) + "T "
            : views > 1000000000
            ? (views / 1000000000).toFixed(1) + "B "
            : views >= 1000000
            ? views % 1000000 < 100000
              ? (views / 1000000).toFixed(0) + "M "
              : (views / 1000000).toFixed(1) + "M "
            : views > 1000
            ? (views / 1000).toFixed(1) + "K "
            : views}{" "}
          views{" "}
        </h1>
      </div>
      {showFullDescription ? (
        <div>
          {formattedDescription}
          <span onClick={toggleDescription} className="font-bold">
            Show Less
          </span>
        </div>
      ) : (
        <div>
          {formatDescription(truncatedDescription)}
          <button onClick={toggleDescription} className="font-bold">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoDescription;
