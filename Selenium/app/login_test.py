from time import sleep
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
from selenium.webdriver.common.by import By


def test_succesful_login(driver):
    login_field = driver.find_element(By.XPATH, """//*[@id="email"]""")
    login_field.send_keys("Lois.Lane@firm.com")
    password_field = driver.find_element(By.XPATH, """//*[@id="password"]""")
    password_field.send_keys("1234")
    singIn_btn = driver.find_element(
        By.XPATH, """//*[@id="root"]/div/header/div/div/div/div[2]/button/span[1]""")
    singIn_btn.click()
    sleep(10)
