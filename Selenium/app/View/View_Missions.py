from lib2to3.pgen2 import driver
from logging import setLogRecordFactory
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


class Missions:
    driver = None
    """

    """

    missions_btn_xpath = '//*[@id="missionsLink"]'
    showMissions_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/button[2]/span[1]/a'
    addMissions_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/button[1]/span[1]/a'

    def __init__(self, driver) -> None:
        self.driver = driver

    def click_missions(self):
        self.missions_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.missions_btn_xpath)))
        self.missions_btn.click()

    def click_showMissions(self):
        self.showMissions_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.showMissions_btn_xpath)))
        self.showMissions_btn.click()

    def click_addMissions(self):
        self.addMissions_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addMissions_btn_xpath)))
        self.addMissions_btn.click()
