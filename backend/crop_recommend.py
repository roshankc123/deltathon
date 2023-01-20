import pandas as pd
import pickle
import numpy as np

def data_read(data):
  df = pd.DataFrame(data)
  print(df.columns)
  df.drop(6,axis=1, inplace=True)
  df.drop(5,axis=1, inplace=True)
  a = df.describe().mean()
  b= []
  for i in range(len(a)):
    b.append(a[i])
  return b


dict_label = {'rice': 0,'maize': 1,'chickpea': 2,'kidneybeans': 3,'pigeonpeas': 4, 'mothbeans': 5,'mungbean': 6,'blackgram': 7,
 'lentil': 8,'pomegranate': 9,'banana': 10,'mango': 11,'grapes': 12,'watermelon': 13,'muskmelon': 14,'apple': 15,'orange': 16,'papaya': 17,'coconut': 18,'cotton': 19,
 'jute': 20,'coffee': 21}
def crop_recomendation(n, p, k, temp, hum, rainf):
    input1 = pd.DataFrame([[n,p,k,temp,hum,rainf]],columns=['N', 'P', 'K', 'temperature', 'humidity', 'rainfall'])
    scaling_obj = pickle.load(open('models/crop/robust_scaler.pkl', 'rb'))
    test_data = scaling_obj.transform(input1)
    model = pickle.load(open('models/crop/crop_recommendation_model.pkl', 'rb'))
    y_predicted_probability = model.predict_proba(test_data)
    y_predicted_probability = np.where(y_predicted_probability < 0.2, 0, y_predicted_probability)
    index = np.nonzero(y_predicted_probability)[1]
    value = [i for i in index]
    crop_name = []
    for i in value:
        for j in dict_label:
            if dict_label[j]==i:
                crop_name.append(j)
    return crop_name
# print(crop_recomendation(22,22,22,22,60,30))

def main(data):
    temp = data_read(data)
    
    return crop_recomendation(temp[0], temp[1], temp[2], temp[3], temp[4], 30)

# pritn(main())