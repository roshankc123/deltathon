import pickle
import pandas as pd



def data_read(data):
  df = pd.DataFrame(data)
  print(df.columns)
  df.drop(6,axis=1, inplace=True)
#   df.drop(5,axis=1, inplace=True)
  a = df.describe().mean()
  b= []
  for i in range(len(a)):
    b.append(a[i])
  return b


def fertilizer_prediction(nitrogen, phos, potassium, temp, humi, moist, soil_type, crop_type):
    soil_type_dict = {'Sandy': 0, 'Loamy': 1, 'Black': 2, 'Red': 3, 'Clayey': 4}
    fertilizer_dict = {'Urea': 0,'DAP': 1,'14-35-14': 2,'28-28': 3,'17-17-17': 4,'20-20': 5,'10-26-26': 6}
    crop_type_dict = {'Maize': 0,'Sugarcane': 1,'Cotton': 2,'Tobacco': 3,'Paddy': 4,'Barley': 5,'Wheat': 6,'Millets': 7,'Oil seeds': 8,'Pulses': 9,'Ground Nuts': 10}
    soil_type_econded= soil_type_dict[soil_type]
    crop_type_encoded = crop_type_dict[crop_type]
    input1 = pd.DataFrame([[temp,humi,moist,soil_type_econded,crop_type_encoded,nitrogen,potassium,phos]],columns=['Temparature', 'Humidity ', 'Moisture', 'Soil Type', 'Crop Type',
       'Nitrogen', 'Potassium', 'Phosphorous'])
    scaler = pickle.load(open('models/fertilizer/standard_scaler.pkl', 'rb'))
    test_data = scaler.transform(input1)
    model = pickle.load(open('models/fertilizer/fertilizer_recommend.pkl', 'rb'))
    prediction = model.predict(test_data)[0]
    fertilizer_predicted = [i for i in fertilizer_dict if fertilizer_dict[i] == prediction]
    return fertilizer_predicted



temp = 26
humi = 52
moist = 38
soil_type = "Sandy"
crop_type = "Maize"
nitrogen = 37
potassium = 0
phos = 0

# print(fertilizer_prediction(temp,humi,moist, soil_type,crop_type,nitrogen,potassium,phos))

def main(data):
    temp = data_read(data)
    
    return fertilizer_prediction(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], 'Sandy', 'Maize')