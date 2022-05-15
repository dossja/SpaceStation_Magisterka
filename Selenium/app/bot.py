from time import sleep
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

# sleep(5)

# options = webdriver.ChromeOptions()

# driver = webdriver.Remote('http://selenium:4444', options=options)

driver.get('https://python.org')
sleep(5)
driver.quit()
