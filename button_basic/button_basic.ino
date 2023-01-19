/*
  Button

  Turns on and off a light emitting diode(LED) connected to digital pin 13,
  when pressing a pushbutton attached to pin 2.

  The circuit:
  - LED attached from pin 13 to ground through 220 ohm resistor
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.

  created 2005
  by DojoDave <http://www.0j0.org>
  modified 30 Aug 2011
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Button
*/

const int buttonPin = 14;  

int buttonState = 0;  
int buttonLock = 0;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  if(buttonState == 1 && buttonLock == 0){    /////ensure and make a long press as one, write main code inside
    buttonLock = 1;
    Serial.println(buttonState);
  }

  if(buttonState == 0){
    buttonLock = 0;
  }

  // if(buttonLock == 0 && buttonState == 1){
  //   Serial.println(buttonState);
  // }
  
  // delay(2000);
}
