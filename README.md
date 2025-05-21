# Journey Builder React Coding Challenge

Link to video of me building this: https://youtu.be/ICcLkrbXxbw

## Run Locally
1. Clone this repo and the [mock server](https://github.com/mosaic-avantos/frontendchallengeserver) repo.
2. Start the mock server
3. Run the following script:
  ```bash
  npm install
  npm run dev
  ```
4. Open in your browser!

## Add New Data Sources
To add new data sources for fields, go to the [AvantosField component](https://github.com/algabl/206758/blob/main/src/components/AvantosField.tsx). Add another [DataSourceFieldsCollapsible](https://github.com/algabl/206758/blob/main/src/components/DataSourceFieldsCollapsible.tsx) into the dialog for each additional data source. Each data source collapsible needs a title and a list of fields that conform to the `Fields` interface as defined in the [types declaration file](https://github.com/algabl/206758/blob/main/src/types/index.ts).

## Patterns
The application employs a clear separation of concerns, leveraging a React Context pattern for data management. Components primarily serve as presentational elements, focusing on displaying information. Data is sourced and managed by a `GraphProvider` which wraps the application, making the necessary data accessible to consuming components through the `useGraph` hook.
