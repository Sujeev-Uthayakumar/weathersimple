from selenium import webdriver 
import time 

driver = webdriver.Chrome(executable_path='./drivers/chromedriver')
driver.get('http://YOUR_LOCAL_HOST')

time.sleep(3)

CityName = "New York"
name = driver.find_element_by_xpath('//*[@id="nav"]/ul/div[2]/div/input')
name.send_keys(CityName)

SearchButton = driver.find_element_by_xpath('//*[@id="nav"]/ul/div[2]/div/button')
SearchButton.click() 

time.sleep(5)

Test = driver.find_element_by_css_selector('.city')
Testpass = Test.text
if Testpass == "Weather in New York":
    print('Test Passed')
else:
    print("Test Failed")