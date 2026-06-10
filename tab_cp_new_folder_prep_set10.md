# NEBB TAB Study Course Prep Set 10 (Advanced Diagnostics & Calculations)

This set contains 310 tricky, field-aligned mock exam questions covering advanced thermodynamics, psychrometrics, curve diagnostics, and troubleshooting scenarios in English.

---

## Psychrometrics & Ice Thermodynamics

### Q1. A thermal energy storage basin contains 10 kg of ice at -10 C. An electric immersion heater rated at 5.0 kW with a heating efficiency of 85% is turned on to melt the ice and raise the water temperature to 20 C. How long will this process take?
* A) 17.2 minutes
* B) 22.5 minutes
* C) 12.8 minutes
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -10 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 10 \times 2.04 \times 10 = 204.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 10 \times 335 = 3350.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 20 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 10 \times 4.19 \times 20 = 838.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 204.0 + 3350.0 + 838.0 = 4392.0 \text{ kJ}$.
    Net heater output: $P_{net} = 5.0 \text{ kW} \times 0.85 = 4.250 \text{ kJ/s}$.
    Time $= \frac{4392.0}{4.250} = 1033.4 \text{ seconds} \approx 17.2 \text{ minutes}$.

### Q2. A thermal energy storage basin contains 25 kg of ice at -15 C. An electric immersion heater rated at 10.0 kW with a heating efficiency of 90% is turned on to melt the ice and raise the water temperature to 30 C. How long will this process take?
* A) 12.5 minutes
* B) 19.3 minutes
* C) 25.0 minutes
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -15 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 25 \times 2.04 \times 15 = 765.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 25 \times 335 = 8375.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 30 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 25 \times 4.19 \times 30 = 3142.5 \text{ kJ}$.
    Total Heat required: $Q_{total} = 765.0 + 8375.0 + 3142.5 = 12282.5 \text{ kJ}$.
    Net heater output: $P_{net} = 10.0 \text{ kW} \times 0.90 = 9.000 \text{ kJ/s}$.
    Time $= \frac{12282.5}{9.000} = 1364.7 \text{ seconds} \approx 22.7 \text{ minutes}$.

### Q3. A thermal energy storage basin contains 5 kg of ice at -5 C. An electric immersion heater rated at 2.5 kW with a heating efficiency of 80% is turned on to melt the ice and raise the water temperature to 15 C. How long will this process take?
* A) 16.5 minutes
* B) 21.0 minutes
* C) 11.2 minutes
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -5 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 5 \times 2.04 \times 5 = 51.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 5 \times 335 = 1675.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 15 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 5 \times 4.19 \times 15 = 314.3 \text{ kJ}$.
    Total Heat required: $Q_{total} = 51.0 + 1675.0 + 314.3 = 2040.2 \text{ kJ}$.
    Net heater output: $P_{net} = 2.5 \text{ kW} \times 0.80 = 2.000 \text{ kJ/s}$.
    Time $= \frac{2040.2}{2.000} = 1020.1 \text{ seconds} \approx 17.0 \text{ minutes}$.

### Q4. A thermal energy storage basin contains 50 kg of ice at -20 C. An electric immersion heater rated at 15.0 kW with a heating efficiency of 88% is turned on to melt the ice and raise the water temperature to 25 C. How long will this process take?
* A) 20.2 minutes
* B) 15.5 minutes
* C) 30.5 minutes
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -20 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 50 \times 2.04 \times 20 = 2040.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 50 \times 335 = 16750.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 25 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 50 \times 4.19 \times 25 = 5237.5 \text{ kJ}$.
    Total Heat required: $Q_{total} = 2040.0 + 16750.0 + 5237.5 = 24027.5 \text{ kJ}$.
    Net heater output: $P_{net} = 15.0 \text{ kW} \times 0.88 = 13.200 \text{ kJ/s}$.
    Time $= \frac{24027.5}{13.200} = 1820.3 \text{ seconds} \approx 30.3 \text{ minutes}$.

### Q5. A thermal energy storage basin contains 12 kg of ice at -8 C. An electric immersion heater rated at 6.0 kW with a heating efficiency of 92% is turned on to melt the ice and raise the water temperature to 18 C. How long will this process take?
* A) 10.2 minutes
* B) 14.1 minutes
* C) 18.5 minutes
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -8 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 12 \times 2.04 \times 8 = 195.8 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 12 \times 335 = 4020.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 18 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 12 \times 4.19 \times 18 = 905.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 195.8 + 4020.0 + 905.0 = 5120.9 \text{ kJ}$.
    Net heater output: $P_{net} = 6.0 \text{ kW} \times 0.92 = 5.520 \text{ kJ/s}$.
    Time $= \frac{5120.9}{5.520} = 927.7 \text{ seconds} \approx 15.5 \text{ minutes}$.

### Q6. A thermal energy storage basin contains 30 kg of ice at -12 C. An electric immersion heater rated at 12.0 kW with a heating efficiency of 87% is turned on to melt the ice and raise the water temperature to 35 C. How long will this process take?
* A) 24.3 minutes
* B) 31.2 minutes
* C) 18.5 minutes
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -12 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 30 \times 2.04 \times 12 = 734.4 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 30 \times 335 = 10050.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 35 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 30 \times 4.19 \times 35 = 4399.5 \text{ kJ}$.
    Total Heat required: $Q_{total} = 734.4 + 10050.0 + 4399.5 = 15183.9 \text{ kJ}$.
    Net heater output: $P_{net} = 12.0 \text{ kW} \times 0.87 = 10.440 \text{ kJ/s}$.
    Time $= \frac{15183.9}{10.440} = 1454.4 \text{ seconds} \approx 24.2 \text{ minutes}$.

### Q7. A thermal energy storage basin contains 8 kg of ice at -6 C. An electric immersion heater rated at 4.0 kW with a heating efficiency of 82% is turned on to melt the ice and raise the water temperature to 22 C. How long will this process take?
* A) 12.5 minutes
* B) 15.0 minutes
* C) 18.0 minutes
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -6 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 8 \times 2.04 \times 6 = 97.9 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 8 \times 335 = 2680.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 22 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 8 \times 4.19 \times 22 = 737.4 \text{ kJ}$.
    Total Heat required: $Q_{total} = 97.9 + 2680.0 + 737.4 = 3515.4 \text{ kJ}$.
    Net heater output: $P_{net} = 4.0 \text{ kW} \times 0.82 = 3.280 \text{ kJ/s}$.
    Time $= \frac{3515.4}{3.280} = 1071.8 \text{ seconds} \approx 17.9 \text{ minutes}$.

### Q8. A thermal energy storage basin contains 15 kg of ice at -18 C. An electric immersion heater rated at 8.0 kW with a heating efficiency of 95% is turned on to melt the ice and raise the water temperature to 40 C. How long will this process take?
* A) 12.2 minutes
* B) 16.4 minutes
* C) 22.8 minutes
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -18 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 15 \times 2.04 \times 18 = 550.8 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 15 \times 335 = 5025.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 40 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 15 \times 4.19 \times 40 = 2514.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 550.8 + 5025.0 + 2514.0 = 8089.8 \text{ kJ}$.
    Net heater output: $P_{net} = 8.0 \text{ kW} \times 0.95 = 7.600 \text{ kJ/s}$.
    Time $= \frac{8089.8}{7.600} = 1064.4 \text{ seconds} \approx 17.7 \text{ minutes}$.

### Q9. A thermal energy storage basin contains 40 kg of ice at -10 C. An electric immersion heater rated at 10.0 kW with a heating efficiency of 75% is turned on to melt the ice and raise the water temperature to 10 C. How long will this process take?
* A) 28.5 minutes
* B) 34.0 minutes
* C) 41.5 minutes
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -10 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 40 \times 2.04 \times 10 = 816.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 40 \times 335 = 13400.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 10 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 40 \times 4.19 \times 10 = 1676.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 816.0 + 13400.0 + 1676.0 = 15892.0 \text{ kJ}$.
    Net heater output: $P_{net} = 10.0 \text{ kW} \times 0.75 = 7.500 \text{ kJ/s}$.
    Time $= \frac{15892.0}{7.500} = 2118.9 \text{ seconds} \approx 35.3 \text{ minutes}$.

### Q10. A thermal energy storage basin contains 20 kg of ice at -5 C. An electric immersion heater rated at 5.0 kW with a heating efficiency of 80% is turned on to melt the ice and raise the water temperature to 5 C. How long will this process take?
* A) 31.9 minutes
* B) 38.5 minutes
* C) 25.2 minutes
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for each phase:
    1. Heat solid ice from -5 C to 0 C ($C_{p,ice} = 2.04 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_1 = 20 \times 2.04 \times 5 = 204.0 \text{ kJ}$.
    2. Melt ice at 0 C ($h_{sf} = 335 \text{ kJ/kg}$): $Q_2 = 20 \times 335 = 6700.0 \text{ kJ}$.
    3. Heat liquid water from 0 C to 5 C ($C_{p,water} = 4.19 \text{ kJ/kg}\cdot^\circ\text{C}$): $Q_3 = 20 \times 4.19 \times 5 = 419.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 204.0 + 6700.0 + 419.0 = 7323.0 \text{ kJ}$.
    Net heater output: $P_{net} = 5.0 \text{ kW} \times 0.80 = 4.000 \text{ kJ/s}$.
    Time $= \frac{7323.0}{4.000} = 1830.8 \text{ seconds} \approx 30.5 \text{ minutes}$.

### Q11. An outdoor hydronic pipe freeze protection loop needs to melt 100 lb of ice at 10 F and heat the resulting water to 60 F. A heating coil provides 25,000 Btuh with an efficiency of 85%. How long will the thawing process take?
* A) 0.52 hours
* B) 0.81 hours
* C) 1.15 hours
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 10 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 100 \times 0.48 \times 22 = 1056.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 100 \times 144 = 14400.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 60 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 100 \times 1.00 \times 28 = 2800.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 1056.0 + 14400.0 + 2800.0 = 18256.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 25,000 \times 0.85 = 21250.0 \text{ Btuh}$.
    Time $= \frac{18256.0}{21250.0} = 0.86 \text{ hours}$.

### Q12. An outdoor hydronic pipe freeze protection loop needs to melt 250 lb of ice at 0 F and heat the resulting water to 70 F. A heating coil provides 50,000 Btuh with an efficiency of 90%. How long will the thawing process take?
* A) 0.98 hours
* B) 1.35 hours
* C) 0.75 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 0 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 250 \times 0.48 \times 32 = 3840.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 250 \times 144 = 36000.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 70 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 250 \times 1.00 \times 38 = 9500.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 3840.0 + 36000.0 + 9500.0 = 49340.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 50,000 \times 0.90 = 45000.0 \text{ Btuh}$.
    Time $= \frac{49340.0}{45000.0} = 1.10 \text{ hours}$.

### Q13. An outdoor hydronic pipe freeze protection loop needs to melt 50 lb of ice at 15 F and heat the resulting water to 80 F. A heating coil provides 12,000 Btuh with an efficiency of 80%. How long will the thawing process take?
* A) 0.65 hours
* B) 0.82 hours
* C) 0.99 hours
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 15 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 50 \times 0.48 \times 17 = 408.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 50 \times 144 = 7200.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 80 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 50 \times 1.00 \times 48 = 2400.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 408.0 + 7200.0 + 2400.0 = 10008.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 12,000 \times 0.80 = 9600.0 \text{ Btuh}$.
    Time $= \frac{10008.0}{9600.0} = 1.04 \text{ hours}$.

### Q14. An outdoor hydronic pipe freeze protection loop needs to melt 500 lb of ice at -5 F and heat the resulting water to 50 F. A heating coil provides 100,000 Btuh with an efficiency of 88%. How long will the thawing process take?
* A) 1.01 hours
* B) 1.42 hours
* C) 0.85 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from -5 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 500 \times 0.48 \times 37 = 8880.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 500 \times 144 = 72000.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 50 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 500 \times 1.00 \times 18 = 9000.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 8880.0 + 72000.0 + 9000.0 = 89880.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 100,000 \times 0.88 = 88000.0 \text{ Btuh}$.
    Time $= \frac{89880.0}{88000.0} = 1.02 \text{ hours}$.

### Q15. An outdoor hydronic pipe freeze protection loop needs to melt 150 lb of ice at 5 F and heat the resulting water to 65 F. A heating coil provides 40,000 Btuh with an efficiency of 92%. How long will the thawing process take?
* A) 0.52 hours
* B) 0.69 hours
* C) 0.88 hours
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 5 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 150 \times 0.48 \times 27 = 1944.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 150 \times 144 = 21600.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 65 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 150 \times 1.00 \times 33 = 4950.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 1944.0 + 21600.0 + 4950.0 = 28494.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 40,000 \times 0.92 = 36800.0 \text{ Btuh}$.
    Time $= \frac{28494.0}{36800.0} = 0.77 \text{ hours}$.

### Q16. An outdoor hydronic pipe freeze protection loop needs to melt 300 lb of ice at 12 F and heat the resulting water to 75 F. A heating coil provides 60,000 Btuh with an efficiency of 85%. How long will the thawing process take?
* A) 0.85 hours
* B) 0.99 hours
* C) 1.12 hours
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 12 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 300 \times 0.48 \times 20 = 2880.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 300 \times 144 = 43200.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 75 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 300 \times 1.00 \times 43 = 12900.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 2880.0 + 43200.0 + 12900.0 = 58980.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 60,000 \times 0.85 = 51000.0 \text{ Btuh}$.
    Time $= \frac{58980.0}{51000.0} = 1.16 \text{ hours}$.

### Q17. An outdoor hydronic pipe freeze protection loop needs to melt 80 lb of ice at 8 F and heat the resulting water to 90 F. A heating coil provides 20,000 Btuh with an efficiency of 80%. How long will the thawing process take?
* A) 0.93 hours
* B) 1.15 hours
* C) 0.72 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 8 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 80 \times 0.48 \times 24 = 921.6 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 80 \times 144 = 11520.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 90 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 80 \times 1.00 \times 58 = 4640.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 921.6 + 11520.0 + 4640.0 = 17081.6 \text{ Btu}$.
    Net heater output: $Q_{net} = 20,000 \times 0.80 = 16000.0 \text{ Btuh}$.
    Time $= \frac{17081.6}{16000.0} = 1.07 \text{ hours}$.

### Q18. An outdoor hydronic pipe freeze protection loop needs to melt 200 lb of ice at -10 F and heat the resulting water to 55 F. A heating coil provides 35,000 Btuh with an efficiency of 95%. How long will the thawing process take?
* A) 0.82 hours
* B) 1.02 hours
* C) 1.25 hours
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from -10 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 200 \times 0.48 \times 42 = 4032.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 200 \times 144 = 28800.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 55 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 200 \times 1.00 \times 23 = 4600.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 4032.0 + 28800.0 + 4600.0 = 37432.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 35,000 \times 0.95 = 33250.0 \text{ Btuh}$.
    Time $= \frac{37432.0}{33250.0} = 1.13 \text{ hours}$.

### Q19. An outdoor hydronic pipe freeze protection loop needs to melt 400 lb of ice at 10 F and heat the resulting water to 45 F. A heating coil provides 80,000 Btuh with an efficiency of 75%. How long will the thawing process take?
* A) 0.85 hours
* B) 1.00 hours
* C) 1.15 hours
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 10 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 400 \times 0.48 \times 22 = 4224.0 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 400 \times 144 = 57600.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 45 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 400 \times 1.00 \times 13 = 5200.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 4224.0 + 57600.0 + 5200.0 = 67024.0 \text{ Btu}$.
    Net heater output: $Q_{net} = 80,000 \times 0.75 = 60000.0 \text{ Btuh}$.
    Time $= \frac{67024.0}{60000.0} = 1.12 \text{ hours}$.

### Q20. An outdoor hydronic pipe freeze protection loop needs to melt 120 lb of ice at 15 F and heat the resulting water to 85 F. A heating coil provides 25,000 Btuh with an efficiency of 90%. How long will the thawing process take?
* A) 0.94 hours
* B) 1.21 hours
* C) 0.78 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required in U.S. units:
    1. Heat solid ice from 15 F to 32 F ($C_{p,ice} = 0.48 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_1 = 120 \times 0.48 \times 17 = 979.2 \text{ Btu}$.
    2. Melt ice at 32 F ($h_{sf} = 144 \text{ Btu/lb}$): $Q_2 = 120 \times 144 = 17280.0 \text{ Btu}$.
    3. Heat liquid water from 32 F to 85 F ($C_{p,water} = 1.00 \text{ Btu/lb}\cdot^\circ\text{F}$): $Q_3 = 120 \times 1.00 \times 53 = 6360.0 \text{ Btu}$.
    Total Heat required: $Q_{total} = 979.2 + 17280.0 + 6360.0 = 24619.2 \text{ Btu}$.
    Net heater output: $Q_{net} = 25,000 \times 0.90 = 22500.0 \text{ Btuh}$.
    Time $= \frac{24619.2}{22500.0} = 1.09 \text{ hours}$.

### Q21. A steam humidifier canister evaporates 5 kg of water starting from a supply temperature of 20 C. The electric heating elements consume 10.0 kW with a heat transfer efficiency of 90%. How long will it take to completely boil off the water?
* A) 0.41 hours
* B) 0.55 hours
* C) 0.32 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for evaporation:
    1. Heat water from 20 C to 100 C: $Q_1 = 5 \times 4.19 \times 80 = 1676.0 \text{ kJ}$.
    2. Vaporize water at 100 C ($h_{fg} = 2256 \text{ kJ/kg}$): $Q_2 = 5 \times 2256 = 11280.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 1676.0 + 11280.0 = 12956.0 \text{ kJ}$.
    Net heater output: $P_{net} = 10.0 \times 0.90 = 9.000 \text{ kJ/s}$.
    Time $= \frac{12956.0}{9.000} = 1439.6 \text{ seconds} \approx 0.40 \text{ hours}$.

### Q22. A steam humidifier canister evaporates 10 kg of water starting from a supply temperature of 15 C. The electric heating elements consume 20.0 kW with a heat transfer efficiency of 85%. How long will it take to completely boil off the water?
* A) 0.32 hours
* B) 0.43 hours
* C) 0.58 hours
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required for evaporation:
    1. Heat water from 15 C to 100 C: $Q_1 = 10 \times 4.19 \times 85 = 3561.5 \text{ kJ}$.
    2. Vaporize water at 100 C ($h_{fg} = 2256 \text{ kJ/kg}$): $Q_2 = 10 \times 2256 = 22560.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 3561.5 + 22560.0 = 26121.5 \text{ kJ}$.
    Net heater output: $P_{net} = 20.0 \times 0.85 = 17.000 \text{ kJ/s}$.
    Time $= \frac{26121.5}{17.000} = 1536.6 \text{ seconds} \approx 0.43 \text{ hours}$.

### Q23. A steam humidifier canister evaporates 3 kg of water starting from a supply temperature of 25 C. The electric heating elements consume 5.0 kW with a heat transfer efficiency of 80%. How long will it take to completely boil off the water?
* A) 0.38 hours
* B) 0.45 hours
* C) 0.54 hours
* **Correct Answer & Explanation: C**
  * **Explanation:** Calculate the heat required for evaporation:
    1. Heat water from 25 C to 100 C: $Q_1 = 3 \times 4.19 \times 75 = 942.8 \text{ kJ}$.
    2. Vaporize water at 100 C ($h_{fg} = 2256 \text{ kJ/kg}$): $Q_2 = 3 \times 2256 = 6768.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 942.8 + 6768.0 = 7710.8 \text{ kJ}$.
    Net heater output: $P_{net} = 5.0 \times 0.80 = 4.000 \text{ kJ/s}$.
    Time $= \frac{7710.8}{4.000} = 1927.7 \text{ seconds} \approx 0.54 \text{ hours}$.

### Q24. A steam humidifier canister evaporates 20 kg of water starting from a supply temperature of 10 C. The electric heating elements consume 30.0 kW with a heat transfer efficiency of 92%. How long will it take to completely boil off the water?
* A) 0.51 hours
* B) 0.68 hours
* C) 0.42 hours
* **Correct Answer & Explanation: A**
  * **Explanation:** Calculate the heat required for evaporation:
    1. Heat water from 10 C to 100 C: $Q_1 = 20 \times 4.19 \times 90 = 7542.0 \text{ kJ}$.
    2. Vaporize water at 100 C ($h_{fg} = 2256 \text{ kJ/kg}$): $Q_2 = 20 \times 2256 = 45120.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 7542.0 + 45120.0 = 52662.0 \text{ kJ}$.
    Net heater output: $P_{net} = 30.0 \times 0.92 = 27.600 \text{ kJ/s}$.
    Time $= \frac{52662.0}{27.600} = 1908.0 \text{ seconds} \approx 0.53 \text{ hours}$.

### Q25. A steam humidifier canister evaporates 8 kg of water starting from a supply temperature of 30 C. The electric heating elements consume 15.0 kW with a heat transfer efficiency of 88%. How long will it take to completely boil off the water?
* A) 0.32 hours
* B) 0.43 hours
* C) 0.55 hours
* **Correct Answer & Explanation: B**
  * **Explanation:** Calculate the heat required for evaporation:
    1. Heat water from 30 C to 100 C: $Q_1 = 8 \times 4.19 \times 70 = 2346.4 \text{ kJ}$.
    2. Vaporize water at 100 C ($h_{fg} = 2256 \text{ kJ/kg}$): $Q_2 = 8 \times 2256 = 18048.0 \text{ kJ}$.
    Total Heat required: $Q_{total} = 2346.4 + 18048.0 = 20394.4 \text{ kJ}$.
    Net heater output: $P_{net} = 15.0 \times 0.88 = 13.200 \text{ kJ/s}$.
    Time $= \frac{20394.4}{13.200} = 1545.0 \text{ seconds} \approx 0.43 \text{ hours}$.

### Q26. Calculate the total British Thermal Units (Btu) required to melt 15 lb of ice starting at -5 F to water at a solid liquid mixture state of exactly 32 F.
* A) 1941 Btu
* B) 2426 Btu
* C) 2912 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 15 \text{ lb} \times 0.48 \times 37 = 266.4 \text{ Btu}$. To melt it requires: $Q_2 = 15 \text{ lb} \times 144 = 2160.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 2426 \text{ Btu}$.

### Q27. Calculate the total British Thermal Units (Btu) required to melt 17 lb of ice starting at -6 F to water at a solid liquid mixture state of exactly 32 F.
* A) 2206 Btu
* B) 2758 Btu
* C) 3310 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 17 \text{ lb} \times 0.48 \times 38 = 310.1 \text{ Btu}$. To melt it requires: $Q_2 = 17 \text{ lb} \times 144 = 2448.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 2758 \text{ Btu}$.

### Q28. Calculate the total British Thermal Units (Btu) required to melt 19 lb of ice starting at -7 F to water at a solid liquid mixture state of exactly 32 F.
* A) 2473 Btu
* B) 3092 Btu
* C) 3710 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 19 \text{ lb} \times 0.48 \times 39 = 355.7 \text{ Btu}$. To melt it requires: $Q_2 = 19 \text{ lb} \times 144 = 2736.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 3092 \text{ Btu}$.

### Q29. Calculate the total British Thermal Units (Btu) required to melt 21 lb of ice starting at -8 F to water at a solid liquid mixture state of exactly 32 F.
* A) 2742 Btu
* B) 3427 Btu
* C) 4113 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 21 \text{ lb} \times 0.48 \times 40 = 403.2 \text{ Btu}$. To melt it requires: $Q_2 = 21 \text{ lb} \times 144 = 3024.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 3427 \text{ Btu}$.

### Q30. Calculate the total British Thermal Units (Btu) required to melt 23 lb of ice starting at -9 F to water at a solid liquid mixture state of exactly 32 F.
* A) 3012 Btu
* B) 3765 Btu
* C) 4518 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 23 \text{ lb} \times 0.48 \times 41 = 452.6 \text{ Btu}$. To melt it requires: $Q_2 = 23 \text{ lb} \times 144 = 3312.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 3765 \text{ Btu}$.

### Q31. Calculate the total British Thermal Units (Btu) required to melt 25 lb of ice starting at -10 F to water at a solid liquid mixture state of exactly 32 F.
* A) 3283 Btu
* B) 4104 Btu
* C) 4925 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 25 \text{ lb} \times 0.48 \times 42 = 504.0 \text{ Btu}$. To melt it requires: $Q_2 = 25 \text{ lb} \times 144 = 3600.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 4104 \text{ Btu}$.

### Q32. Calculate the total British Thermal Units (Btu) required to melt 27 lb of ice starting at -11 F to water at a solid liquid mixture state of exactly 32 F.
* A) 3556 Btu
* B) 4445 Btu
* C) 5334 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 27 \text{ lb} \times 0.48 \times 43 = 557.3 \text{ Btu}$. To melt it requires: $Q_2 = 27 \text{ lb} \times 144 = 3888.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 4445 \text{ Btu}$.

### Q33. Calculate the total British Thermal Units (Btu) required to melt 29 lb of ice starting at -12 F to water at a solid liquid mixture state of exactly 32 F.
* A) 3831 Btu
* B) 4788 Btu
* C) 5746 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 29 \text{ lb} \times 0.48 \times 44 = 612.5 \text{ Btu}$. To melt it requires: $Q_2 = 29 \text{ lb} \times 144 = 4176.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 4788 \text{ Btu}$.

### Q34. Calculate the total British Thermal Units (Btu) required to melt 31 lb of ice starting at -13 F to water at a solid liquid mixture state of exactly 32 F.
* A) 4107 Btu
* B) 5134 Btu
* C) 6160 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 31 \text{ lb} \times 0.48 \times 45 = 669.6 \text{ Btu}$. To melt it requires: $Q_2 = 31 \text{ lb} \times 144 = 4464.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 5134 \text{ Btu}$.

### Q35. Calculate the total British Thermal Units (Btu) required to melt 33 lb of ice starting at -14 F to water at a solid liquid mixture state of exactly 32 F.
* A) 4385 Btu
* B) 5481 Btu
* C) 6577 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 33 \text{ lb} \times 0.48 \times 46 = 728.6 \text{ Btu}$. To melt it requires: $Q_2 = 33 \text{ lb} \times 144 = 4752.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 5481 \text{ Btu}$.

### Q36. Calculate the total British Thermal Units (Btu) required to melt 35 lb of ice starting at -15 F to water at a solid liquid mixture state of exactly 32 F.
* A) 4664 Btu
* B) 5830 Btu
* C) 6996 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 35 \text{ lb} \times 0.48 \times 47 = 789.6 \text{ Btu}$. To melt it requires: $Q_2 = 35 \text{ lb} \times 144 = 5040.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 5830 \text{ Btu}$.

### Q37. Calculate the total British Thermal Units (Btu) required to melt 37 lb of ice starting at -16 F to water at a solid liquid mixture state of exactly 32 F.
* A) 4944 Btu
* B) 6180 Btu
* C) 7417 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 37 \text{ lb} \times 0.48 \times 48 = 852.5 \text{ Btu}$. To melt it requires: $Q_2 = 37 \text{ lb} \times 144 = 5328.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 6180 \text{ Btu}$.

### Q38. Calculate the total British Thermal Units (Btu) required to melt 39 lb of ice starting at -17 F to water at a solid liquid mixture state of exactly 32 F.
* A) 5227 Btu
* B) 6533 Btu
* C) 7840 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 39 \text{ lb} \times 0.48 \times 49 = 917.3 \text{ Btu}$. To melt it requires: $Q_2 = 39 \text{ lb} \times 144 = 5616.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 6533 \text{ Btu}$.

### Q39. Calculate the total British Thermal Units (Btu) required to melt 41 lb of ice starting at -18 F to water at a solid liquid mixture state of exactly 32 F.
* A) 5510 Btu
* B) 6888 Btu
* C) 8266 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 41 \text{ lb} \times 0.48 \times 50 = 984.0 \text{ Btu}$. To melt it requires: $Q_2 = 41 \text{ lb} \times 144 = 5904.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 6888 \text{ Btu}$.

### Q40. Calculate the total British Thermal Units (Btu) required to melt 43 lb of ice starting at -19 F to water at a solid liquid mixture state of exactly 32 F.
* A) 5796 Btu
* B) 7245 Btu
* C) 8694 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 43 \text{ lb} \times 0.48 \times 51 = 1052.6 \text{ Btu}$. To melt it requires: $Q_2 = 43 \text{ lb} \times 144 = 6192.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 7245 \text{ Btu}$.

### Q41. Calculate the total British Thermal Units (Btu) required to melt 45 lb of ice starting at -20 F to water at a solid liquid mixture state of exactly 32 F.
* A) 6083 Btu
* B) 7603 Btu
* C) 9124 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 45 \text{ lb} \times 0.48 \times 52 = 1123.2 \text{ Btu}$. To melt it requires: $Q_2 = 45 \text{ lb} \times 144 = 6480.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 7603 \text{ Btu}$.

### Q42. Calculate the total British Thermal Units (Btu) required to melt 47 lb of ice starting at -21 F to water at a solid liquid mixture state of exactly 32 F.
* A) 6371 Btu
* B) 7964 Btu
* C) 9556 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 47 \text{ lb} \times 0.48 \times 53 = 1195.7 \text{ Btu}$. To melt it requires: $Q_2 = 47 \text{ lb} \times 144 = 6768.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 7964 \text{ Btu}$.

### Q43. Calculate the total British Thermal Units (Btu) required to melt 49 lb of ice starting at -22 F to water at a solid liquid mixture state of exactly 32 F.
* A) 6661 Btu
* B) 8326 Btu
* C) 9991 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 49 \text{ lb} \times 0.48 \times 54 = 1270.1 \text{ Btu}$. To melt it requires: $Q_2 = 49 \text{ lb} \times 144 = 7056.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 8326 \text{ Btu}$.

### Q44. Calculate the total British Thermal Units (Btu) required to melt 51 lb of ice starting at -23 F to water at a solid liquid mixture state of exactly 32 F.
* A) 6952 Btu
* B) 8690 Btu
* C) 10428 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 51 \text{ lb} \times 0.48 \times 55 = 1346.4 \text{ Btu}$. To melt it requires: $Q_2 = 51 \text{ lb} \times 144 = 7344.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 8690 \text{ Btu}$.

### Q45. Calculate the total British Thermal Units (Btu) required to melt 53 lb of ice starting at -24 F to water at a solid liquid mixture state of exactly 32 F.
* A) 7245 Btu
* B) 9057 Btu
* C) 10868 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 53 \text{ lb} \times 0.48 \times 56 = 1424.6 \text{ Btu}$. To melt it requires: $Q_2 = 53 \text{ lb} \times 144 = 7632.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 9057 \text{ Btu}$.

### Q46. Calculate the total British Thermal Units (Btu) required to melt 55 lb of ice starting at -25 F to water at a solid liquid mixture state of exactly 32 F.
* A) 7540 Btu
* B) 9425 Btu
* C) 11310 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 55 \text{ lb} \times 0.48 \times 57 = 1504.8 \text{ Btu}$. To melt it requires: $Q_2 = 55 \text{ lb} \times 144 = 7920.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 9425 \text{ Btu}$.

### Q47. Calculate the total British Thermal Units (Btu) required to melt 57 lb of ice starting at -26 F to water at a solid liquid mixture state of exactly 32 F.
* A) 7836 Btu
* B) 9795 Btu
* C) 11754 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 57 \text{ lb} \times 0.48 \times 58 = 1586.9 \text{ Btu}$. To melt it requires: $Q_2 = 57 \text{ lb} \times 144 = 8208.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 9795 \text{ Btu}$.

### Q48. Calculate the total British Thermal Units (Btu) required to melt 59 lb of ice starting at -27 F to water at a solid liquid mixture state of exactly 32 F.
* A) 8134 Btu
* B) 10167 Btu
* C) 12200 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 59 \text{ lb} \times 0.48 \times 59 = 1670.9 \text{ Btu}$. To melt it requires: $Q_2 = 59 \text{ lb} \times 144 = 8496.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 10167 \text{ Btu}$.

### Q49. Calculate the total British Thermal Units (Btu) required to melt 61 lb of ice starting at -28 F to water at a solid liquid mixture state of exactly 32 F.
* A) 8433 Btu
* B) 10541 Btu
* C) 12649 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 61 \text{ lb} \times 0.48 \times 60 = 1756.8 \text{ Btu}$. To melt it requires: $Q_2 = 61 \text{ lb} \times 144 = 8784.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 10541 \text{ Btu}$.

### Q50. Calculate the total British Thermal Units (Btu) required to melt 63 lb of ice starting at -29 F to water at a solid liquid mixture state of exactly 32 F.
* A) 8733 Btu
* B) 10917 Btu
* C) 13100 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 63 \text{ lb} \times 0.48 \times 61 = 1844.6 \text{ Btu}$. To melt it requires: $Q_2 = 63 \text{ lb} \times 144 = 9072.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 10917 \text{ Btu}$.

### Q51. Calculate the total British Thermal Units (Btu) required to melt 65 lb of ice starting at -30 F to water at a solid liquid mixture state of exactly 32 F.
* A) 9036 Btu
* B) 11294 Btu
* C) 13553 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 65 \text{ lb} \times 0.48 \times 62 = 1934.4 \text{ Btu}$. To melt it requires: $Q_2 = 65 \text{ lb} \times 144 = 9360.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 11294 \text{ Btu}$.

### Q52. Calculate the total British Thermal Units (Btu) required to melt 67 lb of ice starting at -31 F to water at a solid liquid mixture state of exactly 32 F.
* A) 9339 Btu
* B) 11674 Btu
* C) 14009 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 67 \text{ lb} \times 0.48 \times 63 = 2026.1 \text{ Btu}$. To melt it requires: $Q_2 = 67 \text{ lb} \times 144 = 9648.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 11674 \text{ Btu}$.

### Q53. Calculate the total British Thermal Units (Btu) required to melt 69 lb of ice starting at -32 F to water at a solid liquid mixture state of exactly 32 F.
* A) 9645 Btu
* B) 12056 Btu
* C) 14467 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 69 \text{ lb} \times 0.48 \times 64 = 2119.7 \text{ Btu}$. To melt it requires: $Q_2 = 69 \text{ lb} \times 144 = 9936.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 12056 \text{ Btu}$.

### Q54. Calculate the total British Thermal Units (Btu) required to melt 71 lb of ice starting at -33 F to water at a solid liquid mixture state of exactly 32 F.
* A) 9951 Btu
* B) 12439 Btu
* C) 14927 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 71 \text{ lb} \times 0.48 \times 65 = 2215.2 \text{ Btu}$. To melt it requires: $Q_2 = 71 \text{ lb} \times 144 = 10224.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 12439 \text{ Btu}$.

### Q55. Calculate the total British Thermal Units (Btu) required to melt 73 lb of ice starting at -34 F to water at a solid liquid mixture state of exactly 32 F.
* A) 10260 Btu
* B) 12825 Btu
* C) 15390 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 73 \text{ lb} \times 0.48 \times 66 = 2312.6 \text{ Btu}$. To melt it requires: $Q_2 = 73 \text{ lb} \times 144 = 10512.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 12825 \text{ Btu}$.

### Q56. Calculate the total British Thermal Units (Btu) required to melt 75 lb of ice starting at -35 F to water at a solid liquid mixture state of exactly 32 F.
* A) 10570 Btu
* B) 13212 Btu
* C) 15854 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 75 \text{ lb} \times 0.48 \times 67 = 2412.0 \text{ Btu}$. To melt it requires: $Q_2 = 75 \text{ lb} \times 144 = 10800.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 13212 \text{ Btu}$.

### Q57. Calculate the total British Thermal Units (Btu) required to melt 77 lb of ice starting at -36 F to water at a solid liquid mixture state of exactly 32 F.
* A) 10881 Btu
* B) 13601 Btu
* C) 16322 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 77 \text{ lb} \times 0.48 \times 68 = 2513.3 \text{ Btu}$. To melt it requires: $Q_2 = 77 \text{ lb} \times 144 = 11088.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 13601 \text{ Btu}$.

### Q58. Calculate the total British Thermal Units (Btu) required to melt 79 lb of ice starting at -37 F to water at a solid liquid mixture state of exactly 32 F.
* A) 11194 Btu
* B) 13992 Btu
* C) 16791 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 79 \text{ lb} \times 0.48 \times 69 = 2616.5 \text{ Btu}$. To melt it requires: $Q_2 = 79 \text{ lb} \times 144 = 11376.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 13992 \text{ Btu}$.

### Q59. Calculate the total British Thermal Units (Btu) required to melt 81 lb of ice starting at -38 F to water at a solid liquid mixture state of exactly 32 F.
* A) 11508 Btu
* B) 14386 Btu
* C) 17263 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 81 \text{ lb} \times 0.48 \times 70 = 2721.6 \text{ Btu}$. To melt it requires: $Q_2 = 81 \text{ lb} \times 144 = 11664.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 14386 \text{ Btu}$.

### Q60. Calculate the total British Thermal Units (Btu) required to melt 83 lb of ice starting at -39 F to water at a solid liquid mixture state of exactly 32 F.
* A) 11825 Btu
* B) 14781 Btu
* C) 17737 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 83 \text{ lb} \times 0.48 \times 71 = 2828.6 \text{ Btu}$. To melt it requires: $Q_2 = 83 \text{ lb} \times 144 = 11952.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 14781 \text{ Btu}$.

### Q61. Calculate the total British Thermal Units (Btu) required to melt 85 lb of ice starting at -40 F to water at a solid liquid mixture state of exactly 32 F.
* A) 12142 Btu
* B) 15178 Btu
* C) 18213 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 85 \text{ lb} \times 0.48 \times 72 = 2937.6 \text{ Btu}$. To melt it requires: $Q_2 = 85 \text{ lb} \times 144 = 12240.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 15178 \text{ Btu}$.

### Q62. Calculate the total British Thermal Units (Btu) required to melt 87 lb of ice starting at -41 F to water at a solid liquid mixture state of exactly 32 F.
* A) 12461 Btu
* B) 15576 Btu
* C) 18692 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 87 \text{ lb} \times 0.48 \times 73 = 3048.5 \text{ Btu}$. To melt it requires: $Q_2 = 87 \text{ lb} \times 144 = 12528.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 15576 \text{ Btu}$.

### Q63. Calculate the total British Thermal Units (Btu) required to melt 89 lb of ice starting at -42 F to water at a solid liquid mixture state of exactly 32 F.
* A) 12782 Btu
* B) 15977 Btu
* C) 19173 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 89 \text{ lb} \times 0.48 \times 74 = 3161.3 \text{ Btu}$. To melt it requires: $Q_2 = 89 \text{ lb} \times 144 = 12816.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 15977 \text{ Btu}$.

### Q64. Calculate the total British Thermal Units (Btu) required to melt 91 lb of ice starting at -43 F to water at a solid liquid mixture state of exactly 32 F.
* A) 13104 Btu
* B) 16380 Btu
* C) 19656 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 91 \text{ lb} \times 0.48 \times 75 = 3276.0 \text{ Btu}$. To melt it requires: $Q_2 = 91 \text{ lb} \times 144 = 13104.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 16380 \text{ Btu}$.

### Q65. Calculate the total British Thermal Units (Btu) required to melt 93 lb of ice starting at -44 F to water at a solid liquid mixture state of exactly 32 F.
* A) 13428 Btu
* B) 16785 Btu
* C) 20142 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 93 \text{ lb} \times 0.48 \times 76 = 3392.6 \text{ Btu}$. To melt it requires: $Q_2 = 93 \text{ lb} \times 144 = 13392.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 16785 \text{ Btu}$.

### Q66. Calculate the total British Thermal Units (Btu) required to melt 95 lb of ice starting at -45 F to water at a solid liquid mixture state of exactly 32 F.
* A) 13753 Btu
* B) 17191 Btu
* C) 20629 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 95 \text{ lb} \times 0.48 \times 77 = 3511.2 \text{ Btu}$. To melt it requires: $Q_2 = 95 \text{ lb} \times 144 = 13680.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 17191 \text{ Btu}$.

### Q67. Calculate the total British Thermal Units (Btu) required to melt 97 lb of ice starting at -46 F to water at a solid liquid mixture state of exactly 32 F.
* A) 14080 Btu
* B) 17600 Btu
* C) 21120 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 97 \text{ lb} \times 0.48 \times 78 = 3631.7 \text{ Btu}$. To melt it requires: $Q_2 = 97 \text{ lb} \times 144 = 13968.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 17600 \text{ Btu}$.

### Q68. Calculate the total British Thermal Units (Btu) required to melt 99 lb of ice starting at -47 F to water at a solid liquid mixture state of exactly 32 F.
* A) 14408 Btu
* B) 18010 Btu
* C) 21612 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 99 \text{ lb} \times 0.48 \times 79 = 3754.1 \text{ Btu}$. To melt it requires: $Q_2 = 99 \text{ lb} \times 144 = 14256.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 18010 \text{ Btu}$.

### Q69. Calculate the total British Thermal Units (Btu) required to melt 101 lb of ice starting at -48 F to water at a solid liquid mixture state of exactly 32 F.
* A) 14738 Btu
* B) 18422 Btu
* C) 22107 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 101 \text{ lb} \times 0.48 \times 80 = 3878.4 \text{ Btu}$. To melt it requires: $Q_2 = 101 \text{ lb} \times 144 = 14544.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 18422 \text{ Btu}$.

### Q70. Calculate the total British Thermal Units (Btu) required to melt 103 lb of ice starting at -49 F to water at a solid liquid mixture state of exactly 32 F.
* A) 15069 Btu
* B) 18837 Btu
* C) 22604 Btu
* **Correct Answer & Explanation: B**
  * **Explanation:** To warm the ice to 32 F requires: $Q_1 = 103 \text{ lb} \times 0.48 \times 81 = 4004.6 \text{ Btu}$. To melt it requires: $Q_2 = 103 \text{ lb} \times 144 = 14832.0 \text{ Btu}$. Total $= Q_1 + Q_2 = 18837 \text{ Btu}$.

## Sensible & Latent Heat Balances

### Q71. A cooling coil processes 1,000 cfm of air. The entering dry bulb temperature is 80 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 24,300 Btuh
* B) 27,000 Btuh
* C) 29,700 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 1,000 \times (80 - 55) = 27,000 \text{ Btuh}$.

### Q72. For a cooling coil with 1,100 cfm of airflow, the entering moisture ratio is 0.0130 lb/lb and the leaving moisture ratio is 0.0085 lb/lb. Find the latent heat removal capacity.
* A) 23,958 Btuh
* B) 19,166 Btuh
* C) 28,750 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 1,100 \times (0.0130 - 0.0085) = 23,958 \text{ Btuh}$.

### Q73. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 32,400 Btuh and the latent cooling capacity is 29,040 Btuh.
* A) 0.422
* B) 0.527
* C) 0.633
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{32,400}{32,400 + 29,040} = 0.527$.

### Q74. A dehumidifying cooling coil extracts latent heat of 34,606 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.046 gpm
* B) 0.065 gpm
* C) 0.085 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{34,606}{1061} = 32.62 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.065 \text{ gpm}$.

### Q75. A cooling coil processes 1,400 cfm of air. The entering dry bulb temperature is 84 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 38,102 Btuh
* B) 42,336 Btuh
* C) 46,570 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 1,400 \times (84 - 56) = 42,336 \text{ Btuh}$.

### Q76. For a cooling coil with 1,500 cfm of airflow, the entering moisture ratio is 0.0170 lb/lb and the leaving moisture ratio is 0.0080 lb/lb. Find the latent heat removal capacity.
* A) 65,340 Btuh
* B) 52,272 Btuh
* C) 78,408 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 1,500 \times (0.0170 - 0.0080) = 65,340 \text{ Btuh}$.

### Q77. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 44,928 Btuh and the latent cooling capacity is 73,568 Btuh.
* A) 0.303
* B) 0.379
* C) 0.455
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{44,928}{44,928 + 73,568} = 0.379$.

### Q78. A dehumidifying cooling coil extracts latent heat of 82,280 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.109 gpm
* B) 0.155 gpm
* C) 0.202 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{82,280}{1061} = 77.55 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.155 \text{ gpm}$.

### Q79. A cooling coil processes 1,800 cfm of air. The entering dry bulb temperature is 83 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 45,490 Btuh
* B) 50,544 Btuh
* C) 55,598 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 1,800 \times (83 - 57) = 50,544 \text{ Btuh}$.

### Q80. For a cooling coil with 1,900 cfm of airflow, the entering moisture ratio is 0.0210 lb/lb and the leaving moisture ratio is 0.0100 lb/lb. Find the latent heat removal capacity.
* A) 101,156 Btuh
* B) 80,925 Btuh
* C) 121,387 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 1,900 \times (0.0210 - 0.0100) = 101,156 \text{ Btuh}$.

### Q81. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 51,840 Btuh and the latent cooling capacity is 38,720 Btuh.
* A) 0.458
* B) 0.572
* C) 0.687
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{51,840}{51,840 + 38,720} = 0.572$.

### Q82. A dehumidifying cooling coil extracts latent heat of 45,738 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.060 gpm
* B) 0.086 gpm
* C) 0.112 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{45,738}{1061} = 43.11 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.086 \text{ gpm}$.

### Q83. A cooling coil processes 2,200 cfm of air. The entering dry bulb temperature is 82 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 57,737 Btuh
* B) 64,152 Btuh
* C) 70,567 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 2,200 \times (82 - 55) = 64,152 \text{ Btuh}$.

### Q84. For a cooling coil with 2,300 cfm of airflow, the entering moisture ratio is 0.0150 lb/lb and the leaving moisture ratio is 0.0095 lb/lb. Find the latent heat removal capacity.
* A) 61,226 Btuh
* B) 48,981 Btuh
* C) 73,471 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 2,300 \times (0.0150 - 0.0095) = 61,226 \text{ Btuh}$.

### Q85. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 69,984 Btuh and the latent cooling capacity is 69,696 Btuh.
* A) 0.401
* B) 0.501
* C) 0.601
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{69,984}{69,984 + 69,696} = 0.501$.

### Q86. A dehumidifying cooling coil extracts latent heat of 108,900 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.144 gpm
* B) 0.205 gpm
* C) 0.267 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{108,900}{1061} = 102.64 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.205 \text{ gpm}$.

### Q87. A cooling coil processes 2,600 cfm of air. The entering dry bulb temperature is 81 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 63,180 Btuh
* B) 70,200 Btuh
* C) 77,220 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 2,600 \times (81 - 56) = 70,200 \text{ Btuh}$.

### Q88. For a cooling coil with 2,700 cfm of airflow, the entering moisture ratio is 0.0190 lb/lb and the leaving moisture ratio is 0.0090 lb/lb. Find the latent heat removal capacity.
* A) 130,680 Btuh
* B) 104,544 Btuh
* C) 156,816 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 2,700 \times (0.0190 - 0.0090) = 130,680 \text{ Btuh}$.

### Q89. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 84,672 Btuh and the latent cooling capacity is 142,296 Btuh.
* A) 0.298
* B) 0.373
* C) 0.448
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{84,672}{84,672 + 142,296} = 0.373$.

### Q90. A dehumidifying cooling coil extracts latent heat of 154,396 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.204 gpm
* B) 0.291 gpm
* C) 0.379 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{154,396}{1061} = 145.52 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.291 \text{ gpm}$.

### Q91. A cooling coil processes 3,000 cfm of air. The entering dry bulb temperature is 80 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 67,068 Btuh
* B) 74,520 Btuh
* C) 81,972 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 3,000 \times (80 - 57) = 74,520 \text{ Btuh}$.

### Q92. For a cooling coil with 3,100 cfm of airflow, the entering moisture ratio is 0.0130 lb/lb and the leaving moisture ratio is 0.0085 lb/lb. Find the latent heat removal capacity.
* A) 67,518 Btuh
* B) 54,014 Btuh
* C) 81,022 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 3,100 \times (0.0130 - 0.0085) = 67,518 \text{ Btuh}$.

### Q93. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 89,856 Btuh and the latent cooling capacity is 77,440 Btuh.
* A) 0.430
* B) 0.537
* C) 0.645
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{89,856}{89,856 + 77,440} = 0.537$.

### Q94. A dehumidifying cooling coil extracts latent heat of 87,846 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.116 gpm
* B) 0.166 gpm
* C) 0.215 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{87,846}{1061} = 82.80 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.166 \text{ gpm}$.

### Q95. A cooling coil processes 3,400 cfm of air. The entering dry bulb temperature is 84 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 95,839 Btuh
* B) 106,488 Btuh
* C) 117,137 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 3,400 \times (84 - 55) = 106,488 \text{ Btuh}$.

### Q96. For a cooling coil with 3,500 cfm of airflow, the entering moisture ratio is 0.0170 lb/lb and the leaving moisture ratio is 0.0080 lb/lb. Find the latent heat removal capacity.
* A) 152,460 Btuh
* B) 121,968 Btuh
* C) 182,952 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 3,500 \times (0.0170 - 0.0080) = 152,460 \text{ Btuh}$.

### Q97. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 93,312 Btuh and the latent cooling capacity is 165,528 Btuh.
* A) 0.288
* B) 0.361
* C) 0.433
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{93,312}{93,312 + 165,528} = 0.361$.

### Q98. A dehumidifying cooling coil extracts latent heat of 179,080 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.236 gpm
* B) 0.338 gpm
* C) 0.439 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{179,080}{1061} = 168.78 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.338 \text{ gpm}$.

### Q99. A cooling coil processes 3,800 cfm of air. The entering dry bulb temperature is 83 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 99,727 Btuh
* B) 110,808 Btuh
* C) 121,889 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 3,800 \times (83 - 56) = 110,808 \text{ Btuh}$.

### Q100. For a cooling coil with 3,900 cfm of airflow, the entering moisture ratio is 0.0210 lb/lb and the leaving moisture ratio is 0.0100 lb/lb. Find the latent heat removal capacity.
* A) 207,636 Btuh
* B) 166,109 Btuh
* C) 249,163 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 3,900 \times (0.0210 - 0.0100) = 207,636 \text{ Btuh}$.

### Q101. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 108,000 Btuh and the latent cooling capacity is 77,440 Btuh.
* A) 0.466
* B) 0.582
* C) 0.699
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{108,000}{108,000 + 77,440} = 0.582$.

### Q102. A dehumidifying cooling coil extracts latent heat of 89,298 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.118 gpm
* B) 0.168 gpm
* C) 0.219 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{89,298}{1061} = 84.16 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.168 \text{ gpm}$.

### Q103. A cooling coil processes 4,200 cfm of air. The entering dry bulb temperature is 82 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 102,060 Btuh
* B) 113,400 Btuh
* C) 124,740 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 4,200 \times (82 - 57) = 113,400 \text{ Btuh}$.

### Q104. For a cooling coil with 4,300 cfm of airflow, the entering moisture ratio is 0.0150 lb/lb and the leaving moisture ratio is 0.0095 lb/lb. Find the latent heat removal capacity.
* A) 114,466 Btuh
* B) 91,573 Btuh
* C) 137,359 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 4,300 \times (0.0150 - 0.0095) = 114,466 \text{ Btuh}$.

### Q105. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 133,056 Btuh and the latent cooling capacity is 127,776 Btuh.
* A) 0.408
* B) 0.510
* C) 0.612
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{133,056}{133,056 + 127,776} = 0.510$.

### Q106. A dehumidifying cooling coil extracts latent heat of 196,020 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.259 gpm
* B) 0.370 gpm
* C) 0.481 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{196,020}{1061} = 184.75 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.370 \text{ gpm}$.

### Q107. A cooling coil processes 4,600 cfm of air. The entering dry bulb temperature is 81 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 116,251 Btuh
* B) 129,168 Btuh
* C) 142,085 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 4,600 \times (81 - 55) = 129,168 \text{ Btuh}$.

### Q108. For a cooling coil with 4,700 cfm of airflow, the entering moisture ratio is 0.0190 lb/lb and the leaving moisture ratio is 0.0090 lb/lb. Find the latent heat removal capacity.
* A) 227,480 Btuh
* B) 181,984 Btuh
* C) 272,976 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 4,700 \times (0.0190 - 0.0090) = 227,480 \text{ Btuh}$.

### Q109. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 134,784 Btuh and the latent cooling capacity is 243,936 Btuh.
* A) 0.285
* B) 0.356
* C) 0.427
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{134,784}{134,784 + 243,936} = 0.356$.

### Q110. A dehumidifying cooling coil extracts latent heat of 260,876 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.344 gpm
* B) 0.492 gpm
* C) 0.640 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{260,876}{1061} = 245.88 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.492 \text{ gpm}$.

### Q111. A cooling coil processes 5,000 cfm of air. The entering dry bulb temperature is 80 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 116,640 Btuh
* B) 129,600 Btuh
* C) 142,560 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 5,000 \times (80 - 56) = 129,600 \text{ Btuh}$.

### Q112. For a cooling coil with 5,100 cfm of airflow, the entering moisture ratio is 0.0130 lb/lb and the leaving moisture ratio is 0.0085 lb/lb. Find the latent heat removal capacity.
* A) 111,078 Btuh
* B) 88,862 Btuh
* C) 133,294 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 5,100 \times (0.0130 - 0.0085) = 111,078 \text{ Btuh}$.

### Q113. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 151,632 Btuh and the latent cooling capacity is 125,840 Btuh.
* A) 0.437
* B) 0.546
* C) 0.656
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{151,632}{151,632 + 125,840} = 0.546$.

### Q114. A dehumidifying cooling coil extracts latent heat of 141,086 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.186 gpm
* B) 0.266 gpm
* C) 0.346 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{141,086}{1061} = 132.97 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.266 \text{ gpm}$.

### Q115. A cooling coil processes 5,400 cfm of air. The entering dry bulb temperature is 84 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 141,718 Btuh
* B) 157,464 Btuh
* C) 173,210 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 5,400 \times (84 - 57) = 157,464 \text{ Btuh}$.

### Q116. For a cooling coil with 5,500 cfm of airflow, the entering moisture ratio is 0.0170 lb/lb and the leaving moisture ratio is 0.0080 lb/lb. Find the latent heat removal capacity.
* A) 239,580 Btuh
* B) 191,664 Btuh
* C) 287,496 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 5,500 \times (0.0170 - 0.0080) = 239,580 \text{ Btuh}$.

### Q117. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 151,200 Btuh and the latent cooling capacity is 257,488 Btuh.
* A) 0.296
* B) 0.370
* C) 0.444
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{151,200}{151,200 + 257,488} = 0.370$.

### Q118. A dehumidifying cooling coil extracts latent heat of 275,880 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.364 gpm
* B) 0.520 gpm
* C) 0.676 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{275,880}{1061} = 260.02 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.520 \text{ gpm}$.

### Q119. A cooling coil processes 5,800 cfm of air. The entering dry bulb temperature is 83 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 157,853 Btuh
* B) 175,392 Btuh
* C) 192,931 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 5,800 \times (83 - 55) = 175,392 \text{ Btuh}$.

### Q120. For a cooling coil with 5,900 cfm of airflow, the entering moisture ratio is 0.0210 lb/lb and the leaving moisture ratio is 0.0100 lb/lb. Find the latent heat removal capacity.
* A) 314,116 Btuh
* B) 251,293 Btuh
* C) 376,939 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 5,900 \times (0.0210 - 0.0100) = 314,116 \text{ Btuh}$.

### Q121. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 149,040 Btuh and the latent cooling capacity is 116,160 Btuh.
* A) 0.450
* B) 0.562
* C) 0.674
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{149,040}{149,040 + 116,160} = 0.562$.

### Q122. A dehumidifying cooling coil extracts latent heat of 132,858 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.175 gpm
* B) 0.251 gpm
* C) 0.326 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{132,858}{1061} = 125.22 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.251 \text{ gpm}$.

### Q123. A cooling coil processes 6,200 cfm of air. The entering dry bulb temperature is 82 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 156,686 Btuh
* B) 174,096 Btuh
* C) 191,506 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 6,200 \times (82 - 56) = 174,096 \text{ Btuh}$.

### Q124. For a cooling coil with 6,300 cfm of airflow, the entering moisture ratio is 0.0150 lb/lb and the leaving moisture ratio is 0.0095 lb/lb. Find the latent heat removal capacity.
* A) 167,706 Btuh
* B) 134,165 Btuh
* C) 201,247 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 6,300 \times (0.0150 - 0.0095) = 167,706 \text{ Btuh}$.

### Q125. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 200,448 Btuh and the latent cooling capacity is 185,856 Btuh.
* A) 0.415
* B) 0.519
* C) 0.623
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{200,448}{200,448 + 185,856} = 0.519$.

### Q126. A dehumidifying cooling coil extracts latent heat of 283,140 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.374 gpm
* B) 0.534 gpm
* C) 0.694 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{283,140}{1061} = 266.86 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.534 \text{ gpm}$.

### Q127. A cooling coil processes 6,600 cfm of air. The entering dry bulb temperature is 81 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 153,965 Btuh
* B) 171,072 Btuh
* C) 188,179 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 6,600 \times (81 - 57) = 171,072 \text{ Btuh}$.

### Q128. For a cooling coil with 6,700 cfm of airflow, the entering moisture ratio is 0.0190 lb/lb and the leaving moisture ratio is 0.0090 lb/lb. Find the latent heat removal capacity.
* A) 324,280 Btuh
* B) 259,424 Btuh
* C) 389,136 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 6,700 \times (0.0190 - 0.0090) = 324,280 \text{ Btuh}$.

### Q129. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 198,288 Btuh and the latent cooling capacity is 345,576 Btuh.
* A) 0.292
* B) 0.365
* C) 0.438
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{198,288}{198,288 + 345,576} = 0.365$.

### Q130. A dehumidifying cooling coil extracts latent heat of 367,356 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.485 gpm
* B) 0.693 gpm
* C) 0.901 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{367,356}{1061} = 346.24 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.693 \text{ gpm}$.

### Q131. A cooling coil processes 7,000 cfm of air. The entering dry bulb temperature is 80 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 170,100 Btuh
* B) 189,000 Btuh
* C) 207,900 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 7,000 \times (80 - 55) = 189,000 \text{ Btuh}$.

### Q132. For a cooling coil with 7,100 cfm of airflow, the entering moisture ratio is 0.0130 lb/lb and the leaving moisture ratio is 0.0085 lb/lb. Find the latent heat removal capacity.
* A) 154,638 Btuh
* B) 123,710 Btuh
* C) 185,566 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 7,100 \times (0.0130 - 0.0085) = 154,638 \text{ Btuh}$.

### Q133. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 194,400 Btuh and the latent cooling capacity is 174,240 Btuh.
* A) 0.422
* B) 0.527
* C) 0.633
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{194,400}{194,400 + 174,240} = 0.527$.

### Q134. A dehumidifying cooling coil extracts latent heat of 194,326 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.257 gpm
* B) 0.366 gpm
* C) 0.476 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{194,326}{1061} = 183.15 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.366 \text{ gpm}$.

### Q135. A cooling coil processes 7,400 cfm of air. The entering dry bulb temperature is 84 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 201,398 Btuh
* B) 223,776 Btuh
* C) 246,154 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 7,400 \times (84 - 56) = 223,776 \text{ Btuh}$.

### Q136. For a cooling coil with 7,500 cfm of airflow, the entering moisture ratio is 0.0170 lb/lb and the leaving moisture ratio is 0.0080 lb/lb. Find the latent heat removal capacity.
* A) 326,700 Btuh
* B) 261,360 Btuh
* C) 392,040 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 7,500 \times (0.0170 - 0.0080) = 326,700 \text{ Btuh}$.

### Q137. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 213,408 Btuh and the latent cooling capacity is 349,448 Btuh.
* A) 0.303
* B) 0.379
* C) 0.455
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{213,408}{213,408 + 349,448} = 0.379$.

### Q138. A dehumidifying cooling coil extracts latent heat of 372,680 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.492 gpm
* B) 0.703 gpm
* C) 0.914 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{372,680}{1061} = 351.25 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.703 \text{ gpm}$.

### Q139. A cooling coil processes 7,800 cfm of air. The entering dry bulb temperature is 83 F and the leaving dry bulb is 57 F. Calculate the sensible cooling capacity of this coil.
* A) 197,122 Btuh
* B) 219,024 Btuh
* C) 240,926 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 7,800 \times (83 - 57) = 219,024 \text{ Btuh}$.

### Q140. For a cooling coil with 7,900 cfm of airflow, the entering moisture ratio is 0.0210 lb/lb and the leaving moisture ratio is 0.0100 lb/lb. Find the latent heat removal capacity.
* A) 420,596 Btuh
* B) 336,477 Btuh
* C) 504,715 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 7,900 \times (0.0210 - 0.0100) = 420,596 \text{ Btuh}$.

### Q141. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 207,360 Btuh and the latent cooling capacity is 154,880 Btuh.
* A) 0.458
* B) 0.572
* C) 0.687
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{207,360}{207,360 + 154,880} = 0.572$.

### Q142. A dehumidifying cooling coil extracts latent heat of 176,418 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.233 gpm
* B) 0.333 gpm
* C) 0.432 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{176,418}{1061} = 166.28 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.333 \text{ gpm}$.

### Q143. A cooling coil processes 8,200 cfm of air. The entering dry bulb temperature is 82 F and the leaving dry bulb is 55 F. Calculate the sensible cooling capacity of this coil.
* A) 215,201 Btuh
* B) 239,112 Btuh
* C) 263,023 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 8,200 \times (82 - 55) = 239,112 \text{ Btuh}$.

### Q144. For a cooling coil with 8,300 cfm of airflow, the entering moisture ratio is 0.0150 lb/lb and the leaving moisture ratio is 0.0095 lb/lb. Find the latent heat removal capacity.
* A) 220,946 Btuh
* B) 176,757 Btuh
* C) 265,135 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 8,300 \times (0.0150 - 0.0095) = 220,946 \text{ Btuh}$.

### Q145. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 244,944 Btuh and the latent cooling capacity is 243,936 Btuh.
* A) 0.401
* B) 0.501
* C) 0.601
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{244,944}{244,944 + 243,936} = 0.501$.

### Q146. A dehumidifying cooling coil extracts latent heat of 370,260 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.489 gpm
* B) 0.698 gpm
* C) 0.908 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{370,260}{1061} = 348.97 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.698 \text{ gpm}$.

### Q147. A cooling coil processes 8,600 cfm of air. The entering dry bulb temperature is 81 F and the leaving dry bulb is 56 F. Calculate the sensible cooling capacity of this coil.
* A) 208,980 Btuh
* B) 232,200 Btuh
* C) 255,420 Btuh
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible heat formula: $Q_s = 1.08 \times CFM \times \Delta T$. $Q_s = 1.08 \times 8,600 \times (81 - 56) = 232,200 \text{ Btuh}$.

### Q148. For a cooling coil with 8,700 cfm of airflow, the entering moisture ratio is 0.0190 lb/lb and the leaving moisture ratio is 0.0090 lb/lb. Find the latent heat removal capacity.
* A) 421,080 Btuh
* B) 336,864 Btuh
* C) 505,296 Btuh
* **Correct Answer & Explanation: A**
  * **Explanation:** Latent heat formula: $Q_l = 4840 \times CFM \times \Delta W$. $Q_l = 4840 \times 8,700 \times (0.0190 - 0.0090) = 421,080 \text{ Btuh}$.

### Q149. Calculate the Sensible Heat Ratio (SHR) of a system where the sensible cooling capacity is 266,112 Btuh and the latent cooling capacity is 447,216 Btuh.
* A) 0.298
* B) 0.373
* C) 0.448
* **Correct Answer & Explanation: B**
  * **Explanation:** Sensible Heat Ratio (SHR) $= \frac{Q_s}{Q_s + Q_l} = \frac{266,112}{266,112 + 447,216} = 0.373$.

### Q150. A dehumidifying cooling coil extracts latent heat of 473,836 Btuh from an airstream. Estimate the rate of water condensation forming on the coil in gallons per minute (gpm).
* A) 0.625 gpm
* B) 0.894 gpm
* C) 1.162 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** Condensation rate (lb/hr) $= \frac{Q_l}{1061 \text{ Btu/lb}} = \frac{473,836}{1061} = 446.59 \text{ lb/hr}$. In gpm: $GPM = \frac{lb/hr}{8.33 \times 60} = 0.894 \text{ gpm}$.

## Fan & Pump Curve Diagnostics

### Q151. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q152. A centrifugal pump has a 10.5 inch impeller and delivers 210 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 160.0 gpm
* B) 200.0 gpm
* C) 240.0 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 210 \times \frac{10.0}{10.5} = 200.0 \text{ gpm}$.

### Q153. A centrifugal pump with a 11.00 inch impeller develops 84 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 72.9 ft
* B) 58.3 ft
* C) 87.5 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 84 \times \left(\frac{10.25}{11.00}\right)^2 = 72.9 \text{ ft}$.

### Q154. Two identical pumps operate in parallel to deliver a total flow of 430 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (215.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q155. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q156. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q157. A centrifugal pump has a 10.0 inch impeller and delivers 260 gpm at design RPM. If the impeller is trimmed to 9.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 197.6 gpm
* B) 247.0 gpm
* C) 296.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 260 \times \frac{9.5}{10.0} = 247.0 \text{ gpm}$.

### Q158. A centrifugal pump with a 11.50 inch impeller develops 94 ft of head at design RPM. If the impeller is trimmed to 10.75 inches, what is the new developed head?
* A) 82.1 ft
* B) 65.7 ft
* C) 98.6 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 94 \times \left(\frac{10.75}{11.50}\right)^2 = 82.1 \text{ ft}$.

### Q159. Two identical pumps operate in parallel to deliver a total flow of 480 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (240.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q160. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q161. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q162. A centrifugal pump has a 11.0 inch impeller and delivers 310 gpm at design RPM. If the impeller is trimmed to 10.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 236.7 gpm
* B) 295.9 gpm
* C) 355.1 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 310 \times \frac{10.5}{11.0} = 295.9 \text{ gpm}$.

### Q163. A centrifugal pump with a 12.00 inch impeller develops 104 ft of head at design RPM. If the impeller is trimmed to 11.25 inches, what is the new developed head?
* A) 91.4 ft
* B) 73.1 ft
* C) 109.7 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 104 \times \left(\frac{11.25}{12.00}\right)^2 = 91.4 \text{ ft}$.

### Q164. Two identical pumps operate in parallel to deliver a total flow of 530 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (265.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q165. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q166. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q167. A centrifugal pump has a 10.5 inch impeller and delivers 360 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 274.3 gpm
* B) 342.9 gpm
* C) 411.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 360 \times \frac{10.0}{10.5} = 342.9 \text{ gpm}$.

### Q168. A centrifugal pump with a 11.00 inch impeller develops 114 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 99.0 ft
* B) 79.2 ft
* C) 118.8 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 114 \times \left(\frac{10.25}{11.00}\right)^2 = 99.0 \text{ ft}$.

### Q169. Two identical pumps operate in parallel to deliver a total flow of 580 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (290.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q170. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q171. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q172. A centrifugal pump has a 10.0 inch impeller and delivers 410 gpm at design RPM. If the impeller is trimmed to 9.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 311.6 gpm
* B) 389.5 gpm
* C) 467.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 410 \times \frac{9.5}{10.0} = 389.5 \text{ gpm}$.

### Q173. A centrifugal pump with a 11.50 inch impeller develops 124 ft of head at design RPM. If the impeller is trimmed to 10.75 inches, what is the new developed head?
* A) 108.4 ft
* B) 86.7 ft
* C) 130.0 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 124 \times \left(\frac{10.75}{11.50}\right)^2 = 108.4 \text{ ft}$.

### Q174. Two identical pumps operate in parallel to deliver a total flow of 630 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (315.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q175. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q176. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q177. A centrifugal pump has a 11.0 inch impeller and delivers 460 gpm at design RPM. If the impeller is trimmed to 10.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 351.3 gpm
* B) 439.1 gpm
* C) 526.9 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 460 \times \frac{10.5}{11.0} = 439.1 \text{ gpm}$.

### Q178. A centrifugal pump with a 12.00 inch impeller develops 134 ft of head at design RPM. If the impeller is trimmed to 11.25 inches, what is the new developed head?
* A) 117.8 ft
* B) 94.2 ft
* C) 141.3 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 134 \times \left(\frac{11.25}{12.00}\right)^2 = 117.8 \text{ ft}$.

### Q179. Two identical pumps operate in parallel to deliver a total flow of 680 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (340.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q180. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q181. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q182. A centrifugal pump has a 10.5 inch impeller and delivers 510 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 388.6 gpm
* B) 485.7 gpm
* C) 582.9 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 510 \times \frac{10.0}{10.5} = 485.7 \text{ gpm}$.

### Q183. A centrifugal pump with a 11.00 inch impeller develops 144 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 125.0 ft
* B) 100.0 ft
* C) 150.0 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 144 \times \left(\frac{10.25}{11.00}\right)^2 = 125.0 \text{ ft}$.

### Q184. Two identical pumps operate in parallel to deliver a total flow of 730 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (365.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q185. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q186. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q187. A centrifugal pump has a 10.0 inch impeller and delivers 560 gpm at design RPM. If the impeller is trimmed to 9.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 425.6 gpm
* B) 532.0 gpm
* C) 638.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 560 \times \frac{9.5}{10.0} = 532.0 \text{ gpm}$.

### Q188. A centrifugal pump with a 11.50 inch impeller develops 154 ft of head at design RPM. If the impeller is trimmed to 10.75 inches, what is the new developed head?
* A) 134.6 ft
* B) 107.7 ft
* C) 161.5 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 154 \times \left(\frac{10.75}{11.50}\right)^2 = 134.6 \text{ ft}$.

### Q189. Two identical pumps operate in parallel to deliver a total flow of 780 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (390.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q190. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q191. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q192. A centrifugal pump has a 11.0 inch impeller and delivers 610 gpm at design RPM. If the impeller is trimmed to 10.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 465.8 gpm
* B) 582.3 gpm
* C) 698.7 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 610 \times \frac{10.5}{11.0} = 582.3 \text{ gpm}$.

### Q193. A centrifugal pump with a 12.00 inch impeller develops 164 ft of head at design RPM. If the impeller is trimmed to 11.25 inches, what is the new developed head?
* A) 144.1 ft
* B) 115.3 ft
* C) 173.0 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 164 \times \left(\frac{11.25}{12.00}\right)^2 = 144.1 \text{ ft}$.

### Q194. Two identical pumps operate in parallel to deliver a total flow of 830 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (415.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q195. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q196. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q197. A centrifugal pump has a 10.5 inch impeller and delivers 660 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 502.9 gpm
* B) 628.6 gpm
* C) 754.3 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 660 \times \frac{10.0}{10.5} = 628.6 \text{ gpm}$.

### Q198. A centrifugal pump with a 11.00 inch impeller develops 174 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 151.1 ft
* B) 120.9 ft
* C) 181.3 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 174 \times \left(\frac{10.25}{11.00}\right)^2 = 151.1 \text{ ft}$.

### Q199. Two identical pumps operate in parallel to deliver a total flow of 880 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (440.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q200. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q201. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q202. A centrifugal pump has a 10.0 inch impeller and delivers 710 gpm at design RPM. If the impeller is trimmed to 9.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 539.6 gpm
* B) 674.5 gpm
* C) 809.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 710 \times \frac{9.5}{10.0} = 674.5 \text{ gpm}$.

### Q203. A centrifugal pump with a 11.50 inch impeller develops 184 ft of head at design RPM. If the impeller is trimmed to 10.75 inches, what is the new developed head?
* A) 160.8 ft
* B) 128.6 ft
* C) 192.9 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 184 \times \left(\frac{10.75}{11.50}\right)^2 = 160.8 \text{ ft}$.

### Q204. Two identical pumps operate in parallel to deliver a total flow of 930 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (465.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q205. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q206. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q207. A centrifugal pump has a 11.0 inch impeller and delivers 760 gpm at design RPM. If the impeller is trimmed to 10.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 580.4 gpm
* B) 725.5 gpm
* C) 870.5 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 760 \times \frac{10.5}{11.0} = 725.5 \text{ gpm}$.

### Q208. A centrifugal pump with a 12.00 inch impeller develops 194 ft of head at design RPM. If the impeller is trimmed to 11.25 inches, what is the new developed head?
* A) 170.5 ft
* B) 136.4 ft
* C) 204.6 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 194 \times \left(\frac{11.25}{12.00}\right)^2 = 170.5 \text{ ft}$.

### Q209. Two identical pumps operate in parallel to deliver a total flow of 980 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (490.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q210. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q211. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q212. A centrifugal pump has a 10.5 inch impeller and delivers 810 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 617.1 gpm
* B) 771.4 gpm
* C) 925.7 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 810 \times \frac{10.0}{10.5} = 771.4 \text{ gpm}$.

### Q213. A centrifugal pump with a 11.00 inch impeller develops 204 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 177.1 ft
* B) 141.7 ft
* C) 212.6 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 204 \times \left(\frac{10.25}{11.00}\right)^2 = 177.1 \text{ ft}$.

### Q214. Two identical pumps operate in parallel to deliver a total flow of 1030 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (515.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q215. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q216. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q217. A centrifugal pump has a 10.0 inch impeller and delivers 860 gpm at design RPM. If the impeller is trimmed to 9.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 653.6 gpm
* B) 817.0 gpm
* C) 980.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 860 \times \frac{9.5}{10.0} = 817.0 \text{ gpm}$.

### Q218. A centrifugal pump with a 11.50 inch impeller develops 214 ft of head at design RPM. If the impeller is trimmed to 10.75 inches, what is the new developed head?
* A) 187.0 ft
* B) 149.6 ft
* C) 224.4 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 214 \times \left(\frac{10.75}{11.50}\right)^2 = 187.0 \text{ ft}$.

### Q219. Two identical pumps operate in parallel to deliver a total flow of 1080 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (540.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q220. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q221. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 50% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q222. A centrifugal pump has a 11.0 inch impeller and delivers 910 gpm at design RPM. If the impeller is trimmed to 10.5 inches, estimate the new flow rate according to the pump affinity laws.
* A) 694.9 gpm
* B) 868.6 gpm
* C) 1042.4 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 910 \times \frac{10.5}{11.0} = 868.6 \text{ gpm}$.

### Q223. A centrifugal pump with a 12.00 inch impeller develops 224 ft of head at design RPM. If the impeller is trimmed to 11.25 inches, what is the new developed head?
* A) 196.9 ft
* B) 157.5 ft
* C) 236.2 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 224 \times \left(\frac{11.25}{12.00}\right)^2 = 196.9 \text{ ft}$.

### Q224. Two identical pumps operate in parallel to deliver a total flow of 1130 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (565.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q225. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

### Q226. During a post-installation commissioning check of an end suction pump, the technician notes that the pump is delivering only 55% of its design flow and 50% of its design head. The motor is running and rotation direction on the casing arrow matches the motor fan, but the impeller is actually running in backward rotation. What is the characteristic effect of backward impeller rotation on a centrifugal pump?
* A) Water flows backward from the discharge pipe into the suction pipe.
* B) The pump still discharges water in the correct direction but at roughly 50-60% of rated flow and head, with significantly reduced motor amp draw.
* C) The pump casing instantly overpressurizes, causing the relief valve to trip.
* **Correct Answer & Explanation: B**
  * **Explanation:** A centrifugal pump with a backward-running impeller still pushes water out of the discharge port due to centrifugal force, but the fluid dynamics of the blades are highly inefficient, resulting in a drop to ~50-60% of design flow/head, and a corresponding drop in motor load (amps).

### Q227. A centrifugal pump has a 10.5 inch impeller and delivers 960 gpm at design RPM. If the impeller is trimmed to 10.0 inches, estimate the new flow rate according to the pump affinity laws.
* A) 731.4 gpm
* B) 914.3 gpm
* C) 1097.1 gpm
* **Correct Answer & Explanation: B**
  * **Explanation:** According to Pump Affinity Laws for impeller trims: $GPM_2 = GPM_1 \times \frac{D_2}{D_1} = 960 \times \frac{10.0}{10.5} = 914.3 \text{ gpm}$.

### Q228. A centrifugal pump with a 11.00 inch impeller develops 234 ft of head at design RPM. If the impeller is trimmed to 10.25 inches, what is the new developed head?
* A) 203.2 ft
* B) 162.5 ft
* C) 243.8 ft
* **Correct Answer & Explanation: A**
  * **Explanation:** Pump Affinity Laws state that head varies with the square of the impeller diameter: $Head_2 = Head_1 \times \left(\frac{D_2}{D_1}\right)^2 = 234 \times \left(\frac{10.25}{11.00}\right)^2 = 203.2 \text{ ft}$.

### Q229. Two identical pumps operate in parallel to deliver a total flow of 1180 gpm. If one pump drops out or is turned off, what happens to the system flow rate?
* A) The flow rate drops to exactly half (590.0 gpm).
* B) The flow rate drops to approximately 65-70% of parallel capacity because the system operating point shifts down the single-pump curve.
* C) The remaining pump enters a high-head shutoff condition and ceases flow.
* **Correct Answer & Explanation: B**
  * **Explanation:** In parallel pump systems, when one pump stops, the operating point shifts to the intersection of the single-pump H-Q curve and the system curve. Because system resistance drops at lower flow, the remaining pump operates at a higher flow rate than its individual parallel share, delivering ~65-70% of the total flow.

### Q230. A supply fan is running at its design speed (RPM) but is delivering 15% less airflow than design, and the measured static pressure is also low. An inspection reveals a sharp 90-degree elbow directly at the fan outlet. This aerodynamic penalty is known as:
* A) Velocity pressure head conversion loss.
* B) System Effect, which imposes an unmeasurable static pressure loss that must be estimated from AMCA publication charts.
* C) Pulley slip friction.
* **Correct Answer & Explanation: B**
  * **Explanation:** System Effect is a loss in fan performance resulting from turbulent, non-uniform airflow entering or leaving the fan. It cannot be measured directly in the field but must be estimated as a static pressure penalty added to the system curve calculations.

## Advanced TAB Field Troubleshooting

### Q231. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q232. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q233. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q234. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q235. A duct system with a surface area of 1,200 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 70.9 cfm
* B) 88.6 cfm
* C) 106.4 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 4.0^{0.65} = 7.387$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 88.6$ cfm.

### Q236. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q237. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q238. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q239. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q240. A duct system with a surface area of 1,450 sq ft is tested at a static pressure of 3.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 94.8 cfm
* B) 118.5 cfm
* C) 142.1 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 3.0^{0.65} = 8.169$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 118.5$ cfm.

### Q241. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q242. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q243. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q244. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q245. A duct system with a surface area of 1,700 sq ft is tested at a static pressure of 5.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 116.1 cfm
* B) 145.2 cfm
* C) 174.2 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 5.0^{0.65} = 8.540$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 145.2$ cfm.

### Q246. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q247. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q248. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q249. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q250. A duct system with a surface area of 1,950 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 153.6 cfm
* B) 192.1 cfm
* C) 230.5 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 4.0^{0.65} = 9.849$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 192.1$ cfm.

### Q251. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q252. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q253. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q254. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q255. A duct system with a surface area of 2,200 sq ft is tested at a static pressure of 3.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 107.8 cfm
* B) 134.8 cfm
* C) 161.8 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 3.0^{0.65} = 6.127$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 134.8$ cfm.

### Q256. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q257. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q258. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q259. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q260. A duct system with a surface area of 2,450 sq ft is tested at a static pressure of 5.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 223.2 cfm
* B) 279.0 cfm
* C) 334.8 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 5.0^{0.65} = 11.387$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 279.0$ cfm.

### Q261. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q262. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q263. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q264. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q265. A duct system with a surface area of 2,700 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 159.6 cfm
* B) 199.4 cfm
* C) 239.3 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 4.0^{0.65} = 7.387$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 199.4$ cfm.

### Q266. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q267. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q268. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q269. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q270. A duct system with a surface area of 2,950 sq ft is tested at a static pressure of 3.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 192.8 cfm
* B) 241.0 cfm
* C) 289.2 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 3.0^{0.65} = 8.169$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 241.0$ cfm.

### Q271. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q272. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q273. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q274. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q275. A duct system with a surface area of 3,200 sq ft is tested at a static pressure of 5.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 218.6 cfm
* B) 273.3 cfm
* C) 327.9 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 5.0^{0.65} = 8.540$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 273.3$ cfm.

### Q276. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q277. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q278. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q279. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q280. A duct system with a surface area of 3,450 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 271.8 cfm
* B) 339.8 cfm
* C) 407.8 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 4.0^{0.65} = 9.849$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 339.8$ cfm.

### Q281. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q282. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q283. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q284. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q285. A duct system with a surface area of 3,700 sq ft is tested at a static pressure of 3.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 181.4 cfm
* B) 226.7 cfm
* C) 272.0 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 3.0^{0.65} = 6.127$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 226.7$ cfm.

### Q286. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q287. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q288. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q289. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q290. A duct system with a surface area of 3,950 sq ft is tested at a static pressure of 5.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 359.8 cfm
* B) 449.8 cfm
* C) 539.7 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 5.0^{0.65} = 11.387$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 449.8$ cfm.

### Q291. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q292. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q293. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q294. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q295. A duct system with a surface area of 4,200 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 248.2 cfm
* B) 310.2 cfm
* C) 372.3 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 4.0^{0.65} = 7.387$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 310.2$ cfm.

### Q296. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q297. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q298. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q299. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q300. A duct system with a surface area of 4,450 sq ft is tested at a static pressure of 3.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 290.8 cfm
* B) 363.5 cfm
* C) 436.2 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 3.0^{0.65} = 8.169$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 363.5$ cfm.

### Q301. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q302. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q303. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q304. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q305. A duct system with a surface area of 4,700 sq ft is tested at a static pressure of 5.0 in.w.g. If the specified leakage class is CL = 3, calculate the maximum allowable leakage rate in cfm.
* A) 321.1 cfm
* B) 401.4 cfm
* C) 481.6 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 3 \times 5.0^{0.65} = 8.540$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 401.4$ cfm.

### Q306. A three-phase motor disconnect is measured under load with the following phase-to-phase voltages: Line 1 = 460 V, Line 2 = 452 V, and Line 3 = 468 V. Calculate the percentage of voltage unbalance.
* A) 1.39%
* B) 1.74%
* C) 2.09%
* **Correct Answer & Explanation: B**
  * **Explanation:** Average Voltage $= \frac{460 + 452 + 468}{3} = 460.0 \text{ V}$. Max deviation from average $= 8.0 \text{ V}$. Voltage unbalance $(\%) = \frac{Max\ Deviation}{Average} \times 100 = \frac{8.0}{460.0} \times 100 = 1.74\%$.

### Q307. A DDC VAV supply fan VFD speed oscillates rapidly (hunts) between 30Hz and 60Hz, causing unstable duct static pressure. Which action should the TAB supervisor recommend to resolve this loop instability?
* A) Increase the proportional gain ($P$) and decrease the integral time ($I$) of the loop controller.
* B) Adjust the PID loop parameters by widening the proportional band (reducing proportional gain) and increasing the integral response time.
* C) Install a larger static pressure transmitter with a wider range.
* **Correct Answer & Explanation: B**
  * **Explanation:** Loop oscillation or hunting is caused by an overactive control loop. To stabilize it, the proportional gain must be decreased (widening the proportional band) and the integral action slowed down (increasing integral time).

### Q308. Where should a VAV system's duct static pressure sensor be physically installed to achieve stable control and minimize fan power consumption?
* A) In the fan discharge plenum to measure the maximum static pressure.
* B) Approximately 2/3 to 3/4 of the way down the main duct trunk, upstream of the first major branch.
* C) At the inlet of the return air plenum to measure building pressure.
* **Correct Answer & Explanation: B**
  * **Explanation:** Installing the static pressure sensor 2/3 to 3/4 down the main trunk ensures that the furthest VAV terminal box has sufficient pressure to modulate without the fan running at excessively high discharge pressures.

### Q309. A critical laboratory containment room is designed to maintain a negative pressure relative to the corridor. Under NEBB standards, what is the allowable flow tolerance for the exhaust air system serving this containment space?
* A) \pm 10% of design flow
* B) +10% / -0% of design flow (positive tolerance only)
* C) -10% / +0% of design flow (negative tolerance only)
* **Correct Answer & Explanation: B**
  * **Explanation:** For spaces requiring negative containment (like hazardous labs or bio-safety cabinets), the exhaust airflow must be balanced to a positive tolerance (+10% / -0%) to guarantee containment is never compromised.

### Q310. A duct system with a surface area of 4,950 sq ft is tested at a static pressure of 4.0 in.w.g. If the specified leakage class is CL = 4, calculate the maximum allowable leakage rate in cfm.
* A) 390.0 cfm
* B) 487.5 cfm
* C) 585.0 cfm
* **Correct Answer & Explanation: B**
  * **Explanation:** Allowable leakage is calculated using: $F = C_L \times P^{0.65}$, where $F$ is leakage in cfm/100 sq ft of duct surface. Here, $F = 4 \times 4.0^{0.65} = 9.849$ cfm/100 sq ft. Allowable leakage $= F \times \frac{Area}{100} = 487.5$ cfm.
