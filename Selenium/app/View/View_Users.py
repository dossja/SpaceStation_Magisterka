from lib2to3.pgen2 import driver
from logging import setLogRecordFactory
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


class Users:
    driver = None
    """

    """

    email_field_xpath = '//input[contains(@id, "email")]'

    def __init__(self, driver) -> None:
        self.driver = driver
        self.email_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.email_field_xpath)))
