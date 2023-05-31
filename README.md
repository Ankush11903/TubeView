# TubeView

Check out the demo [here](https://tubeview.vercel.app/)!

TubeView is a web application built with React, Redux Toolkit, YouTube API, Rapid API, and Tailwind CSS. It allows users to search for and watch YouTube videos, as well as participate in a live chat with other users.

[![](https://mermaid.ink/img/pako:eNp1VMGOmzAQ_RXkY5VNAgRMOFSKkq260qpKd9se2vTg4CFYBYyM2TaN8u9rHBMcknCy37w3bzwefEAJp4BiVEsiYcXITpBiUzrq-_Xht_Pw8NH5zAvYlCdMszTiHE6IzXyiOfRou9PwKxCRZKzcxWbp_GAUeN1TzwzNX8GWN2WiBWYNhtJLetIdj68NiL3zvaKqYnpX1xZpuXxjBfBG3qvsmROqPdYgUi6KzmuxfnKWJM97nWGeamuSBOo6HrK7QNrcET4KwcW17BNhuX0kk8Y6j1EseVHlIK070Rkt4gtI1aRhb-2E-qpWIJVnrDbw94T0ZIugBcq0gFI-s1oagUGs-7Y4WrOg1EBxu-7ivaAnXHt0AcWxuzL0WPM8P82HJEI6y4zIDutFBrg2-WKdQ3UtAfbWmR0vfw5rwG78It2kXQzaIEM3Ajfki4pdzpkBuuB51NpheYG64mUNg3pvyMygXYg0drO-rkk36jOhRSKV30B8-Z6gESpAFIRR9fjoTBskM1AhFKslJeLPBm3Ko-KRRvLXfZmgWIoGRqjR_7R5q1Cckrw-o4-USS7OYK5aCWp7QHJftc_cTt2mSpnwMmW7Fm9EruBMyqqOJ5M2PN4xmTXbccKLSc1opqYle5uHk9ALI-L5EGKfBL5Pk607j1Jv5qYUT12PoONxhCpS_uS86EpV29bkH4rdmT_2wjkOPNcNvFkwxSO0V3A0DsJphDF2Ax97U6xy_NcJpuO5H2AcBG40c7EfRLPjO6ihvKM?type=png)](https://mermaid.live/edit#pako:eNp1VMGOmzAQ_RXkY5VNAgRMOFSKkq260qpKd9se2vTg4CFYBYyM2TaN8u9rHBMcknCy37w3bzwefEAJp4BiVEsiYcXITpBiUzrq-_Xht_Pw8NH5zAvYlCdMszTiHE6IzXyiOfRou9PwKxCRZKzcxWbp_GAUeN1TzwzNX8GWN2WiBWYNhtJLetIdj68NiL3zvaKqYnpX1xZpuXxjBfBG3qvsmROqPdYgUi6KzmuxfnKWJM97nWGeamuSBOo6HrK7QNrcET4KwcW17BNhuX0kk8Y6j1EseVHlIK070Rkt4gtI1aRhb-2E-qpWIJVnrDbw94T0ZIugBcq0gFI-s1oagUGs-7Y4WrOg1EBxu-7ivaAnXHt0AcWxuzL0WPM8P82HJEI6y4zIDutFBrg2-WKdQ3UtAfbWmR0vfw5rwG78It2kXQzaIEM3Ajfki4pdzpkBuuB51NpheYG64mUNg3pvyMygXYg0drO-rkk36jOhRSKV30B8-Z6gESpAFIRR9fjoTBskM1AhFKslJeLPBm3Ko-KRRvLXfZmgWIoGRqjR_7R5q1Cckrw-o4-USS7OYK5aCWp7QHJftc_cTt2mSpnwMmW7Fm9EruBMyqqOJ5M2PN4xmTXbccKLSc1opqYle5uHk9ALI-L5EGKfBL5Pk607j1Jv5qYUT12PoONxhCpS_uS86EpV29bkH4rdmT_2wjkOPNcNvFkwxSO0V3A0DsJphDF2Ax97U6xy_NcJpuO5H2AcBG40c7EfRLPjO6ihvKM)

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
