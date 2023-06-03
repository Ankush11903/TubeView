# TubeView

Check out the demo [here](https://tubeview.vercel.app/)!

TubeView is a web application built with React, Redux Toolkit, YouTube API, Rapid API, and Tailwind CSS. It allows users to search for and watch YouTube videos, as well as participate in a live chat with other users.

[![](https://mermaid.ink/img/pako:eNp1VE2PmzAQ_SvIxyqbhPAZDpWiZKuulErb3baHlh4cPASrgJEx26ZR_vvajgmQBA5gz7z3Zjwe5ogSRgBFqBZYwIbiPcdFXFryOb_V85kVYD08fLReAfMko-U-MkvrByXA6jvQsyOSX_h7g7roaOgGdqwpEy1r1mAgHaUDjWTytQF-sL5XRJ6DjPKeSA69KN9oAawRY5ltGSY6xjPwlPGijbV6frLWOM87nkGec2uSBOo6uka3jrQZIT5yzvgt7ROmef9IRqZ3HsNYs6LKQUAH1Yo94AsIWaTr2vYF9VVtQMiY_cvrwD2AJsigBZRiS2thCMZSj3O29A3WGW4JamupfcfoqWrGihBjitS69XeEDnCbVeuQmLaOcXn-6rbvN8mxk_z14Xe_P2HQLKehQnuNd-irig57xRha56Vd1IW_QF2xsga5SECWhYzSTLMMSNp2Pz9T8XsJKrtqj171jeXifmZ5fv7ZBObCMtshwRgHkorAqiH-klkbX82MuEQTVAAvMCVyGuksYyQykC4UySXB_E-M4vIkcbgR7PVQJihKcV7DBDX6rzfT68r6SKhg_GLM5UWB3B6ROFRq8O1li0jNhJUp3St7w3NpzoSo6mg2U-7pnoqs2U0TVsxqSjJZguxt6c_8hR_ihQN-4GDPcUiys5dhunDtlARze4HR6TRBFS5_MiazErwBvVVB_qHI9r2pO1_adhDYoRt4S2-CDijynantuGG4nNu-6wahIzX-a4H5NPScueu5vuP5i7kkThDo0305z3A9yk_viErH7Q?type=png)](https://mermaid.live/edit#pako:eNp1VE2PmzAQ_SvIxyqbhPAZDpWiZKuulErb3baHlh4cPASrgJEx26ZR_vvajgmQBA5gz7z3Zjwe5ogSRgBFqBZYwIbiPcdFXFryOb_V85kVYD08fLReAfMko-U-MkvrByXA6jvQsyOSX_h7g7roaOgGdqwpEy1r1mAgHaUDjWTytQF-sL5XRJ6DjPKeSA69KN9oAawRY5ltGSY6xjPwlPGijbV6frLWOM87nkGec2uSBOo6uka3jrQZIT5yzvgt7ROmef9IRqZ3HsNYs6LKQUAH1Yo94AsIWaTr2vYF9VVtQMiY_cvrwD2AJsigBZRiS2thCMZSj3O29A3WGW4JamupfcfoqWrGihBjitS69XeEDnCbVeuQmLaOcXn-6rbvN8mxk_z14Xe_P2HQLKehQnuNd-irig57xRha56Vd1IW_QF2xsga5SECWhYzSTLMMSNp2Pz9T8XsJKrtqj171jeXifmZ5fv7ZBObCMtshwRgHkorAqiH-klkbX82MuEQTVAAvMCVyGuksYyQykC4UySXB_E-M4vIkcbgR7PVQJihKcV7DBDX6rzfT68r6SKhg_GLM5UWB3B6ROFRq8O1li0jNhJUp3St7w3NpzoSo6mg2U-7pnoqs2U0TVsxqSjJZguxt6c_8hR_ihQN-4GDPcUiys5dhunDtlARze4HR6TRBFS5_MiazErwBvVVB_qHI9r2pO1_adhDYoRt4S2-CDijynantuGG4nNu-6wahIzX-a4H5NPScueu5vuP5i7kkThDo0305z3A9yk_viErH7Q)

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
