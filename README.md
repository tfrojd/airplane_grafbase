# Using Grafbase to get Airplane task output as a GraphQL API

This is an example on how to send output from an Airplane task to Grafbase. The published task output is then available as a GraphQL API that could be consumed by a webapp or used in an Airplane view. 

The example is a hypothetical internal tool for a GDPR right of access request procedure that would work like this.

1. Data subject sends a request to get their data by email, fax or post.

2. Company employee inputs User ID of data subject in the `gdpr_report` task (Typescript task).

3. The `gdpr_report` task calls `fetch_report` task (SQL task) to search systems for personal data of the data subject.

4. The output of `fetch_report` is used as input in the `result_to_grafbase` task (GraphQL task) that writes the data to Grafbase using a GraphQL mutation.

5. The output is now available as a Grafbase GraphQL endpoint. The data subject is mailed a link to a webpage that uses the endpoint as a backend to show the personal data. (Note: Neither email functionality or webpage for viewing data is included in this repository.)


## How to get started

1. Fork this repository to your own Github account

2. On grafbase.com, 





 To deploy:
> `airplane deploy result_to_grafbase.task.yaml`

 To run locally:
> `airplane dev result_to_grafbase.task.yaml`


