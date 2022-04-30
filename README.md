# bowling-calculator

## Prerequisites

This project requires node.js to be installed on your local machine. You may find it here https://nodejs.org/.

-   npm
    ```
    npm install npm@latest -g
    ```

## Installation

1.  Clone the repository to your local machine with:
    ```bash
    git clone https://github.com/Bogusik/bowling-calculator.git
    ```
2.  Get into project folder.
    ```bash
    cd bowling-calculator
    ```
3.  Install dependencies.
    ```bash
    npm install
    ```

## Usage

To start the application you just need to run
```bash
npm start
```
There are some more scripts. To run any of them use template and values from the table presented down below.
```bash
npm run <script_name>
```

| <script_name>     | Description               |
| ----------------- | ------------------------- |
| `start`           | Runs both API and client. |
| `client:start`    | Runs only Client.         |
| `client:lint`     | Code linting for client.  |
| `api:start`       | Runs only API.            |
| `api:test`        | Runs API test.            |


## Configuration

Project's config file lays in root directory named `config.json`. By default it looks like this.
```json
{
  "apiUrl": "http://localhost:5050",
  "apiPort": 5050,
  "clientPort": 3030
}
```

| variable          | Description                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `apiUrl`          | This variable defines base API url.                                                       |
| `apiPort`         | Port on which API runs. Note that `apiUrl` should have same port as here                  |
| `clientPort`      | Port on which Client will run. Note that `apiPort` and `clientPort` should be different.  |

In this configuration Client will run on http://localhost:3030. 

**For windows users only**: note that `localhost` in links may
be required to be changed to `127.0.0.1`.

