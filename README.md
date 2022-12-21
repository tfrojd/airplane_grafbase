# Using Grafbase to get Airplane task output as a GraphQL API

This is an example on how to send output from an [Airplane](https://airplane.io/) task to [Grafbase](https://grafbase.com/). The published task output is then available as a GraphQL API that could be consumed by a webapp or used in an Airplane view. 

The example is a hypothetical internal tool for a GDPR right of access request procedure that would work like this.

1. Data subject sends a request to get their data by email, fax or post.

2. Company employee inputs User ID of data subject in the `gdpr_report` task (Typescript task).

3. The `gdpr_report` task calls `fetch_report` task (SQL task) to search systems for personal data of the data subject.

4. The output of `fetch_report` is used as input in the `result_to_grafbase` task (GraphQL task) that writes the data to Grafbase using a GraphQL mutation.

5. The output is now available as a Grafbase GraphQL endpoint. The data subject is then mailed a link to a webpage that uses the endpoint as a backend to show the personal data. (Note: Neither email functionality or webpage for viewing data is included in this repository.)


## How to get started

1. Fork this repository to your own Github account

2. On [grafbase.com](https://grafbase.com/), create a new project and import the forked repository.

3. Your new project should now start deploying. In the meantime you can click the "Connect" button in your project overview and have a look at the JavaScript example. There are two headers there we want to use in Airplane when we set up Grafbase as a resource, `content-type` and `x-api-key`.

4. In Airplane go to `Settings` -> `Resources` and add a new GraphQL resource. The "Base URL" should be set to the URL you see under "Endpoint" in the Grafbase project overview. You also need to add the two headers from the JavaScript example, `content-type` and `x-api-key`. "Authentication" should be set to `None`.

5. Edit `result_to_grafbase.task.yaml` to use the GraphQL resource you just created

    ```
    graphql:
    resource: YOUR_GRAPHQL_RESOURCE_SLUG
    ```


6. Edit the sql task in `fetch_report.task.yaml` to use one an sql resource. 

    ```
    sql:
    resource: YOUR_SQL_RESOURCE_SLUG
    ```

7. Change `fetch_report.sql` into an sql query that will work with your sql resource. The actual columns or data does not matter but keep it to a reasonable size.

8. Deploy to Airplane with the airplay CLI. `airplane deploy *`

9. In the Airplane UI, run the `gdpr_report` task.



