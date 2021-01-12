package nl.quintor.aegon.calculator.service;

import org.springframework.stereotype.Component;

@Component
public class SimpleCalculator {
    public double add(int first, int second) {
        return first + (double) second;
    }

    public double subtract(int first, int second) {
        return first - (double) second;
    }

    public double multiply(int first, int second) {
        return first * (double) second;
    }

    public double divide(int first, int second) {
        return first / (double) second;
    }
}
