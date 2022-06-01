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
    showUsers_btn_xpath = '//*[@id="showUsers"]'
    name_field_xpath = '//*[@id="name"]'
    surname_field_xpath = '//*[@id="surname"]'
    email_field_xpath = '//*[@id="email"]'
    position_dd_xpath = '//div[contains(@id, "select")]'
    manager_switch_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div[1]/div[4]/label/span[1]/span[1]'
    addUser_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div[2]/button/span[1]'
    modifyUser_btn_xpath = '/html/body/div[2]/div[3]/div/div/div[2]/button/span[1]'

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

    def click_showUsers(self):
        self.showUsers_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.showUsers_btn_xpath)))
        self.showUsers_btn.click()

    def click_deleteUser(self, id):
        self.deleteUser_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[6]/button[2]/span[1]'
        self.deleteUser_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.deleteUser_btn_xpath)))
        self.deleteUser_btn.click()

    def click_editUser(self, id):
        self.editUser_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[6]/button[1]/span[1]'
        self.editUser_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.editUser_btn_xpath)))
        self.editUser_btn.click()

    def changeUserData(self, name, surname, email, position, manager):
        print(name, surname, email, position, manager)
        self.name_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.name_field_xpath)))
        self.name_field.send_keys(name)
        self.surname_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.surname_field_xpath)))
        self.surname_field.send_keys(surname)
        self.email_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.email_field_xpath)))
        self.email_field.send_keys(email)
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

    def click_modifyUser(self):
        self.modifyUser_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.modifyUser_btn_xpath)))
        self.modifyUser_btn.click()
