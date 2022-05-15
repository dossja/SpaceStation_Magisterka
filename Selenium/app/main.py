from time import sleep
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
from selenium.webdriver.common.by import By

from login_test import test_succesful_login

PATH = "C:\Program Files (x86)\chromedriver.exe"
PAGE = "http://localhost:3000"
driver = webdriver.Chrome(PATH)

# sleep(5)

# options = webdriver.ChromeOptions()

# driver = webdriver.Remote('http://selenium:4444', options=options)

driver.get(PAGE)
test_succesful_login(driver)
driver.quit()
