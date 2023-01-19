

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <string.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_BME280.h>
#include "DHT.h"

#define DHTPIN 5  
#define DHTTYPE DHT11   

#define SERVER_IP "192.168.43.164"
#define SERVER_PORT 8000

#ifndef STASSID
#define STASSID "AndroidAP4c14"
#define STAPSK "12345677"
#endif

#define getName(var) #var      ////retrieve variable name   

String serverUrl = "http://"+(String)SERVER_IP+":"+(String)SERVER_PORT;

Adafruit_BME280 bme; // use I2C interface
Adafruit_Sensor *bme_temp = bme.getTemperatureSensor();
Adafruit_Sensor *bme_pressure = bme.getPressureSensor();
Adafruit_Sensor *bme_humidity = bme.getHumiditySensor();

int speaker = 10;

void connect_wifi(){

  WiFi.begin(STASSID, STAPSK);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected! : ");
  // Serial.println(WiFi.localIP());


}

void connect_server(){

  WiFiClient client;
  HTTPClient http;

  http.begin(client, serverUrl + "/");
  int responseCode = http.GET();

  if(responseCode == 200){
    Serial.println("\nconnected to server");
  } else{
    Serial.println("connection to server failed!");
  }

}

String encode_payload(float temp = 0, float humidity = 0, float moisture = 0){

  // String data = "{\"a\":\"b\"}";////(String)temp + "," + (String)humidity + "," + moisture;

  String data = "{\"temperature\":\"" + (String)temp + "\",\"humidity\":\"" + (String)humidity + "\",\"moisture\":\"" + (String)moisture + "\"}";

  return data;   ////return data as json
}

int send_payload(String data){

  WiFiClient client;
  HTTPClient http;

  http.begin(client, serverUrl + "/postdata");

  http.addHeader("Content-Type", "application/json");

  int responseCode = http.POST(data);
  
  if(responseCode == 200){
    Serial.println("data sent to server");
    return 1;
  } else {
    Serial.println("data posting failed");
    return 0;
  }

}

DHT dht(DHTPIN, DHTTYPE);

float dht_temperature(){

  float temp = dht.readTemperature();

  return temp;




}

float dht_humidity(){
  
  float temp = dht.readHumidity();

  return temp;




}

const int moisturPin = A0;

void moisture_data(){

  float sensorValue = analogRead(A0);
  float temp = sensorValue - 449;
  return (100 - (temp/5.75));

}

int buzzerPin = 4;

void buzz(){

  for (int i = 0; i < 100; i++) {  // make a sound
		digitalWrite(buzzerPin, HIGH); // send high signal to buzzer 
		delay(1); // delay 1ms
		digitalWrite(buzzerPin, LOW); // send low signal to buzzer
		delay(1);
	}

}

// unsigned long time;
// unsigned long buttonDelayTill;


int buttonLock = 0;

const int buttonPin = 14; 

int buttonState = 0;

/////moisture data A0
/////button data d5
/////buzzer d2
/////dht d1

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);

  pinMode(buttonPin, INPUT);

  pinMode(buzzerPin, OUTPUT);

  pinMode(A0, INPUT);

  dht.begin();

  connect_wifi();

  connect_server();

  // buttonDelayTill = 0;

  buttonState = 0;

  
}


void loop() {
  
  buttonState = digitalRead(buttonPin);

  if(buttonState == 1 && buttonLock == 0){  ///wait till pushed margin time is passed
    buttonLock = 1;
    if(send_payload(encode_payload(dht_temperature(), dht_humidity(), moisture_data()))){
      ///buzz
      buzz();
    }
  }

  if(buttonState == 0){
    buttonLock = 0;
  }
    
}


