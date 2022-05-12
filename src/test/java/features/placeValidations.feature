Feature: Validating Population API's

  @GetPopulation @Regression
  Scenario Outline: Verify population for perticular year
    Given GetPopulation Payload for "<year>"
    When user calls "getPopulationAPI" with "GET" http request
    Then the API call got success with status code 200
    Then verify population for the "<year>"
    And  verify year and year ID is same as "<year>"
    And  verify "<ID Nation>" "<Nation>" and "<Slug Nation>"
    Examples:
      | year | ID Nation| Nation        | Slug Nation   |
      | 2012 | 01000US  | United States | united-states |
      | 2013 | 01000US  | United States | united-states |
      | 2014 | 01000US  | United States | united-states |
      | 2015 | 01000US  | United States | united-states |
      | 2016 | 01000US  | United States | united-states |
      | 2017 | 01000US  | United States | united-states |
      | 2018 | 01000US  | United States | united-states |
      | 2019 | 01000US  | United States | united-states |
      | 2020 | 01000US  | United States | united-states |




	

	
	
	
	
	
	

	
	
	