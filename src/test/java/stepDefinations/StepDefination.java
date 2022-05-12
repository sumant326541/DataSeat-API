package stepDefinations;

import static io.restassured.RestAssured.*;
import java.io.IOException;
import static org.junit.Assert.*;
import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import resources.APIResources;
import resources.Utils;

public class StepDefination extends Utils {
	RequestSpecification res;
	Response response;

	@Given("GetPopulation Payload for {string}")
	public void getPopulation_Payload(String year) throws IOException {
		res=given().spec(requestSpecification()).queryParam("year", year);
	}

	@When("user calls {string} with {string} http request")
	public void user_calls_with_http_request(String resource, String method) {
		//constructor will be called with value of resource which you pass
		APIResources resourceAPI = APIResources.valueOf(resource);

	 if (method.equalsIgnoreCase("GET"))
			response = res.when().get(resourceAPI.getResource());

	}
	
	@Then("the API call got success with status code {int}")
	public void the_API_call_got_success_with_status_code(Integer int1) {
		assertEquals(response.getStatusCode(),200);
	}

	@Then("verify population for the {string}")
	public void verify_Population_Of_the_Year(String year) {
		int population = response.jsonPath().getInt("data.Population[0]");
		System.out.println("Population of US for the "+year+": "+population);
	}

	@And("verify year and year ID is same as {string}")
	public void verify_Year_And_yearID_Is_Same(String expectedYear) {
		String Year =  response.jsonPath().getString("data.Year[0]");
		String IDYear =  response.jsonPath().getString("data.'ID Year'[0]");
		assertEquals(expectedYear,Year);
		assertEquals(expectedYear,IDYear);
	}

	@And("verify {string} {string} and {string}")
	public void verify_IDNation_And_Nation_And_SlugNation(String expectedIdNation,String ExpectedNation,String ExpectedSlugNation) {
		String IDNation =  response.jsonPath().getString("data.'ID Nation'[0]");
		String Nation =  response.jsonPath().getString("data.Nation[0]");
		String SlugNation =  response.jsonPath().getString("data.'Slug Nation'[0]");
		assertEquals(IDNation,expectedIdNation);
		assertEquals(Nation,ExpectedNation);
		assertEquals(ExpectedSlugNation,SlugNation);
	}

}
