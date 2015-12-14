(function() {
  "use strict";

  angular.module("group", ["ngTable", "ngTableDemos"]);
  angular.module("group").controller("demoController", demoController);

  function demoController(NgTableParams, simpleList) {
    this.tableParams = new NgTableParams({
      // initial grouping
      group: "country"
    }, {
      dataset: simpleList
    });
  }

  demoController.$inject = ["NgTableParams", "ngTableGroupedList"];

  angular.module("group").controller("dynamicDemoController", dynamicDemoController);

  function dynamicDemoController(NgTableParams, simpleList) {
    this.cols = [{
      field: "country",
      title: "Country",
      sortable: "country",
      show: false,
      groupable: "country"
    }, {
      field: "name",
      title: "Name",
      sortable: "name",
      show: true,
      groupable: "name"
    }, {
      field: "age",
      title: "Age",
      sortable: "age",
      show: true,
      groupable: "age"
    }, {
      field: "money",
      title: "Money",
      sortable: "money",
      show: true
    }];

    this.tableParams = new NgTableParams({
      // initial grouping
      group: {
        country: "desc"
      }
    }, {
      dataset: simpleList,
      groupOptions: {
        isExpanded: false
      }
    });
  }
  
  dynamicDemoController.$inject = ["NgTableParams", "ngTableGroupedList"];

})();

(function() {
  "use strict";

  angular.module("group").run(configureDefaults);
  configureDefaults.$inject = ["ngTableDefaults"];

  function configureDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  }
})();
