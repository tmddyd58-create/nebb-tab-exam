# NEBB TAB CP (Testing, Adjusting, and Balancing Certified Professional) 시험 요점 및 예상문제

내일 치르실 TAB CP 시험 합격을 위해, NEBB 공식 수식 차트(Formula Chart)를 바탕으로 가장 출제 빈도가 높고 필수적인 핵심 이론 요약과 **대표 예상 문제 10선(풀이 포함)**을 정리했습니다.

---

## 1. 핵심 공식 & 상수 요약 (Cheat Sheet)

### A. 공기측 (Air Side) 공식 (Standard Air 기준: 밀도 $\rho = 0.075 \text{ lb/ft}^3$)
* **풍량과 풍속**: $Q (\text{CFM}) = V (\text{FPM}) \times A (\text{ft}^2)$
* **풍속 계산 (표준 공기)**: $V = 4005 \times \sqrt{VP}$  (단, $VP$는 in. w.g.)
* **풍속 계산 (비표준 공기)**: $V = 1096 \times \sqrt{\frac{VP}{\rho}}$  (단, $\rho$는 실제 공기 밀도 $\text{lb/ft}^3$)
* **공기교환횟수**: $\text{ACH (회/시간)} = \frac{Q (\text{CFM}) \times 60}{\text{실 체적 } (\text{ft}^3)}$
* **외기 도입 비율 (%OA)**:
  $$\%OA = \frac{T_{ra} - T_{ma}}{T_{ra} - T_{oa}} \times 100$$
  *(단, $T_{ra}$: 환기 온도, $T_{ma}$: 혼합 온도, $T_{oa}$: 외기 온도)*
* **공기 열량 공식 (표준 공기 기준)**:
  * **전열 (Total Heat)**: $Q_t = 4.5 \times \text{CFM} \times \Delta h$  *(단, $\Delta h$는 엔탈피 차이 $\text{Btu/lb}$)*
  * **현열 (Sensible Heat)**: $Q_s = 1.08 \times \text{CFM} \times \Delta T$ *(단, $\Delta T$는 건구 온도차 $^\circ\text{F}$)*
  * **잠열 (Latent Heat)**: $Q_l = 4840 \times \text{CFM} \times \Delta \omega$ *(단, $\omega$는 절대습도 $\text{lb/lb}$)* 혹은 $0.69 \times \text{CFM} \times \Delta \omega_{gr}$ *(단, $\omega_{gr}$는 절대습도 $\text{grains/lb}$)*

### B. 송풍기 상사법칙 (Fan Affinity Laws)
* **풍량 비율**: $\frac{CFM_2}{CFM_1} = \frac{RPM_2}{RPM_1}$
* **압력 비율 (정압/전압)**: $\frac{SP_2}{SP_1} = \left(\frac{RPM_2}{RPM_1}\right)^2$
* **동력 비율 (BHP)**: $\frac{BHP_2}{BHP_1} = \left(\frac{RPM_2}{RPM_1}\right)^3$
* **밀도 변화 시 (RPM 일정)**:
  * 풍량(CFM)은 동일
  * 압력: $SP_2 = SP_1 \times \left(\frac{\rho_2}{\rho_1}\right)$
  * 동력: $BHP_2 = BHP_1 \times \left(\frac{\rho_2}{\rho_1}\right)$

### C. 수측 (Hydronic Side) 공식
* **펌프 상사법칙**:
  * $\frac{GPM_2}{GPM_1} = \frac{RPM_2}{RPM_1}$ (또는 임펠러 직경 비율 $\frac{D_2}{D_1}$)
  * $\frac{H_2}{H_1} = \left(\frac{RPM_2}{RPM_1}\right)^2$ (또는 $\left(\frac{D_2}{D_1}\right)^2$)
  * $\frac{BHP_2}{BHP_1} = \left(\frac{RPM_2}{RPM_1}\right)^3$ (또는 $\left(\frac{D_2}{D_1}\right)^3$)
* **수동력 (Water Horsepower, WHP)**: $\text{WHP} = \frac{GPM \times H (\text{ft.wc}) \times \text{SpGr}}{3960}$ *(물인 경우 비중 $\text{SpGr} = 1.0$)*
* **축동력 (Brake Horsepower, BHP)**: $\text{BHP} = \frac{\text{WHP}}{\eta_p} = \frac{GPM \times H (\text{ft.wc}) \times \text{SpGr}}{3960 \times \eta_p}$ *(펌프 효율 $\eta_p$가 주어지지 않으면 0.7 적용)*
* **밸브/코일 유량과 차압**: $\text{GPM} = C_v \times \sqrt{\Delta P}$  *(단, $\Delta P$는 psi 단위 차압)*
* **물측 열량 공식**: $Q (\text{Btu/hr}) = 500 \times \text{GPM} \times \Delta T (^\circ\text{F})$

### D. 전기측 (Electrical) 공식
* **3상 모터 축동력 (BHP)**:
  $$\text{BHP} = \frac{V \times I \times \text{PF} \times \text{Eff} \times 1.732}{746}$$
  *(역률 $\text{PF}$와 효율 $\text{Eff}$가 주어지지 않은 경우 각각 0.8, 0.9 적용)*
* **전압 불평형율 (%VU)**:
  $$\%VU = 100 \times \frac{\text{평균 전압과의 최대 편차}}{\text{평균 전압}}$$
  *(NEBB 규정상 최대 허용 전압 불평형은 **2%** 이내)*

---

## 2. 고빈출 예상 시험 문제 10선 및 풀이

### Q1. 덕트 트래버스 측정 점수 (Duct Traverse Points)
**문제:** NEBB 규정에 따라 다음 원형 덕트(Round Duct)의 풍량 측정을 위해 필요한 최소 피토관 측정 점수(Traverse Points)는 각각 몇 점입니까?
* (a) 직경 8인치 원형 덕트
* (b) 직경 12인치 원형 덕트
* (c) 직경 16인치 원형 덕트

**풀이:**
원형 덕트는 직교하는 2개의 축(Axis)에 대해 등면적법(Equal Area Method)으로 측정을 수행합니다.
* 직경 6" ~ 9": 축당 6점측정 $\rightarrow 6 \times 2 = \mathbf{12\text{점}}$
* 직경 10" ~ 12": 축당 8점측정 $\rightarrow 8 \times 2 = \mathbf{16\text{점}}$
* 직경 12" 초과: 축당 10점측정 $\rightarrow 10 \times 2 = \mathbf{20\text{점}}$

**정답:** (a) 12점, (b) 16점, (c) 20점

---

### Q2. 피토관 트래버스를 이용한 덕트 풍량 계산
**문제:** 크기가 24인치 $\times$ 12인치인 사각형 덕트에서 피토관 트래버스를 실시했습니다. 각 측정점에서 읽은 속도압($VP$)의 제곱근 값들의 평균($\text{Avg}(\sqrt{VP})$)이 0.50 이었습니다. 공기 상태가 표준 상태일 때, 이 덕트의 평균 풍속(FPM)과 총 풍량(CFM)을 계산하십시오.

**풀이:**
1. **평균 풍속 ($V$) 계산**:
   $$V = 4005 \times \text{Avg}(\sqrt{VP}) = 4005 \times 0.50 = 2002.5 \text{ FPM}$$
2. **덕트 단면적 ($A$) 계산**:
   $$A = \frac{\text{가로(in)} \times \text{세로(in)}}{144} = \frac{24 \times 12}{144} = 2.0 \text{ ft}^2$$
3. **총 풍량 ($Q$) 계산**:
   $$Q = V \times A = 2002.5 \text{ FPM} \times 2.0 \text{ ft}^2 = 4005 \text{ CFM}$$

**정답:** 평균 풍속 = 2002.5 FPM, 총 풍량 = 4005 CFM

---

### Q3. 비표준 상태에서의 공기 밀도 보정 풍속 계산
**문제:** 해발 4,000피트 고도에서 온도가 $250^\circ\text{F}$인 뜨거운 공기가 흐르는 덕트 내부에서 속도압($VP$)을 측정하여 0.16 in. w.g.을 얻었습니다. 이 조건에서의 공기 밀도는 $0.050 \text{ lb/ft}^3$ 입니다. 실제 풍속(FPM)을 계산하십시오. (표준 상태 공기 밀도는 $0.075 \text{ lb/ft}^3$ 임)

**풀이:**
비표준 상태의 공기 속도를 계산할 때는 실제 밀도 $\rho$를 대입하는 공식을 사용합니다.
$$V = 1096 \times \sqrt{\frac{VP}{\rho}}$$
공식에 값들을 대입합니다.
$$V = 1096 \times \sqrt{\frac{0.16}{0.050}} = 1096 \times \sqrt{3.2} \approx 1096 \times 1.7889 \approx 1960.6 \text{ FPM}$$

*(참고: 밀도 보정 계수를 이용하는 방법)*
* 밀도 비 $d_f = \frac{0.050}{0.075} = 0.667$
* $V = 4005 \times \sqrt{\frac{VP}{d_f}} = 4005 \times \sqrt{\frac{0.16}{0.667}} \approx 1962 \text{ FPM}$ (두 방식 모두 정답으로 인정됨)

**정답:** 약 1,961 FPM

---

### Q4. 송풍기 상사법칙 (속도 변경)
**문제:** 현재 900 RPM으로 회전하며 8,000 CFM의 풍량을 토출하고 있는 공급 송풍기가 있습니다. 이때 계통 정압은 1.5 in. w.g.이고, 모터 축동력(BHP)은 3.5 BHP입니다. 이 송풍기의 풍량을 9,500 CFM으로 증가시키고자 할 때 필요한:
* (a) 새로운 송풍기 회전수(RPM)
* (b) 새로운 정압(in. w.g.)
* (c) 새로운 소요 축동력(BHP)을 구하십시오.

**풀이:**
풍량 비(속도 비)는 다음과 같습니다:
$$\text{Ratio} = \frac{Q_2}{Q_1} = \frac{9500}{8000} = 1.1875$$

1. **새로운 RPM ($RPM_2$)**:
   $$RPM_2 = 900 \times 1.1875 = 1068.75 \text{ RPM}$$
2. **새로운 정압 ($SP_2$)**:
   $$SP_2 = 1.5 \times (1.1875)^2 = 1.5 \times 1.4102 = 2.12 \text{ in. w.g.}$$
3. **새로운 축동력 ($BHP_2$)**:
   $$BHP_2 = 3.5 \times (1.1875)^3 = 3.5 \times 1.6746 = 5.86 \text{ BHP}$$

**정답:** (a) 1069 RPM, (b) 2.12 in. w.g., (c) 5.86 BHP

---

### Q5. 고도 및 온도 변화에 따른 정압 및 BHP 계산 (회전수 일정)
**문제:** 표준 공기 상태(해수면, $70^\circ\text{F}$, 밀도 $0.075 \text{ lb/ft}^3$)에서 10,000 CFM의 풍량을 2.0 in. w.g. 정압으로 공급하며 5.0 BHP의 동력을 소모하는 송풍기가 있습니다. 이 송풍기를 동일한 회전수(RPM)로 해발 5,000피트, 온도 $100^\circ\text{F}$ (밀도 $0.058 \text{ lb/ft}^3$) 지역에서 운전할 때의 풍량(CFM), 정압(in. w.g.), 그리고 축동력(BHP)은 각각 얼마가 되겠습니까?

**풀이:**
송풍기의 회전수(RPM)가 일정하면 송풍기는 체적 유량계 역할을 하므로 **풍량(CFM)은 밀도 변화와 무관하게 동일**합니다. 하지만 정압과 소요 동력은 공기 밀도에 비례하여 변합니다.
1. **새로운 풍량 ($CFM_2$)**:
   $$CFM_2 = CFM_1 = 10,000 \text{ CFM}$$
2. **새로운 정압 ($SP_2$)**:
   $$SP_2 = SP_1 \times \left(\frac{\rho_2}{\rho_1}\right) = 2.0 \times \frac{0.058}{0.075} = 1.55 \text{ in. w.g.}$$
3. **새로운 축동력 ($BHP_2$)**:
   $$BHP_2 = BHP_1 \times \left(\frac{\rho_2}{\rho_1}\right) = 5.0 \times \frac{0.058}{0.075} = 3.87 \text{ BHP}$$

**정답:** 풍량 = 10,000 CFM, 정압 = 1.55 in. w.g., 축동력 = 3.87 BHP

---

### Q6. 외기 도입량 비율 (%OA) 및 혼합 공기 온도 계산
**문제:** 루프탑 공조기(RTU)의 외기(OA) 온도가 $95^\circ\text{F}$이고, 실내에서 돌아오는 환기(RA) 온도가 $75^\circ\text{F}$입니다. 공조기 믹싱 챔버를 거쳐 나온 혼합 공기(MA)의 온도가 $80^\circ\text{F}$로 측정되었습니다. 이 계통의 외기 도입 비율(%OA)을 계산하십시오.

**풀이:**
외기 비율 공식에 측정값을 대입합니다.
$$\%OA = \frac{T_{ra} - T_{ma}}{T_{ra} - T_{oa}} \times 100$$
$$\%OA = \frac{75 - 80}{75 - 95} \times 100 = \frac{-5}{-20} \times 100 = 0.25 \times 100 = 25\%$$

**정답:** 25%

---

### Q7. 3상 모터 전압 불평형률 및 실제 축동력(BHP) 계산
**문제:** 3상 460V 전원 공급 시스템에서 구동 중인 송풍기 모터가 있습니다. 측정된 상전압은 Line 1-2 = 458V, Line 2-3 = 464V, Line 3-1 = 455V 이고, 3상 평균 전류는 12.5 A 이며 역률(PF)은 0.82, 효율(Eff)은 88%입니다.
* (a) 전압 불평형률(%VU)을 계산하고, NEBB의 허용치(2%) 이내인지 판단하십시오.
* (b) 모터가 소모하는 실제 축동력(BHP)을 계산하십시오.

**풀이:**
1. **평균 전압 계산**:
   $$V_{avg} = \frac{458 + 464 + 455}{3} = 459 \text{ V}$$
2. **최대 편차 계산**:
   * $|458 - 459| = 1 \text{ V}$
   * $|464 - 459| = 5 \text{ V}$ (최대 편차)
   * $|455 - 459| = 4 \text{ V}$
3. **전압 불평형률 (%VU)**:
   $$\%VU = \frac{5}{459} \times 100 = 1.09\%$$
   *1.09%는 허용 기준치 2% 이내이므로 정상입니다.*

4. **소요 축동력 (BHP) 계산**:
   $$\text{BHP} = \frac{V_{avg} \times I \times \text{PF} \times \text{Eff} \times 1.732}{746}$$
   $$\text{BHP} = \frac{459 \times 12.5 \times 0.82 \times 0.88 \times 1.732}{746} = \frac{7170.79}{746} \approx 9.61 \text{ BHP}$$

**정답:** (a) 1.09% (합격/정상), (b) 9.61 BHP

---

### Q8. 펌프 임펠러 트리밍(Trimming)에 따른 성능 변화
**문제:** 1750 RPM으로 회전하며 250 GPM의 유량, 60 ft의 수두를 토출하고 소요 동력이 5.5 BHP인 냉수 펌프가 있습니다. 이 펌프의 임펠러 직경을 8.0인치에서 7.2인치로 깎아냈을 때(트리밍), 변경 후의:
* (a) 새로운 유량(GPM)
* (b) 새로운 양정(Feet)
* (c) 새로운 축동력(BHP)을 구하십시오.

**풀이:**
임펠러 트리밍 비는 다음과 같습니다:
$$\text{Ratio} = \frac{7.2}{8.0} = 0.90$$

1. **새로운 유량 ($GPM_2$)**:
   $$GPM_2 = 250 \times 0.90 = 225 \text{ GPM}$$
2. **새로운 양정 ($H_2$)**:
   $$H_2 = 60 \times (0.90)^2 = 60 \times 0.81 = 48.6 \text{ ft}$$
3. **새로운 동력 ($BHP_2$)**:
   $$BHP_2 = 5.5 \times (0.90)^3 = 5.5 \times 0.729 = 4.01 \text{ BHP}$$

**정답:** (a) 225 GPM, (b) 48.6 ft, (c) 4.01 BHP

---

### Q9. 밸브 $C_v$ 값을 이용한 차압 계산
**문제:** 어떤 유량 조절 밸브의 고유 유량계수 $C_v$ 값이 4.5로 설계되어 있습니다. 이 밸브에 통과시켜야 하는 설계 유량이 15 GPM일 때, 밸브 양단에서 측정되어야 하는 설계 차압은 몇 psi 및 몇 피트 수두(ft.wc)입니까? (단, $1 \text{ psi} = 2.31 \text{ ft.wc}$ 이고 물의 비중은 1.0임)

**풀이:**
1. **차압 ($\Delta P$, psi) 계산**:
   $$GPM = C_v \times \sqrt{\Delta P} \implies \sqrt{\Delta P} = \frac{GPM}{C_v}$$
   $$\Delta P = \left(\frac{GPM}{C_v}\right)^2 = \left(\frac{15}{4.5}\right)^2 = 3.333^2 = 11.11 \text{ psi}$$
2. **차압 (ft.wc) 계산**:
   $$\Delta P_{\text{ft.wc}} = 11.11 \text{ psi} \times 2.31 \text{ ft.wc/psi} = 25.66 \text{ ft.wc}$$

**정답:** 차압 = 11.11 psi (혹은 25.66 ft.wc)

---

### Q10. 열교환기 코일 전열량 및 냉수 공급량(GPM) 계산
**문제:** 풍량 5,000 CFM의 공기가 흐르는 냉각 코일이 있습니다.
* 입구 공기 상태: 건구 $80^\circ\text{F}$, 엔탈피 $h_{in} = 31.6 \text{ Btu/lb}$ (표준 공기)
* 출구 공기 상태: 건구 $55^\circ\text{F}$, 엔탈피 $h_{out} = 22.6 \text{ Btu/lb}$
* 냉수 입출구 온도: 입구 $45^\circ\text{F}$, 출구 $55^\circ\text{F}$
이때 코일이 제거하는 **(a) 전열량(Btu/hr)**과 **(b) 현열량(Btu/hr)**, 그리고 코일로 공급되어야 하는 **(c) 냉수 유량(GPM)**을 계산하십시오.

**풀이:**
1. **공기측 전열량 ($Q_t$)**:
   $$Q_t = 4.5 \times \text{CFM} \times \Delta h = 4.5 \times 5,000 \times (31.6 - 22.6) = 22,500 \times 9 = 202,500 \text{ Btu/hr}$$
2. **공기측 현열량 ($Q_s$)**:
   $$Q_s = 1.08 \times \text{CFM} \times \Delta T_{\text{공기}} = 1.08 \times 5,000 \times (80 - 55) = 5,400 \times 25 = 135,000 \text{ Btu/hr}$$
3. **물측 유량 (GPM) 계산**:
   공기측에서 뺏은 열량($Q_t$)은 물이 흡수한 열량과 같아야 합니다.
   $$Q_t = 500 \times \text{GPM} \times \Delta T_{\text{물}}$$
   $$202,500 = 500 \times \text{GPM} \times (55 - 45)$$
   $$202,500 = 5,000 \times \text{GPM}$$
   $$\text{GPM} = \frac{202,500}{5,000} = 40.5 \text{ GPM}$$

**정답:** (a) 전열량 = 202,500 Btu/hr, (b) 현열량 = 135,000 Btu/hr, (c) 냉수 유량 = 40.5 GPM

---

## 3. 시험 직전 체크해야 할 NEBB 규정 / 상식

1. **풍량 및 수량 측정 허용 오차 (Tolerances)**
   * 일반적인 공기 분배 단자(GRD) 및 수동 밸브의 유량 허용 오차는 설계 유량 대비 **$\pm 10\%$** 이내입니다.
   * 건물 환기 및 외기 도입량의 경우 일반적으로 **$+10\% / 0\%$** 또는 사양에 맞춰 양압을 유지하기 위해 최소 설계 풍량 이상으로 설정합니다.
2. **측정 계측기 검교정 주기 (Calibration Intervals)**
   * NEBB 기준상 현장에서 보고서 작성 및 확인에 사용하는 모든 필수 계측기(마노미터, 유량 후드 등)는 최소 **12개월(1년)**마다 공인 기관(NIST 소급 가능)을 통해 검교정을 받아야 합니다.
3. **피토관(Pitot Tube) 측정 원리**
   * 피토관 끝의 전면 구멍은 **전압(Total Pressure, TP)**을 측정하고, 측면의 구멍들은 **정압(Static Pressure, SP)**을 측정합니다.
   * 전압과 정압의 차이가 **속도압(Velocity Pressure, VP)**이 되며, 이를 통해 풍속을 계산합니다 ($VP = TP - SP$).
4. **사각 덕트 트래버스 방법**
   * 등면적법(Equal Area Method)과 **로그-체비셰프(Log-Tchebycheff, Log-T)법**이 주로 쓰입니다. 최근 NEBB 및 ASHRAE 규정에서는 벽면 마찰 손실을 더 정확히 감안하는 로그-체비셰프(Log-T)법을 더 권장하는 추세입니다.
