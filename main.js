getAPIData().then((jobs) => {
  for (const job of job.results) {
    const jobHtml = createJobHtml(job)
    renderJob(jobHtml)
  }
})

