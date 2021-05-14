# Group-62-WeatherSimple
## Introduction: 
Weather conditions can change drastically, affecting the safety of one’s travel and greatly affecting how one’s day is planned. Having access to weather information is vital. With weather data that is provided using OpenWeatherAPI. WeatherSimple can provide live and accurate updates on weather on various cities. Weather Simple aims to bring simplicity and reliability too information about the current weather conditions, upcoming forecast, and conditions. Weather Simple allows users to plan their days and weeks with vital weather information. WeatherSimple gives a modern, modular approach to a weather application. WeatherSimple’s main goal is to provide a seamless weather viewing platform across all devices, while giving a pleasant viewing experience. 

## Table of Contents 
1. [**Project Information**](#Project-Information)
2. [**Code**](#Code)
    1. [Code Folder](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Code)
3. [**Design**](#Design)
    1. [Design Folder](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Design)
    2. [Prototype](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Design/Prototype)
    3. [Class Diagram](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Design/Class%20Diagram.png)
    4. [System Level State Diagram](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Design/System%20Level%20State%20Diagram.JPG)
    5. [Weather Search Sequence Diagram](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Design/Weather%20Search%20Sequence%20Diagram.JPG)   
4. [**Requirements**](#Requirements)
    1. [Requirements Folder](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Requirements)
    2. [1 - Requirements Diagram](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Requirements/1%20-%20Requirements%20Diagram.pdf)
    3. [2 - User Interaction Interface](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Requirements/2%20-%20User%20Interaction%20Interface.pdf)
    4. [3 - Functioning Web Applicaiton](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Requirements/3%20-%20Functioning%20Web%20Application.pdf)
    5. [Requirements Modelling](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Requirements/Requirements%20Modelling.pdf)
    6. [Requirements & Stakeholders](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Requirements/Requirements.pdf)
5. [**Test Cases**](#Test-Cases)
    1. [Test Case Folder](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Test%20Case)
6. [**Use Cases**](#Use-Cases)
    1. [Use Case Folder](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Use%20Cases)
    2. [1 - JamBoard](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Use%20Cases/1%20-%20JamBoard)
    3. [2 - CRC Cards](https://github.com/SOFE2720/Group-62-WeatherSimple/tree/main/Use%20Cases/2%20-%20CRC%20Cards)
    4. [3 - Use Case Diagram](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Use%20Cases/3%20-%20Use%20Case%20Diagram.pdf)
    5. [4 - User Stories](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Use%20Cases/4%20-%20User%20Stories.pdf)
    6. [5 - User Story](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Use%20Cases/5%20-%20User%20Story.pdf)
    7. [6 - Use Cases](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Use%20Cases/6%20-%20Use%20Cases.pdf)

## Project Information

WeatherSimple will provide current and upcoming weather data, including overcast condition, temperature, percentage of precipitation and other mirror condition data. 

The final deliverable will include a functioning weather app that can function on any web capable device. WeatherSimple will have the ability to scale to any screen size, and allow users to pick between dark mode and light mode.

## **Code**

Contains all the code, for the WeatherSimple website. Website is ready to run from inital download, with API key already allocated with in the document. WeatherSimple has a simple weather searching API, that allows for users to get real time weather information. Once the user hits search, the map will go to the location that is searched while also displaying the temperature. 

This README.md provides a guide to help users download, and try out our WeatherSimple application. This can be easily done by downloading the file and unzipping, all required elements are with in the file. 

**Note: JavaScript must be enabled**

## **Step 1**
>Clone the repository 
>
>git clone https://github.com/SOFE2720/Group-62-WeatherSimple.git

## **Step 2**
>Open index.html 
>
>Enable location

## **Design**

The design element contains contains a class diagram which details how all classes, entities and attributes. Along with a system level state diagram which details the states of the classes and attributes of the system. Finally A sequence diadram was included to display how a user may interfact with WeatherSimple. 

## **Requirements**

This section consists of  requirements for the program presented throughout multiple diagrams and descriptions. 

These include the Requirements Diagram, the User Interaction Interface, and Functioning Web Application. 

Along with each requirement, a small description and potential scenario is added in order to help further comprehension of each requirement. 

## **Test Cases**

#### Note: Install Selenium package via `pip install selenium`
## **Step 1**
>Download test case and code folder. 

## **Step 2**
>Open code folder in [Visual Studio Code](https://code.visualstudio.com/download) and create local server using **LiveServer extenstion**, ensure your local server is being run on   Google Chrome. 

## **Step 3:** 
>Open [Integration.py](https://github.com/SOFE2720/Group-62-WeatherSimple/blob/main/Testing%20Model/integrationtest.py) in [PyCharm](https://www.jetbrains.com/pycharm/download/#section=windows)

## **Step 4:** 
>Copy your local server hyperlink starting with `http://`  and paste into `driver.get()` function on line 5 of **integrationtest.py**

## **Step 5** 
>Open terminal and enter comand `python integrationtest.py` 


## **Use Case**

Use cases, are a critical portion of this GitHub repository, where it helps build the future outlook of our application. By helping determing crucial requirements and refining these requirements. These use cases, show the value that specific requirements can provide to the consumer and to the overall outlook of WeatherSimple.

The use case portion of this GitHub repository showcases, several aspects of our WealthSimple application that we built upon in the beginning stages of development cycle.
- This portion includes a *JamBoard* that showcases, the user story needs that are separated into core website features, api features and developmental features. 
- In addition, this folder also carries the *CRC Cards* that enables discussion. 
- This folder also contains the *User Story* that showcases the value of a specific function back towards the consumer. 
- Finally, this folder also contains the *Use Case Diagram* and the *Use Cases*, which shows how a person would interact with the system and its processes to accomplish these goals. These provide valuable information in the building of the functions and the future outlook of the program. 

