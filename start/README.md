    All React's cdn

    Both React and ReactDOM are available over a CDN.

    CDN FOR DEV
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    CDN FOR PRODUCTION
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>


    Why the crossorigin Attribute?
    If you serve React from a CDN, we recommend to keep the crossorigin attribute set:
<script crossorigin src="..."></script>