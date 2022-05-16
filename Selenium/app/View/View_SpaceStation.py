from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


class SpaceStation:
    driver = None
    """
    
    """

    email_field_xpath = '//input[contains(@id, "email")]'
    password_field_xpath = '//input[contains(@id, "password")]'
    signIn_btn_xpath = '//*[@id="root"]/div/header/div/div/div/div[2]/button'

    def __init__(self, driver) -> None:
        self.driver = driver
        self.email_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.email_field_xpath)))

    def insert_email(self, value):
        self.email_field.send_keys(value)

    def insert_password(self, value):
        self.password_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.password_field_xpath)))
        self.password_field.send_keys(value)

    def click_signIn(self):
        self.signIn_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.signIn_btn_xpath)))
        self.signIn_btn.click()
