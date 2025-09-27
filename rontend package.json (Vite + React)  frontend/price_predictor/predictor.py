# simple price predictor using linear regression (illustrative)
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib
import sys

def train(csv_path='sample_data.csv', out_model='price_model.joblib'):
    df = pd.read_csv(csv_path)
    # sample: columns -> date (YYYY-MM-DD), month, price
    df['month'] = pd.to_datetime(df['date']).dt.month
    X = df[['month']]
    y = df['price']
    model = LinearRegression().fit(X, y)
    joblib.dump(model, out_model)
    print('Model trained ->', out_model)

def predict(month, model_path='price_model.joblib'):
    model = joblib.load(model_path)
    price = model.predict([[int(month)]])[0]
    print(round(price, 2))

if __name__ == '__main__':
    if sys.argv[1] == 'train':
        train()
    else:
        predict(sys.argv[1])
