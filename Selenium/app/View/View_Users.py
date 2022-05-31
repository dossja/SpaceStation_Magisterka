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

    users_btn_xpath = '//*[@id="usersLink"]'
    addUsers_btn_xpath = '//*[@id="addUser"]'
    name_field_xpath = '//*[@id="name"]'
    surname_field_xpath = '//*[@id="surname"]'
    position_dd_xpath = '//div[contains(@id, "select")]'
    manager_switch_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div[1]/div[4]/label/span[1]/span[1]'
    addUser_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div[2]/button/span[1]'

    def __init__(self, driver) -> None:
        self.driver = driver

    def click_users(self):
        self.users_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.users_btn_xpath)))
        self.users_btn.click()

    def click_addUsers(self):
        self.addUsers_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addUsers_btn_xpath)))
        self.addUsers_btn.click()

    def insertUserData(self, name, surname, position, manager):
        self.name_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.name_field_xpath)))
        self.name_field.send_keys(name)
        self.surname_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.surname_field_xpath)))
        self.surname_field.send_keys(surname)
        self.position_dd = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.position_dd_xpath)))
        self.position_dd.click()
        self.dropdownPosition_btn_xpath = '//*[@id="' + position + '"]'
        self.dropdownPosition_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.dropdownPosition_btn_xpath)))
        self.dropdownPosition_btn.click()
        if manager == 'True':
            self.manager_switch = WebDriverWait(self.driver, 20).until(
                EC.element_to_be_clickable((By.XPATH, self.manager_switch_xpath)))
            self.manager_switch.click()

    def click_addUser(self):
        self.addUser_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addUser_btn_xpath)))
        self.addUser_btn.click()
