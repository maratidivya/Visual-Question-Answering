# Visual-Question-Answering

Welcome to our Visual Question Answering project! Our goal is to create an intelligent system that can answer simple questions about images. We've created a user-friendly web application that allows you to interact with our system and see its capabilities in action.

Check the report for more information.

## Dataset
For this project, we used the [VizWiz](https://www.kaggle.com/datasets/lhanhsin/vizwiz/data) dataset. It is a large-scale visual question answering dataset that contains

* 20,523 training image/question pairs
* 205,230 training answer/answer confidence pairs
* 4,319 validation image/question pairs
* 43,190 validation answer/answer confidence pairs
* 8,000 test image/question pairs
  
Dataset files are as follows:

*Images: training, validation, and test sets

*Annotations: Visual questions are split into three JSON files: train, validation, and test. Answers are publicly shared for the train and validation splits and hidden for the test split.

## User Interface



<img src= "https://github.com/maratidivya/Visual-Question-Answering/assets/107937294/3f5e3b85-3e61-4093-a47b-87fc9de1b242" width="650" height="500" >


## How to run this
1.Make sure to install [Anaconda](https://www.anaconda.com/download/success)

2.Install the requirements.txt

  ```python
  pip install -r requirements.txt
  ```

3. Run the vqa_code.ipynb , and you need to place the trained model in the Saved_Models folder with the name model.pth. (You also get the onehotencoder for answer and answer_type, you can also replace that files in the Saved_models folder if needed.)


4.Run the application in Anaconda prompt

```python
python app.py
```

5.Open your browser and go to [http://localhost:5000/](http://localhost:5000/)

## Contributors
* [Marati Divyateja](https://github.com/maratidivya)
* [Seerla Parimala](https://github.com/seerla-parimala)
* [Musal Reddy Gari Sravanthi](https://github.com/mrgsravanthi)




