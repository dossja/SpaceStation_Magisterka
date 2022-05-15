from time import sleep
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
from selenium.webdriver.common.by import By

from login_test import test_succesful_login
from reports_test import test_reports_btn, test_show_reports, test_assign_reports

PATH = "C:\Program Files (x86)\chromedriver.exe"
PAGE = "http://localhost:3000"
driver = webdriver.Chrome(PATH)
driver.maximize_window()

# sleep(5)

# options = webdriver.ChromeOptions()

# driver = webdriver.Remote('http://selenium:4444', options=options)

driver.get(PAGE)
test_succesful_login(driver)
test_reports_btn(driver)
test_show_reports(driver)
# test_assign_reports(driver)
driver.quit()
