(function() {
  "use strict";

  // angular.module("group", ["ngTable", "ngTableDemos"]);
  angular.module("group", ["ngTable"]);
  angular.module("group").controller("demoController", demoController);

  function demoController(NgTableParams) {
    var vm = this;
    vm.tableParams = new NgTableParams({
      // initial grouping
      group: 'country'
    }, {
      dataset: ngTableGroupedList
    });
  }

  var ngTableGroupedList = [
      { "name": "Karen", "age": 45, "money": 798, "country": "Czech Republic" },
      { "name": "Cat", "age": 49, "money": 749, "country": "Czech Republic" },
      { "name": "Bismark", "age": 48, "money": 672, "country": "Denmark" },
      { "name": "Markus", "age": 41, "money": 695, "country": "Costa Rica" },
      { "name": "Anthony", "age": 45, "money": 559, "country": "Japan" },
      { "name": "Alex", "age": 55, "money": 645, "country": "Czech Republic" },
      { "name": "Stephane", "age": 57, "money": 662, "country": "Japan" },
      { "name": "Alex", "age": 59, "money": 523, "country": "American Samoa" } 
  ];
    
  demoController.$inject = ["NgTableParams"];
  // demoController.$inject = ["NgTableParams", "ngTableGroupedList"];

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
