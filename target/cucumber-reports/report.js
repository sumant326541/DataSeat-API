$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/placeValidations.feature");
formatter.feature({
  "name": "Validating Place API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"\u003cyear\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "verify population for the \"\u003cyear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "verify year and year ID is same as \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify \"\u003cID Nation\u003e\" \"\u003cNation\u003e\" and \"\u003cSlug Nation\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "ID Nation",
        "Nation",
        "Slug Nation"
      ]
    },
    {
      "cells": [
        "2012",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2013",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2014",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2015",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2016",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2017",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2018",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2019",
        "01000US",
        "United States",
        "united-states"
      ]
    },
    {
      "cells": [
        "2020",
        "01000US",
        "United States",
        "united-states"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2012\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2012\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:245)\n\tat stepDefinations.StepDefination.verify_Population_Of_the_Year(StepDefination.java:111)\n\tat ✽.verify population for the \"2012\"(file:src/test/java/features/placeValidations.feature:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2012\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2013\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2013\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2013\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2014\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2014\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2014\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2015\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2015\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2015\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2016\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2016\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2016\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2017\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2017\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2017\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2018\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2018\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2018\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2019\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2019\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify population for perticular year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPlace"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@GetPopulation"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "GetPopulation Payload for \"2020\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.getPopulation_Payload(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"getPopulationAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify population for the \"2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_Population_Of_the_Year(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:245)\n\tat stepDefinations.StepDefination.verify_Population_Of_the_Year(StepDefination.java:111)\n\tat ✽.verify population for the \"2020\"(file:src/test/java/features/placeValidations.feature:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify year and year ID is same as \"2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_Year_And_yearID_Is_Same(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify \"01000US\" \"United States\" and \"united-states\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_IDNation_And_Nation_And_SlugNation(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});