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
    addMission_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div/button/span[1]'
    modifyMission_btn_xpath = '/html/body/div[2]/div[3]/div/div/div[2]/button/span[1]'

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

    def click_showCrew(self, id):
        self.showCrew_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[3]/button/span[1]'
        self.showCrew_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.showCrew_btn_xpath)))
        self.showCrew_btn.click()

    def click_editCrew(self, id):
        self.editCrew_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[3]/button/span[1]'
        self.editCrew_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.editCrew_btn_xpath)))
        self.editCrew_btn.click()

    def click_addMission(self):
        self.addMission_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addMission_btn_xpath)))
        self.addMission_btn.click()

    def tick_missionCrew(self, crewId):
        lists = list(crewId.split(', '))
        for id in range(0, len(lists)):
            print(lists[id])
            self.missionCrew_checkbox_xpath = '/html/body/div[2]/div[3]/div/div/div[1]/div/ul/li[' + \
                str(lists[id]) + ']/div/div[1]/span'
            self.missionCrew_checkbox = WebDriverWait(self.driver, 20).until(
                EC.element_to_be_clickable((By.XPATH, self.missionCrew_checkbox_xpath)))
            self.missionCrew_checkbox.click()

    def click_modifyMission(self):
        self.modifyMission_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.modifyMission_btn_xpath)))
        self.modifyMission_btn.click()
