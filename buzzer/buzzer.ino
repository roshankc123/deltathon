/* Sweep
  by BARRAGAN <http://barraganstudio.com>
  This example code is in the public domain.

  modified 28 May 2015
  by Michael C. Miller
  modified 8 Nov 2013
  by Scott Fitzgerald

  http://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

int buzzer = 4;
Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards


void setup() {
  // myservo.attach(2);  // attaches the servo on GIO2 to the servo object
  pinMode(buzzer, OUTPUT);
}

void loop() {


  // for (int i = 0; i < 100; i++) {  // make a sound
	// 	digitalWrite(buzzer, HIGH); // send high signal to buzzer 
	// 	delay(1); // delay 1ms
	// 	digitalWrite(buzzer, LOW); // send low signal to buzzer
	// 	delay(1);
	// }
	// delay(50);
	// for (int j = 0; j < 100; j++) { //make another sound
	// 	digitalWrite(buzzer, HIGH);
	// 	delay(2); // delay 2ms
	// 	digitalWrite(buzzer, LOW);
	// 	delay(2);
	// }
	delay(5000);
}
