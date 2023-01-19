const int pin = A0;
// int sensorValue = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  float sensorValue = analogRead(A0);
  // sensorValue = 1024 - sensorValue;
  // float f = ((sensorValue - 4));
  float temp = sensorValue - 449;
  Serial.println(100 - (temp/5.75));
  delay(2000);

}

///button
///npk
///