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

    login_field_xpath = '//input[contains(@id, "email")]'

    def __init__(self, driver) -> None:
        self.driver = driver
        self.login_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.login_field_xpath)))

    def insert_login(self, value):
        self.login_field.send_keys(value)
