// Turns ON/OFF the built-in LED when character '1' or '0' is received on the serial port.
// Sends back the received character to confirm.

char state = '0';
const int onEM = 2;
const int offEM = 3;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  pinMode(onEM, OUTPUT);
  digitalWrite(onEM, LOW);
  pinMode(offEM, OUTPUT);
  digitalWrite(offEM, LOW);
}

void loop() { }

void serialEvent() {
  switch (Serial.read()) {
    case '1':
      digitalWrite(onEM, HIGH);
      delay(10);
      digitalWrite(onEM, LOW);
      digitalWrite(LED_BUILTIN, HIGH);
      state = '1';
      break;
    case '0':
      digitalWrite(offEM, HIGH);
      delay(10);
      digitalWrite(offEM, LOW);
      digitalWrite(LED_BUILTIN, LOW);
      state = '0';
      break;
  };
  Serial.println(state);
}
