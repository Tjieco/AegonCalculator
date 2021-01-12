package nl.quintor.aegon.calculator.rest.dto;

import com.sun.istack.NotNull;
import lombok.Data;
import nl.quintor.aegon.calculator.model.CalculationType;
import org.springframework.lang.Nullable;

@Data
public class CalculationDto {
    private int first;
    private int second;
    private String type;
    private double result;
}
