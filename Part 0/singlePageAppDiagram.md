```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server->>browser: main.css
    server->>browser: spa.js
    server->>browser: html code
    server->>browser: Array of notes and time - notes

Note over browser: Executes js code
Note over browser: Renders the webpage


```