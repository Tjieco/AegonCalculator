package nl.quintor.aegon.calculator.rest.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nl.quintor.aegon.calculator.model.Calculation;
import nl.quintor.aegon.calculator.model.CalculationType;
import nl.quintor.aegon.calculator.rest.dto.CalculationDto;
import nl.quintor.aegon.calculator.rest.dto.CalculationPayload;
import nl.quintor.aegon.calculator.service.CalculationService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@WebMvcTest(value = CalculationController.class)
public class CalculationControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CalculationService calculationServiceMock;

    @Test
    public void testAdditionCalculation() throws Exception {
        CalculationPayload payload = new CalculationPayload();
        payload.setFirst(1);
        payload.setSecond(1);

        Calculation actual = new Calculation(1, 1, CalculationType.ADD);
        actual.setResult(2);
        given(calculationServiceMock.add(1, 1)).willReturn(actual);

        final ObjectMapper objectMapper = new Jackson2ObjectMapperBuilder().build();
        MockHttpServletResponse response = mockMvc.perform(
                post("/calculate/add")
                        .content(objectMapper.writeValueAsString(payload))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andReturn().getResponse();

        assertThat(response.getStatus(), is(200));
        CalculationDto calculation = objectMapper.readValue(response.getContentAsString(), CalculationDto.class);
        assertThat(calculation.getResult(), is(2.0));
    }
}
