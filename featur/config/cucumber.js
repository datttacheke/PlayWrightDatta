module.exports = {
  default: {
    paths: ["/featur/features/*.feature"],
    require: ["./step_definitions/*.js"],
    format: ["progress-bar", "html:cucumber-report.html"],
    parallel: 1
  }
};