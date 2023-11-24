# Toxicity Detection API

Welcome to the Toxicity Detection API, a Node.js project that uses TensorFlow.js to classify text for toxicity. This API exposes an endpoint for analyzing the toxicity of input text.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) for managing dependencies.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/alyona-shirpal/toxicity-detection-api.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd toxicity-detection-api
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Usage

1. **Run the development server:**

    ```bash
    npm run dev
    ```

2. **Toxicity Detection Endpoint:**

   Send a POST request to `http://localhost:3000/toxicity` with a JSON body containing the text you want to analyze:

    ```json
    {
      "text": "Your text to analyze for toxicity."
    }
    ```

   Example using curl:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"text":"Your text to analyze for toxicity."}' http://localhost:your-port/toxicity
    ```

   The API will respond with the toxicity predictions in JSON format.

### Configuration

- Adjust the `threshold` and `labelsToInclude` in the code to customize the toxicity analysis.

### Contributing

Feel free to contribute to the development of this project. Create a fork, make your changes, and submit a pull request.


