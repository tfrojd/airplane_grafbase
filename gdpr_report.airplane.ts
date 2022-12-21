import airplane from "airplane";


export default airplane.task(
  {
    slug: "gdpr_report",
    name: "gdpr_report (task)",
    parameters: {
      user_id: { name: "user_id", slug: "user_id", type: "shorttext" },
    },
    resources: [],
    // Optionally uncomment the following line to enable the workflow runtime.
    // The workflow runtime can run for significantly longer than the default
    // runtime, but it comes with a few restrictions. For more information,
    // see: https://docs.airplane.dev/tasks/runtimes
    //
    // runtime: "workflow"
  },
  async (params) => {
    const fetch_report = await airplane.execute<any>("fetch_report", {
      user_id: params.user_id,
    });

    const result_to_grafbase = await airplane.execute<any>(
      "result_to_grafbase",
      {
        report_content: JSON.stringify(fetch_report.output.Q1),
        user_id: params.user_id,
      }
    );


  }
);
