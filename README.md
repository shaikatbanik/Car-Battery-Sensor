# Predictive Battery Management System (BMS)

A smart monitoring prototype designed to predict battery health, aging, and failure risk before issues occur on the road.

##  Overview
Around 70% of EV system failures are related to batteries[cite: 1]. This project focuses on the Battery Management System (BMS) to improve vehicle reliability through early failure detection[cite: 1].

##  Technical Stack
- **IoT Stream:** ThingSpeak Channel #3351842[cite: 3].
- **Database:** Firebase Firestore (battery-health-6991b)[cite: 2].
- **UI:** Custom CSS with Futuristic Cyberpunk theme[cite: 3].
- **Logic:** JavaScript-based predictive aging calculation[cite: 3].

##  Predictive Logic
The system monitors key parameters (Voltage, Current, Temp, Cycles) and calculates the **State of Health (SOH)** using real-time factors[cite: 1, 3]:

- **Temperature Impact:** Aging is weighted based on thermal ranges (e.g., aging doubles at 40–50°C)[cite: 1].
- **Formula:** 
  - `ΔAging = ΔCycle × TempFactor`[cite: 3]
  - `Capacity Loss = Aging × 0.08%`[cite: 3]
  - `SOH = 100 - Capacity Loss`[cite: 3]

##  File Structure
- `index.html`: Live monitoring dashboard with real-time alerts[cite: 3].
- `history.html`: Historical trend analysis using Chart.js[cite: 2].
- `documentation/`: Contains project overview and presentation materials (`bms (1).pptx`)[cite: 1].

---
*Developed as part of the Car Issue Prediction System.*