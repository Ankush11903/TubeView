# TubeView

Check out the demo [here](https://tubeview.vercel.app/)!

TubeView is a web application built with React, Redux Toolkit, YouTube API, Rapid API, and Tailwind CSS. It allows users to search for and watch YouTube videos, as well as participate in a live chat with other users.

## Features

- Efficient search function with debouncing and caching of suggestions for faster results
- Lazy loading of videos to improve performance
- YouTube API integration for fetching videos and embedding video playback through iframes
- Real-time chat feature with API polling and automatic removal of older comments to prevent app freezing
- Support for n-level nested comments with mock data
- Real-time addition of comments to the chat feature

## Tech Stack

- React: JavaScript library for building user interfaces
- Redux Toolkit: Official, opinionated, batteries-included toolset for efficient Redux development
- React Router: Declarative routing for React
- YouTube API: Enables fetching and embedding of YouTube videos
- Rapid API: Provides access to various APIs, including YouTube's Data API for retrieving metadata about videos
- Tailwind CSS: A utility-first CSS framework for rapid UI development
